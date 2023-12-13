import dayjs, { Dayjs } from "dayjs";
import { apiDelete, apiPost, apiGetAll, apiPut, getById } from "@/api/ApiWrapper.js";
import { defineStore } from "pinia";
import TodoService from "../api/services/todoService";

const todoService = new TodoService()
export const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      tasks: [],
      completedTasks: [],
    };
  },

  getters: {
    completedTasksGetters: (state) => state.tasks.filter((task) => task.completed),
  },

  actions: {
    async createNewTask(newTask) {
      if (this.validateTask(newTask.name)) {
        if (!this.validateDate(newTask.date)) {
          newTask.date = dayjs(new Date()).format('ddd, DD MMM YYYY HH:mm:ss [GMT]')
        }

        let data = {
          name: newTask.name,
          date: newTask.date,
          completed: false,
        };

        // const createdTask = await apiPost("http://localhost:8080/add", data)
        
       const newData = await todoService.post(data)
        
        this.tasks.push(newData)
      } 
      
      else if (!this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
        alert("Invalid name input");
      } 
      
      else {
        alert("Invalid input");
      }
      return true;
    },

    async editTask(data) {
      const tempTask = {
        id : data.id,
        name : data.name,
        date : dayjs(data.date).format('ddd, DD MMM YYYY HH:mm:ss [GMT]'),
        completed : this.tasks[data.indexFromTasks].completed
      }
      
      if (!this.validateTask(tempTask.name)) {
        alert("Task can't be empty")
      }

      else {
        if (tempTask.date.length < 1) {
          tempTask.date = dayjs(new Date()).format('ddd, DD MMM YYYY HH:mm:ss [GMT]')
        }

        const editedTask = await apiPut(`http://localhost:8080/update/${data.id}`, tempTask)
        this.tasks[data.indexFromTasks] = editedTask
      }
    },

    async markDone(task, index) {
      const tempTask = {
        id : task.id,
        name : task.name,
        date : task.date,
        completed : !task.completed,
      }

      const url = `http://localhost:8080/update/${task.id}`
      const markedAsDone = await apiPut(url, tempTask)
      this.tasks[index] = markedAsDone
    },

    async getData() {
      const data = await apiGetAll("http://localhost:8080/getall")
      this.tasks = data
    },
    
    async removeTasks(taskData) {
      const data = `http://localhost:8080/delete/${taskData.index}`
      await apiDelete(data)
      this.tasks.splice(taskData.indexFromTasks, 1)
    },

    validateTask(task) {
      return task.length > 0;
    },

    validateDate(date) {
      return dayjs(date).isValid();
    },
  },
});
