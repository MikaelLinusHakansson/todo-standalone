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
import { mapActions } from 'pinia';
import { userStore } from '../stores/userStore';

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

    methods: {
        ...mapActions(userStore, ['setUser','setBearerToken' , 'logout']),

        login() {
            const user = {
                username: this.username,
                password: this.password,
            }
            
            this.setUser(user)

            this.username = ''
            this.password = ''
        }
    },
}
</script>