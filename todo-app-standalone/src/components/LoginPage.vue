<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <Card style="25em" class="d-flex flex-column align-items-center">
                    <template #title></template>
                    <h2 class="text-center">Login</h2>
                    <template #content>
                        <form>
                            <div>
                                <div class="mb-3">
                                    <label for="username" id="username" class="form-label">Username</label>
                                    <InputText v-model="username" id="username" class="form-control"></InputText>
                                </div>

                                <div class="mb-3">
                                    <!-- <label for="password" id="password" class="form-label">Password</label> -->
                                    <Password v-model="password" :feedback="false" toggleMask></Password>
                                </div>
                            </div>
                            <Button @click="login" class="btn btn-primary w-100">Login</Button>
                        </form>
                    </template>
                    <template #footer>
                        <div >
                            <Button @click="this.$router.push('/register')" class="btn btn-outline-secondary w-100">Register</Button>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapActions } from 'pinia';
import { userStore } from '../stores/userStore';

import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';

export default { 
    // TODO remove inline styling, probably not an issue when i build my own css lib?
    // TODO add translations to all the new components. LoginPage, RegisterPage, TodoPage
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
    },
}
</script>