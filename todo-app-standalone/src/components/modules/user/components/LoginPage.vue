<template>
  <LanguageGroup class="column-row background-color" />
  <Card>
    <template v-slot:header>
      <Title :name="'login'" />
    </template>
    
      <template v-slot:body>
        <Textfield v-slot:content v-model="username" :label="'username'" class="space-around" />
        <Password @keypress.enter="login" v-model="password" :feedback="false" toggleMask :placeholder="$t('password')" />

        <Button @click.prevent.stop="login" :name="$t('login')" class="space-around" />
        <Button :name="$t('register')" @click="$router.push('/register')" />
      </template>
  </Card>
</template>

<script>
import { mapActions } from 'pinia'

import { userStore } from '../../user/stores/userStore'

import Password from 'primevue/password'

import LanguageGroup from '@/components/common/LanguageGroup.vue'
import Textfield from '@/components/form/Textfield.vue'
import IconButton from '@/components/buttons/IconButton.vue'
import Button from '@/components/buttons/Button.vue'
import Title from '@/components/common/Title.vue'
import Card from '@/components/common/Card.vue'

export default { 
  components: {
    Password,
    LanguageGroup,
    Textfield,
    IconButton,
    Button,
    Title,
    Card
  },
    
  data() {
    return {
      username: '',
      password: '',
      bearerToken: '',
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

.space-around {
  margin: 1rem;
}
</style>