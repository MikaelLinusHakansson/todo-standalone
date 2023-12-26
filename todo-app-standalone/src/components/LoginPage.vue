<template>
    <Card style="25em" class="d-flex flex-column align-items-center">
        <template #title>Login</template>
        <template #content>
            <InputText v-model="regUsername">username</InputText>
            <Password v-model="regPassword" toggleMask>password</Password>
            <div>
                <div class="mb-2">
                        <label for="username" id="username">Username</label>
                    <div class="mt-1">
                        <InputText v-model="username" id="username"></InputText>
                    </div>
                </div>

                <div>
                    <label for="password" id="password">Password</label>
                    <div class="mt-1">
                        <Password v-model="password" :feedback="false" toggleMask></Password>
                    </div>
                </div>
            </div>
        </template>

        <template #footer>
            <div >
                <div class="btn-group">
                    <Button @click="login" style="margin-right: 5px;">Login</Button>
                    <Button @click="registerUser">Register</Button>
                </div>
            </div>
        
        </template>
    </Card>
</template>

<script>
import { mapActions } from 'pinia';
import { userStore } from '../stores/userStore';

import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';

export default { 
    // TODO add register page. Do we just hide the page or build another component with route?
    // TODO register logic is done and works, need to add another card or view / route for register page
    
    // TODO remove inline styling, probably not an issue when i build my own css lib?
    // TODO add a logout button that resets the baerer token and translations! Test
    components: {
        Password,
        InputText,
        Button,
        Card,
    },

    data() {
        return {
            username: "",
            password: "",
            bearerToken: "",
            regUsername: "",
            regPassword: "",
        }
    },
    
    methods: {
        ...mapActions(userStore, ['setUser','setBearerToken' , 'logout', 'getAccessTokens', 'register']),

        async login() {
            const user = {
                username: this.username,
                password: this.password,
            }
            
            await this.setUser(user)
            this.bearerToken = this.getAccessTokens()
            this.$router.push('/todo')
            
            this.username = ''
            this.password = ''
        },

        async registerUser() {
            const user = {
                username: this.regUsername,
                password: this.regPassword,
            }
            this.register(user)

            this.regUsername = ''
            this.regPassword = ''
        }
    },
}
</script>