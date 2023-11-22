import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
    state: () => ({
            items: [],
    }),

    getters: {
        getItems() {
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

            this.items = tasksInJson  
            return this.items
        },
    }
});