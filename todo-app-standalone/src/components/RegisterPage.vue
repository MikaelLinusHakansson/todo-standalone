<template>
  <change-language class="column-row background-color" />
  <div class="custom-container">
    <div class="custom-row">
      <div class="custom-col">
        <div class="custom-card">
          
          <h2 class="custom-card-title">
            {{ $t('register') }}
          </h2>

          <form class="custom-card-content">

              <div class="custom-form-group"> 
                <TextField v-model="username" :label="'username'" />
              </div>

              <div class="custom-form-group">
                <Password 
                  v-model="password" 
                  toggleMask promptLabel="Enter your password" 
                  weakLabel="Very Weak" 
                  mediumLabel="Medium" 
                  strongLabel="Strong" 
                  :placeholder="$t('password')">
                    password
                </Password>
              </div>

              <RegisterButton @click.prevent.stop="registerUser" :name="$t('submit')" />
          </form>

          <div class="custom-card-footer">
            <RegisterButton :name="$t('login')" @click="$router.push('/login')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { userStore } from '../stores/userStore'

import Password from 'primevue/password'

import ChangeLanguage from './ChangeLanguage.vue'
import IconButton from '@/components/buttons/IconButton.vue'
import TextField from '@/components/form/TextField.vue'
import Button from '@/components/buttons/Button.vue'
import RegisterButton from './buttons/RegisterButton.vue'

export default {
  components: {
    Password,
    ChangeLanguage,
    IconButton,
    TextField,
    Button,
    RegisterButton
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
  width: 100%;
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
  border-radius: 0.25rem;
  background-color: #07F088;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  width: 100%;
}

.my-login-button:hover {
  background-color:  #0CF0D7;
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

.column-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

}

.background-color {
  background-color: transparent;
  color: transparent;
}
</style>