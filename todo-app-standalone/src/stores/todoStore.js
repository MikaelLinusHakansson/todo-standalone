import dayjs from "dayjs";
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
            completed : false,
          }

          const response = await fetch("http://localhost:8080/add", {

            method: "POST",

            headers: {

              "Content-Type": "application/json",
            },

            body: JSON.stringify(data)
          })
          
          this.tasks.unshift(data)
          
          return true;
        }

        catch(Error) {

          console.log(Error)
        }
      } 
        
      else {
        
        return false;
      }
    },

    async fetchData() {

      try {

        const response = await fetch("http://localhost:8080/getall")

        if (!response.ok) {

          throw new Error (`Error error ${response.status}`)
        }

        const data = await response.json()

        this.tasks = data
      } 

      catch(Error) {

        console.log(Error)
      }
    },

    validateTask(task) {

      return task.length > 0;
    },

    validateDate(date) {

      return dayjs(date).isValid();
    },

    removeTasks(data) {

      this.tasks.splice(data.index, 1);
    },

    markDone(index) {

      this.tasks[index].status = !this.tasks[index].status;
    },

    editTask(task) {
      
      this.tasks[task.index].name = task.name;
      this.tasks[task.index].date = task.date;
    },
  },
});
