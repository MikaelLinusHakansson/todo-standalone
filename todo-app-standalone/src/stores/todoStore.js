import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {

    state: () => {
        return {
            tasks: []
          }
      },

    getters: {
        getTask() {
            const tasksInJson = [
                {
                "title": "Shopping",
                "date": "Tue Nov 21 2023 11:41:24 GMT+0100"
                },
                {
                    "title": "Ut och gå",
                    "date": "Wed Nov 22 2023 11:41:24 GMT+0100"
                },
                {
                    "title": "Spela them games",
                    "date": "Thu Nov 23 2023 11:41:24 GMT+0100"
                }
            ]
            return tasksInJson
        },

 
    },

    actions: {
        addTask(task) {
            this.tasks.unshift(task)
        },

        removeTasks(task) {
            this.tasks.splice(task, 1);
        },

        markDone(task) {

        },
    }
});