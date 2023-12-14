import dayjs, { Dayjs } from "dayjs";
import { defineStore } from "pinia";
import TodoService from "../api/services/todoService";
import todoService from "../api/services/todoService";

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
        if (this.validateDate(newTask.date)) {
          newTask.date = dayjs(newTask.date).format('ddd, MMM DD HH:mm:ss [CET] YYYY')
        }
        
        const newData = await TodoService.post(newTask)
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
      if (!this.validateTask(data.name)) {
        alert("Task can't be empty")
      }
      
      else {
        if (this.validateDate(data.date)) {
          data.date = dayjs(data.date).format('ddd, MMM DD HH:mm:ss [CET] YYYY')
        }
        
        const updatedTask = await todoService.put(data.id, data)
        this.tasks[data.indexFromTasks] = updatedTask
      }
    },

    async markDone(task, index) {
      const tempTask = {
        id : task.id,
        name : task.name,
        date : task.date,
        completed : !task.completed,
      }
      
      const markedAsDone = await todoService.put(task.id, tempTask)
      this.tasks[index] = markedAsDone
    },

    async getData() {
      this.tasks = await todoService.getAll();
    },
    
    async removeTasks(taskData) {
      await todoService.delete(taskData.index)
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