import { defineStore } from "pinia";

import UserApiService from "../api/services/UserApiService";

export const userStore = defineStore("userStore", {
    state: () => ({
        accessToken: '',
        user: null,
    }),

    actions: {
        setBearerToken(BearerToken) {
            this.accessToken = BearerToken;
        },

        async setUser(user) {
            const response = await UserApiService.post(user)

            this.user = user;
            this.accessToken = response.accessToken
            console.log(this.accessToken, "from user store")
        },

        logout() {
            this.accessToken = ''
            this.user = null
        },
    }
});