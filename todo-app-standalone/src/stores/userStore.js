import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
    state: () => {
        return {
            accessToken: "",
            user: null
        }
    },

    actions: {
        setBearerToken(BearerToken) {
            this.accessToken = BearerToken;
        },

        setUser(user) {
            this.user = user;
        },

        logout() {
            this.accessToken = ''
            this.user = null
        }
    }
});