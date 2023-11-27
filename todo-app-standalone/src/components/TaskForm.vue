<template>
    <div class="mb-3">
        <label 
            :for="taskNameId"
            class="form-label">
                {{ $t('task') }}
        </label>
        <input
            type="text"
            :id="taskNameId"
            :name="taskNameId"
            v-model="taskName"
            class="form-control">

        <label
            :for="taskDateId"
            class="form-label">
                {{ $t('date') }}
        </label>
        <input
            type="text"
            :name="taskDateId"
            :id="taskDateId"
            v-model="taskDate"
            placeholder="YYYY-MM-DD"
            class="form-control">

        <button
            @click="submitNewTask"
            class="btn btn-primary m-1"> 
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
                    name: this.taskName,
                    date: this.taskDate
                })

                this.taskName = ''
                this.taskDate = ''
            }
        },
    }
</script>