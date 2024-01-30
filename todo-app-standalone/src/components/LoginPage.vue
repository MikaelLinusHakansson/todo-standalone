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
                                    <label for="username" id="username" class="form-label">{{ $t('username') }}</label>
                                    <InputText v-model="username" id="username" class="form-control"></InputText>
                                </div>

                                <div class="mb-3">
                                    <Password v-model="password" :feedback="false" toggleMask></Password>
                                </div>
                            </div>
                            <Button @click="login" class="btn btn-primary w-100">{{ $t('login') }}</Button>
                        </form>
                    </template>
                    <template #footer>
                        <div >
                            <Button @click="this.$router.push('/register')" class="btn btn-outline-secondary w-100">{{ $t('register') }}</Button>
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
import ChangeLanguage from "@/components/ChangeLanguage.vue";

export default { 
    // TODO remove inline styling, probably not an issue when i build my own css lib?
    components: {
        Password,
        InputText,
        Button,
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