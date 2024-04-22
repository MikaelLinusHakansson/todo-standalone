<template>
  <div>
    <TextField
      class="margin-bottom"
      v-model="task.name" 
      :label="'task'"
      @keypress.enter="submitWithEnter(task)">
    </TextField>
    
    <Calender class="margin-bottom" @date-time="submitNewTask" :task="task" :hide="true" />
  </div>
</template>

<script>
import Calender from '@/components/common/Calender.vue'
import TextField from '@/components/form/TextField.vue'

import { mapState, mapActions, mapWritableState } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'
import { userStore } from '../../../../stores/userStore'

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
.margin-bottom {
  margin-bottom: 5px;
}
</style>