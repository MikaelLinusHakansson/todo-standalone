<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
            <change-language />
                <Card style="25em" class="d-flex flex-column align-items-center">
                    <template #title></template>
                    <h2 class="text-center">{{ $t('login') }}</h2>
                    <template #content>
                        <form>
                            <div>
                                <div class="mb-3">
                                    <input v-model="username" id="username" type="text" class="rounded-input" :placeholder="$t('username')">
                                </div>

                                <div class="mb-3">
                                    <Password v-model="password" :feedback="false" toggleMask :placeholder="$t('password')"></Password>
                                </div>
                            </div>
                            <button @click.prevent.stop="login" class="my-login-button" >{{ $t('login') }}</button>
                        </form>
                    </template>
                    <template #footer>
                        <div >
                            <button class="my-register-button" @click="this.$router.push('/register')">{{$t('register')}}</button>
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
import Card from 'primevue/card';
import ChangeLanguage from "@/components/ChangeLanguage.vue";

export default { 
    // TODO remove inline styling, probably not an issue when i build my own css lib?
    components: {
        Password,
        Card,
        ChangeLanguage
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
.my-register-button {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #2CECE4;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    width: 100%;
}

.my-register-button:hover {
    background-color:  #2DB9ED;
}

.my-login-button {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #28ED5E;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    width: 100%;
}

.my-login-button:hover {
    background-color:  #2DEDA2;
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