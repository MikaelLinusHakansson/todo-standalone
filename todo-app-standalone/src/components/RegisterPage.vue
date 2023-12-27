<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <task-change-language />
                <Card>
                    <template #title></template>
                        <h2 class="text-center">Register</h2>
                        <template #content>
                            <form>
                                <div>
                                   <div class="mb-3">
                                        <label for="username" id="username" class="form-label">{{ $t('username') }}</label>
                                        <InputText v-model="username" id="username" class="form-control">username</InputText>
                                    </div>
                                    <div class="mb-3">
                                <!-- <label for="password" id="password" class="form-label">Password</label> -->
                                        <Password v-model="password" toggleMask promptLabel="Enter your password" weakLabel="Very Weak" mediumLabel="Medium" strongLabel="Strong">password</Password>
                                    </div> 
                                </div>
                                <Button @click="registerUser" class="btn btn-primary w-100">{{ $t('submit') }}</Button> 
                            </form>
                        </template>
                        <template #footer>
                            <div class="w-100">
                                <Button label="Login" @click="$router.push('/login')" class="btn btn-outline-secondary w-100"> {{ $t('login') }}</Button>
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

import Card from 'primevue/card';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import TaskChangeLanguage from './TaskChangeLanguage.vue';

export default {
    components: {
        Card,
        Password,
        InputText,
        Button,
        TaskChangeLanguage,
    },

    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        ...mapActions(userStore, ['register']),

        registerUser() {
            const user = {
                username: this.username,
                password: this.password
            }

            this.register(user)
            this.username = ''
            this.password = ''
        }
    }
    
}
</script>