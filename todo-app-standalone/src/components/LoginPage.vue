<template>
    <Card style="25em" class="d-flex flex-column align-items-center">
        <template #title>Login</template>
        <template #content>
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
                    <Button>Register</Button>
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
        }
    },
    
    methods: {
        ...mapActions(userStore, ['setUser','setBearerToken' , 'logout', 'getAccessTokens']),

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
        }
    },
}
</script>