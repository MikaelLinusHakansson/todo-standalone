<template>
  <div class="margin-bottom">
    <div class="margin-bottom-input-text">

      <input 
        v-model="taskName" 
        type="text" 
        class="rounded-input-task-form" 
        :placeholder="$t('task')"/>

      <Textfield v-model="taskName" :label="$t('task')" />
    </div>

      <Calender @date-time="submitNewTask" />
  </div>
</template>

<script>
import Calender from "@/components/Calender.vue"
import InputText from 'primevue/inputtext'
import Textfield from "@/components/Textfield.vue"

import { mapState, mapActions, mapWritableState } from "pinia"
import { useTodoStore } from "@/stores/todoStore.js"
import { userStore } from '../stores/userStore'

    export default {
        components: {
            Calender,
            InputText,
            Textfield
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

                this.taskName = ""
                this.taskDate = ""
            },

            addDateFromCalenderComp(data) {
                this.taskDate = data.name
            }
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

.rounded-input-task-form {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.rounded-input-task-form:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
}
</style>