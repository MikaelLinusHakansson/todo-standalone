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
            submitNewTask(dateFromBelow) {
                console.log(dateFromBelow)
                this.$emit('submit-new-task', {
                    id: this.taskName.length + 1,
                    name: this.taskName,
                    date: dateFromBelow.name
                })

                this.taskName = ''
                this.taskDate = ''
            },

            addDateFromCalenderComp(dateFromBelow) {
                this.taskDate = dateFromBelow.name
            }
        },
    }
</script>