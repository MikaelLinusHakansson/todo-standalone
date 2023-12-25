<template>
    <div>
        <div class="flex flex-column gap-2">
            <label for="username" id="username">Username</label>
            <label for="password" id="password">Password</label>
        </div>

        <div class="flex flex-column gap-2">
            <InputText v-model="username" id="username"></InputText>
            <Password v-model="password" :feedback="false" toggleMask></Password>
            <Button @click="login">Login</Button>
        </div>
        <button @click="getAccessToken">Press me </button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { userStore } from '../stores/userStore';

import router from '../router';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
    components: {
        Password,
        InputText,
        Button,
    },

    data() {
        return {
            username: "",
            password: "",
            bearerToken: "",
        }
    },

    computed: {
        ...mapState(userStore, ["user", "accessToken"]),
    },

    methods: {
        ...mapActions(userStore, ['setUser','setBearerToken' , 'logout']),

        async login() {
            const user = {
                username: this.username,
                password: this.password,
            }
            
            await this.setUser(user)
            this.bearerToken = this.accessToken
            this.$router.push('/todo')
            
            this.username = ''
            this.password = ''
        }
    },
}
</script>