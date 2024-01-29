<template>
    <div class="mb-3">
        <div>
            <InputText
                v-model="taskName" 
                class="mb-2" 
                placeholder="Task">
            </InputText>
        </div>
        <Calender @date-time="submitNewTask" />
    </div>
</template>

<script>
import Calender from "@/components/Calender.vue"
import InputText from 'primevue/inputtext'

import { mapState, mapActions, mapWritableState } from "pinia"
import { useTodoStore } from "@/stores/todoStore.js"
import { userStore } from '../stores/userStore'

    export default {
        components: {
            Calender,
            InputText,
        },

        data () {
            return {
                taskName: '',
                taskDate: ''
            }
        },

        computed: {
            ...mapState(useTodoStore, ["tasks"]),
            ...mapWritableState(useTodoStore, ["tasks"]),
            
        },

        methods: {
            ...mapActions(userStore, ['getAccessTokens', 'getUser']),
            ...mapActions(useTodoStore, ["createNewTask"]),

            submitNewTask(data) {
                console.log(this.getUser()) // TODO need to send username to match ID on backend on restApi etc.
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
        },
    }
</script>