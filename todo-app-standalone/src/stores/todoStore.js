import dayjs from "dayjs";
import { fetchWrapperDelete, fetchWrapperPost, fetchWrapperGetAll } from "@/stores/ApiWrapper.js";
import { defineStore } from "pinia";


export const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      tasks: [],
      completedTasks: [],
    };
  },

  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.status),
  },

  actions: {
    async createNewTask(newTask) {
      if (this.validateTask(newTask.name) && this.validateDate(newTask.date)) {

        try {

          let data = {

            id: newTask.id,
            name: newTask.name,
            date: newTask.date,
            completed: false,
          };

          fetchWrapperPost("http://localhost:8080/add", data)

          this.tasks.unshift(data);

          return true;
        } 
        
        catch (Error) {

          console.log(Error);
        }
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

    async fetchData() {
      try {

        const data = await fetchWrapperGetAll("http://localhost:8080/getall")

        this.tasks = data
      } 
      
      catch (Error) {

        console.log(Error);
      }
    },

    validateTask(task) {

      return task.length > 0;
    },

    validateDate(date) {

      return dayjs(date).isValid();
    },

    async removeTasks(taskData) {
      try {

        const data = `http://localhost:8080/delete/${taskData.index}`
        
        fetchWrapperDelete(data)
        
        this.tasks.splice(taskData.indexSomething, 1)
      } 
      
      catch (Error) {

        console.log(Error);
      }
    },

    markDone(index) {
      
      this.tasks[index].status = !this.tasks[index].status;
    },

    editTask(task) {

      this.tasks[task.indexFromTasks].name = task.name;
      this.tasks[task.indexFromTasks].date = task.date;
    },
  },
});
