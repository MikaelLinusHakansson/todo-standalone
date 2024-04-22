<template>
    <LanguageGroup class="column-row background-color" />
  <div>

    <Card>
      <template v-slot:header>
        <Title :name="'register'" />
      </template>

      <template v-slot:body>
        <Textfield v-model="username" :label="'username'" class="margin-around" />

        <Password 
          v-model="password" 
            toggleMask promptLabel="Enter your password" 
            weakLabel="Very Weak" 
            mediumLabel="Medium" 
            strongLabel="Strong" 
            :placeholder="$t('password')">
              password
          </Password>

          <Button @click.prevent.stop="registerUser" :name="$t('submit')" class="margin-around" />
          <Button :name="$t('login')" @click="$router.push('/login')" />
      </template>
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'pinia'

import { userStore } from '../../user/stores/userStore'

import Password from 'primevue/password'

import LanguageGroup from '../../../common/LanguageGroup.vue'
import IconButton from '@/components/buttons/IconButton.vue'
import Textfield from '@/components/form/Textfield.vue'
import Button from '@/components/buttons/Button.vue'
import Title from '@/components/common/Title.vue'
import Card from '@/components/common/Card.vue'

export default {
  components: {
    Password,
    LanguageGroup,
    IconButton,
    Textfield,
    Button,
    Title,
    Card
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
.margin-around {
  margin: 1rem;
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