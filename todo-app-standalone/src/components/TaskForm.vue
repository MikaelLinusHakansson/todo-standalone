<template>
    <div class="mb-3">
        <div>
            <!-- <label 
                :for="taskNameId"
                class="form-label">
                    {{ $t('task') }}
            </label> -->
    
            <!-- <input
                maxlength="50"
                type="text"
                :id="taskNameId"
                :name="taskNameId"
                v-model="taskName"
                class="form-control mb-2"> -->

                <InputText
                    :id="taskNameId"
                    :name="taskNameId" 
                    v-model="taskName" 
                    class="mb-2" 
                    placeholder="Task">
                </InputText>
            </div>

            <Calender @date-time="submitNewTask"></Calender>
        
            


        <!-- <label
            :for="taskDateId"
            class="form-label">
                {{ $t('date') }}
        </label> -->

        <!-- <input
            maxlength="10"
            type="text"
            :name="taskDateId"
            :id="taskDateId"
            v-model="taskDate"
            placeholder="YYYY-MM-DD"
            class="form-control mb-2"> -->


        <!-- <button
            @click="submitNewTask"
            class="btn btn-primary"> 
                {{ $t('add') }} 
                 https://gitbrent.github.io/bootstrap-switch-button/ 
        </button> -->
        
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