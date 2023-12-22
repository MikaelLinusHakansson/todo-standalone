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
    </div>
</template>

<script>
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
        login() {
            console.log(this.password, this.username)
            this.username = ''
            this.password = ''
        }
    },
}
</script>