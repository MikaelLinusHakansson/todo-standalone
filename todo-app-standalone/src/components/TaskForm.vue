<template>
    <div class="mb-3">

        <label 
            :for="taskNameId"
            class="form-label">
                {{ $t('task') }}
        </label>

        <input
            maxlength="50"
            type="text"
            :id="taskNameId"
            :name="taskNameId"
            v-model="taskName"
            class="form-control mb-2">

        <label
            :for="taskDateId"
            class="form-label">
                {{ $t('date') }}
        </label>

        <input
            maxlength="10"
            type="text"
            :name="taskDateId"
            :id="taskDateId"
            v-model="taskDate"
            placeholder="YYYY-MM-DD"
            class="form-control mb-2">

        <button
            @click="submitNewTask"
            class="btn btn-primary"> 
                {{ $t('add') }} 
                <!-- https://gitbrent.github.io/bootstrap-switch-button/ -->
        </button>
        
    </div>
</template>

<script>
    export default {
        inject: ['i18n'],

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
            submitNewTask() {
                this.$emit('submit-new-task', {
                    id: this.taskName.length + 1,
                    name: this.taskName,
                    date: this.taskDate
                })

                this.taskName = ''
                this.taskDate = ''
            }
        },
    }
</script>