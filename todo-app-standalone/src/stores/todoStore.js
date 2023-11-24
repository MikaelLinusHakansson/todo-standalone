import dayjs from "dayjs";
import { defineStore } from "pinia";


export const useTodoStore = defineStore("todoStore", {

    state: () => {
        return {
            tasks: [],
            completedTasks: [],
          }
      },

    getters: {
        completedTasks: (state) => state.tasks.filter((task) => task.status),
    },

    actions: {
        createNewTask(newTask) {
            if (this.validateTask(newTask.name) && this.validateDate(newTask.date)) {
                newTask.id = new Date().toDateString()
                this.tasks.unshift(newTask)
                return true
            } else {
                return false
            }
        },

        validateTask(task) {
            return task.length > 0
        },

        validateDate(date) {
            return dayjs(date).isValid()
        },

        removeTasks(index) {
            this.tasks.splice(index, 1)
        },

        markDone(index) {
            this.tasks[index].status = !this.tasks[index].status
           
        },
        
        getCompletedList() {
           
        },
    }
})