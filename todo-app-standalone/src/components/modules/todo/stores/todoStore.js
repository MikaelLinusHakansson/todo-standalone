import { defineStore } from "pinia"

import dayjs from "dayjs"
import todoService from "../api/todoService"

export const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      tasks: [],
      completedTasks: [],
    }
  },

  getters: {
    completedTasksGetters: (state) => state.tasks.filter((task) => task.completed),
  },

  actions: {
    async createNewTask(newTask, accessToken) {
      if (this.validateTask(newTask.name)) {
        if (this.validateDate(newTask.date)) {
          newTask.date = dayjs(newTask.date).format('ddd, MMM DD HH:mm:ss [CET] YYYY')
        }
        
        const newData = await todoService.post(newTask, accessToken)
        this.tasks.push(newData)
      } 
      
      else if (!this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
        alert("Invalid name input")
      }
      
      return true
    },

    async editTask(data, accessToken) {
      if (!this.validateTask(data.name)) {
        alert("Task can't be empty")
      }
      
      else {
        if (this.validateDate(data.date)) {
          data.date = dayjs(data.date).format('ddd, MMM DD HH:mm:ss [CET] YYYY')
        }
          const updatedTask = await todoService.put(data, accessToken)
          this.tasks[data.indexFromTasks] = updatedTask
      }
    },

    async markDone(task, accessToken) {
        const tempTask = {
            id: task.id,
            name: task.name,
            date: task.date,
            completed: !task.completed,
            username: task.username
        }
    
        const updatedTask = await todoService.put(tempTask, accessToken)
        const taskIndex = this.tasks.findIndex(t => t.id === task.id)
        
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = updatedTask
        }
    },

    async getData(accessToken) {
      this.tasks = await todoService.getAll(accessToken)
    },
    
    async removeTasks(taskData, accessToken) {
        await todoService.delete(taskData, accessToken)

        const indexInTasks = this.tasks.findIndex(task => task.id === taskData.id)

        if (indexInTasks !== -1) {
            this.tasks.splice(indexInTasks, 1)
        }
    },

    validateTask(task) {
      return task.length > 0
    },

    validateDate(date) {
      return dayjs(date).isValid()
    }
  }
})