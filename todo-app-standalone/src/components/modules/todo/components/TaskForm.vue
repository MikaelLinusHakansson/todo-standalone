<template>
  <div>
    <TextField
      @keypress.enter="submitWithEnter(task)"
      v-model="task.name"
      :label="'task'"
      class="margin"
      >
    </TextField>
    
    <Calender :value="task.date" @date="date" :hide="true"  class="margin" />
    
    <Button @click="submitNewTask(task)" :name="'+'" />
  </div>
</template>

<script>
import { mapActions} from 'pinia'

import { useTodoStore } from '../stores/todoStore'
import { userStore } from '@/components/modules/user/stores/userStore'

import Calender from '@/components/common/Calender.vue'
import TextField from '@/components/form/TextField.vue'
import Button from '@/components/buttons/Button.vue'

export default {
  components: {
    Calender,
    TextField,
    Button
  },

  data () {
    return {
      task: {
        name: '',
        date: ''
      }
    }
  },

  methods: {
    ...mapActions(userStore, ['getAccessTokens']),
    ...mapActions(useTodoStore, ['createNewTask', 'editTask']),

    submitNewTask(data) {
      this.createNewTask(data, this.getAccessTokens())

      this.task.name = ''
      this.task.date = ''
    },

    date(value) {
      this.task.date = value
    },

    submitWithEnter(data) {
      this.createNewTask(data, this.getAccessTokens())

      this.task.name = ''
      this.task.date = ''
    },

    sendData(data) {
      const task = {
        name: this.task.name,
        date: data
      }

      this.editTask(task, this.getAccessTokens())
    },
  }
}
</script>

<style>
.margin {
  margin: 5px;
}
</style>