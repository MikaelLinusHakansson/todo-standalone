<template>
  <div class="margin-bottom">
    <div class="margin-bottom-input-text">
      <TextField v-model="taskName" :label="$t('task')" />
    </div>

    <Calender @date-time="submitNewTask" />
  </div>
</template>

<script>
import Calender from "@/components/Calender.vue"
import InputText from 'primevue/inputtext'
import TextField from "@/components/form/TextField.vue"

import { mapState, mapActions, mapWritableState } from "pinia"
import { useTodoStore } from "@/stores/todoStore.js"
import { userStore } from '../stores/userStore'

export default {
  components: {
    Calender,
    InputText,
    TextField
  },

  data () {
    return {
      taskName: '',
      taskDate: ''
    }
  },

  computed: {
    ...mapState(useTodoStore, ["tasks"]),
    ...mapWritableState(useTodoStore, ["tasks"])
  },

  methods: {
    ...mapActions(userStore, ['getAccessTokens', 'getUser']),
    ...mapActions(useTodoStore, ["createNewTask"]),

    submitNewTask(data) {
      this.createNewTask({
        name: this.taskName,
        date: data.date
      }, this.getAccessTokens())

      this.taskName = ''
      this.taskDate = ''
    }

           /*  addDateFromCalenderComp(data) {
                this.taskDate = data.name // probably not needed
            } */
  }
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 1rem;
}

.margin-bottom-input-text {
  margin-bottom: 0.25rem;
}
</style>