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

        getUsername() {
            return this.user ? this.user.username : localStorage.getItem('username')
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
            localStorage.setItem('username', this.user.username)
        },

        async register(user) {
            const response = await UserApiService.register(user)
            return response
        },

        getAccessTokens() {
            return $cookies.get('accessToken')
        },

        getUser() {
            return localStorage.getItem('username')
        },

        logout() {
            this.accessToken = ''
            this.user = null
            localStorage.removeItem('username')
        },
    }
});