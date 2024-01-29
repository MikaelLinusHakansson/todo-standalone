import { defineStore } from "pinia";
import UserApiService from "../api/services/UserApiService";

export const userStore = defineStore("userStore", {
    state: () => ({
        accessToken: '',
        user: null,
    }),

    getters: {
        getAccessToken() {
            return this.$cookies.get('accessToken')
        },

        
    },

    actions: {
        setBearerToken(BearerToken) {
            this.accessToken = BearerToken;
            
        },

        async setUser(user) {
            const response = await UserApiService.post(user)

            this.user = user;
            this.accessToken = response.accessToken

            $cookies.set('accessToken', this.accessToken)
            console.log(user)
        },

        async register(user) {
            const response = await UserApiService.register(user)
            return response
        },

        getAccessTokens() {
            return $cookies.get('accessToken')
        },

        getUser() {
            console.log(this.user)
            return this.user
        },

        logout() {
            this.accessToken = ''
            this.user = null
        },
    }
});