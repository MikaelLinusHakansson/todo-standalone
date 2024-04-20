<template>
    <div class="custom-container">
        <div class="custom-row">
            <div class="custom-col">
                <change-language />
                <div class="custom-card">
                    <h2 class="custom-card-title">{{ $t('login') }}</h2>
                    <form class="custom-card-content">
                        <div class="custom-form-group">
                            <TextField v-model="username" :label="$t('username')"></TextField>
                        </div>

                        <div class="custom-form-group">
                            <Password v-model="password" :feedback="false" toggleMask :placeholder="$t('password')"></Password>
                        </div>

                        <button @keypress.enter="login" @click.prevent.stop="login" class="my-login-button" >{{ $t('login') }}</button>
                    </form>
                    <div class="custom-card-footer">
                        <button class="my-register-button" @click="$router.push('/register')">{{$t('register')}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { userStore } from '../stores/userStore';

import Password from 'primevue/password';
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import TextField from "@/components/form/TextField.vue";

export default { 
    components: {
        Password,
        ChangeLanguage,
        TextField
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

<style>
.custome-container {
    padding-top: 3rem;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
}

.custom-row {
    display: flex;
    justify-content: center;
}

.custom-col {
    flex: 0 0 auto;
    width: 50%;
    max-width: 540px;
}

.custom-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    background-color: white;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.075);
}

.custom-card-title {
    margin-bottom: 1rem;
    text-align: center;
}

.custom-card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.custom-form-group {
    margin-bottom: 1rem;
}

.custom-card-footer {
    margin-top: 1rem;
}

.my-register-button {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #0DC0F0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    width: 100%;
}

.my-register-button:hover {
    background-color:  #0C76F0;
}

.my-login-button {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 1.5rem;
    background-color: white;
    color: #0DC0F0;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    height: 40px;
    width: auto;
}

.my-login-button:hover {
    background-color:  #0C76F0;
    color: white;
}

.rounded-input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;

    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.rounded-input:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}
</style>