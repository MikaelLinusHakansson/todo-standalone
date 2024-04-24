<template>
  <div class="button-container">
    <LanguageGroup class="container-change-language" />

    <IconButton 
      class="container-logout-button spacer-bottom spacer-top" 
      :icon="'src/components/assets/navigation/enter.png'" 
      :name="'logout'" 
      @click="$router.push('/login')">
    </IconButton>
  </div>

  <div>
    <Card>
      <template v-slot:header>
        <Title :name="'register'" />
      </template>

      <template v-slot:body>
        <Textfield v-model="username" :label="'username'" class="spacer-around" />

        <Password 
          v-model="password" 
          toggleMask 
          :promptLabel="$t('enterPassword')"
          :weakLabel="$t('weakLabel')"
          :mediumLabel="$t('mediumLabel')"
          :strongLabel="$t('strongLabel')"
          :placeholder="$t('password')">
            password
        </Password>

          <Button @click.prevent.stop="registerUser" :name="$t('submit')" class="spacer-around" />
      </template>
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'pinia'

import { userStore } from '../../user/stores/userStore'

import Password from 'primevue/password'

import LanguageGroup from '@/components/common/LanguageGroup.vue'
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
.spacer-around {
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

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.spacer-top {
  margin-top: 1rem;
}

.container-change-language {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end;
  margin: 1rem;
}

.container-logout-button {
  margin: 1rem;
}
</style>