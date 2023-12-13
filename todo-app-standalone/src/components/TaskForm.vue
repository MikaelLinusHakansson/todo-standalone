<template>
    <div class="mb-3">
        <div>
            <InputText
                v-model="taskName" 
                class="mb-2" 
                placeholder="Task">
            </InputText>
        </div>

        <Calender 
            @date-time="submitNewTask">
        </Calender>
    </div>
</template>

<script>
import Calender from "@/components/Calender.vue"
import InputText from 'primevue/inputtext'

import { mapState, mapActions, mapWritableState } from "pinia"
import { useTodoStore } from "@/stores/todoStore.js"

    export default {
        inject: ['i18n'],

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
            ...mapActions(useTodoStore, ["createNewTask"]),

            submitNewTask(data) {
                this.createNewTask({
                    name: this.taskName,
                    date: data.date
                })

                this.taskName = ""
                this.taskDate = ""
            },

            addDateFromCalenderComp(data) {
                this.taskDate = data.name
            }
        },
    }
</script>