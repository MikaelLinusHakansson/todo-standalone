import { defineStore } from "pinia";

import items from "@/data/items.json";



export const todoStore = defineStore("todoStore", {
    // state
    state: () => {
        return {
            items,
        };
    },
    // actions 

    // getters
});