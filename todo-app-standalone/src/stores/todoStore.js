import { defineStore } from "pinia";


export const useTodoStore = defineStore("todoStore", {

    state: () => {
        return {
            tasks: [],
          }
      },

    getters: {
        // todo
    },

    actions: {
        addTask(task) {
            this.tasks.unshift(task)
        },

        removeTasks(task) {
            this.tasks.splice(task, 1);
        },

        markDone(index) {
            
        },
    }
});