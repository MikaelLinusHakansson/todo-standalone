import dayjs from "dayjs";
import { fetchWrapperDelete, fetchWrapperPost, fetchWrapperGetAll, fetchWrapperPut } from "@/stores/ApiWrapper.js";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      tasks: [],
      completedTasks: [],
    };
  },

  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
  },

  actions: {
    createNewTask(newTask) {
      if (this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
        let data = {
          id: newTask.id,
          name: newTask.name,
          date: newTask.date,
          completed: false,
        };

        fetchWrapperPost("http://localhost:8080/add", data)
        this.tasks.push(data);

        return true;
      } 
      
      else if (!this.validateDate(newTask.date) && this.validateTask(newTask.name)) {
        alert("Wrong date format");
      } 
      
      else if (!this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
        alert("Invalid name input");
      } 
      
      else {
        alert("Invalid input");
      }
    },

    editTask(data) {
      const tempTask = {
        id : data.index,
        name : data.name,
        date : data.date,
        completed : this.tasks[data.indexFromTasks].completed
      }

      fetchWrapperPut(`http://localhost:8080/update/${data.index}`, tempTask)

      this.tasks[data.indexFromTasks].name = data.name;
      this.tasks[data.indexFromTasks].date = data.date;
      this.tasks[data.indexFromTasks].completed = data.completed
    },

    markDone(task, index) {
      const tempTask = {
        id : task.id,
        name : task.name,
        date : task.date,
        completed : !task.completed,
      }
      
      const url = `http://localhost:8080/update/${task.id}`
      fetchWrapperPut(url, tempTask)
        
      this.tasks[index].completed = !tempTask.completed
    },

    async fetchData() {
      const data = await fetchWrapperGetAll("http://localhost:8080/getall")
      this.tasks = data
    },
    
    removeTasks(taskData) {
      const data = `http://localhost:8080/delete/${taskData.index}`
      fetchWrapperDelete(data)
        
      this.tasks.splice(taskData.indexSomething, 1)
    },

    validateTask(task) {
      return task.length > 0;
    },

    validateDate(date) {
      return dayjs(date).isValid();
    },
  },
});
