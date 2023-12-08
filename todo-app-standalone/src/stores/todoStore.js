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
    async createNewTask(newTask) {
      if (this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
        let data = {
          name: newTask.name,
          date: newTask.date,
          completed: false,
        };

        await fetchWrapperPost("http://localhost:8080/add", data)
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

      await this.fetchData()

      return true;
    },

    async editTask(data) {
      const tempTask = {
        id : data.index,
        name : data.name,
        date : data.date,
        completed : this.tasks[data.indexFromTasks].completed
      }

      await fetchWrapperPut(`http://localhost:8080/update/${data.index}`, tempTask)
      
      await this.fetchData()
    },

    async markDone(task, index) {
      const tempTask = {
        id : task.id,
        name : task.name,
        date : task.date,
        completed : !task.completed,
      }
      
      const url = `http://localhost:8080/update/${task.id}`
      await fetchWrapperPut(url, tempTask)
      
      await this.fetchData()
    },

    async fetchData() {
      const data = await fetchWrapperGetAll("http://localhost:8080/getall")
      this.tasks = data
    },
    
    async removeTasks(taskData) {
      const data = `http://localhost:8080/delete/${taskData.index}`
      await fetchWrapperDelete(data)
     
      await this.fetchData()
    },

    validateTask(task) {
      return task.length > 0;
    },

    validateDate(date) {
      return dayjs(date).isValid();
    },
  },
});
