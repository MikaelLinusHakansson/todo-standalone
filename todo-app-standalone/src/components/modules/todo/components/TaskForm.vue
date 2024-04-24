<template>
  <div>
    <TextField
      class="margin"
      v-model="task.name" 
      :label="'task'"
      @keypress.enter="submitWithEnter(task)">
    </TextField>
    
    <Calender class="margin" @date-time="submitNewTask" :task="task" :hide="true" />
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'

import { useTodoStore } from '../stores/todoStore'
import { userStore } from '@/components/modules/user/stores/userStore'

import Calender from '@/components/common/Calender.vue'
import TextField from '@/components/form/TextField.vue'

export default {
  components: {
    Calender,
    TextField
  },

  data () {
    return {
      task: {
        name: '',
        date: ''
      }
    }
  },

  computed: {
    ...mapState(useTodoStore, ['tasks']),
    ...mapWritableState(useTodoStore, ['tasks'])
  },

  methods: {
    ...mapActions(userStore, ['getAccessTokens', 'getUser']),
    ...mapActions(useTodoStore, ['createNewTask']),

    submitNewTask(data) {
      this.createNewTask(data, this.getAccessTokens())

      this.task.name = ''
      this.task.date = ''
    },

    submitWithEnter(data) {
      this.createNewTask(data, this.getAccessTokens())

      this.task.name = ''
      this.task.date = ''
    }
  }
}
</script>

<style>
.margin {
  margin: 5px;
}
</style>