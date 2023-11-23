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

        removeTasks(index) {
            this.tasks.splice(index, 1);
        },

        markDone(index) {
            
        },
    }
});