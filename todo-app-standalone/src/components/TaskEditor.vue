<template>
    <div>
      <label for="editTask" />
      <label for="editDate" />

      <div>

        <input
            :disabled="this.completed"
            maxlength="50"
            type="text"
            id="editTask"
            placeholder="Edit task:"
            v-model.trim="editName"
            class="form-control me-2">

        <input
            :disabled="this.completed"
            maxlength="10"
            type="text"
            id="editDate"
            placeholder="Edit date: YYYY-MM-DD"
            v-model.trim="editDate"
            class="form-control me-2">
            
      </div>

        <button
            :disabled="this.completed"
            @click="editNameSender"
            :hidden="isVisable"
            class="btn btn-success me-2 m-1">
                {{ $t('save') }}
        </button>

        <button 
              @click="deleteTaskSender" 
              :hidden="isVisable" 
              class="btn btn-danger m-1">
                {{ $t('delete') }}
        </button>
        
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useTodoStore } from "@/stores/TodoStore"

export default {
    emits: ['edit-name-sender', 'delete-task-sender'],

    props: {
        taskIndex : Number,
        taskName : String,
        currentIndexTasks : Number,
        currentIndex : Number,
        completed: Boolean,
    },

    data() {
        return {
            editName : '',
            editDate : ''
        }
    },

    methods: {
        ...mapActions(useTodoStore, ['fetchData']),

        editNameSender() {
            this.$emit('edit-name-sender', {
                indexFromTasks : this.currentIndex,
                index : this.taskIndex,
                name : this.editName,
                date : this.editDate,
                completed : this.completed
            })

            this.editName = ''
            this.editDate = ''
        },

        deleteTaskSender() {
            this.$emit('delete-task-sender', {
                indexFromTasks : this.currentIndexTasks,
                index : this.taskIndex
            })

            this.fetchData()
        }
    }
}
</script>