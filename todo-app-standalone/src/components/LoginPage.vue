<template>
  <LanguageGroup class="column-row background-color" />
  <div class="custom-container">
    <div class="custom-row">
      <div class="custom-col">
        <div class="custom-card">
          <Title :name="'login'" class="spacer-bottom" />
          <form class="custom-card-content">
            <div class="custom-form-group">
              <TextField v-model="username" :label="'username'" />
            </div>
            
            <div class="custom-form-group">
              <Password v-model="password" :feedback="false" toggleMask :placeholder="$t('password')" />
            </div>

            <Button @keypress.enter="login" @click.prevent.stop="login" :name="$t('login')" />
          </form>

          <div class="custom-card-footer">
            <Button :name="$t('register')" @click="$router.push('/register')" />
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

import LanguageGroup from "@/components/common/LanguageGroup.vue"
import TextField from "@/components/form/TextField.vue"
import IconButton from "@/components/buttons/IconButton.vue"
import Button from "@/components/buttons/Button.vue"
import Title from "@/components/common/Title.vue"

export default { 
  components: {
    Password,
    LanguageGroup,
    TextField,
    IconButton,
    Button,
    Title
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

.spacer-bottom {
  margin-bottom: 1rem;
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