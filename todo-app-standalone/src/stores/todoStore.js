import dayjs from "dayjs";
import { apiDelete, apiPost, apiGetAll, apiPut } from "@/api/ApiWrapper.js";
import { defineStore } from "pinia";

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
      if (this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
        let data = {
          name: newTask.name,
          date: newTask.date,
          completed: false,
        };

        await apiPost("http://localhost:8080/add", data)
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

      await this.getData()

      return true;
    },

    async editTask(data) {
      const tempTask = {
        id : data.index,
        name : data.name,
        date : data.date,
        completed : this.tasks[data.indexFromTasks].completed
      }

      await apiPut(`http://localhost:8080/update/${data.index}`, tempTask)
      
      await this.getData()
    },

    async markDone(task, index) {
      const tempTask = {
        id : task.id,
        name : task.name,
        date : task.date,
        completed : !task.completed,
      }
      
      const url = `http://localhost:8080/update/${task.id}`
      await apiPut(url, tempTask)
      
      await this.getData()
    },

    async getData() {
      const data = await apiGetAll("http://localhost:8080/getall")
      this.tasks = data
    },
    
    async removeTasks(taskData) {
      const data = `http://localhost:8080/delete/${taskData.index}`
      await apiDelete(data)
     
      await this.getData()
    },

    validateTask(task) {
      return task.length > 0;
    },

    validateDate(date) {
      return dayjs(date).isValid();
    },
  },
});
