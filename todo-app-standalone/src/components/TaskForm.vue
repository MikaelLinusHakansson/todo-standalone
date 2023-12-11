<template>
    <div class="mb-3">
        <div>
            <InputText
                :id="taskNameId"
                :name="taskNameId" 
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

    export default {
        inject: ['i18n'],

        components: {
            Calender,
            InputText,
        },

        props: {
            taskNameId: String,
            taskDateId: String,
        },

        data () {
            return {
                taskName: '',
                taskDate: ''
            }
        },

        methods: {
            submitNewTask(data) {
                this.$emit('submit-new-task', {
                    id: this.taskName.length + 1,
                    name: this.taskName,
                    date: data.date
                })

                this.taskName = ''
                this.taskDate = ''
            },

            addDateFromCalenderComp(data) {
                this.taskDate = data.name
            }
        },
    }
</script>