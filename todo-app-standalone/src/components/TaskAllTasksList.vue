<template>
    <div 
      class="mb-3">
        <li 
            class="list-group-item d-flex justify-content-between align-items-center">
            <input 
                type="checkbox" 
                v-model="task.status" 
                @click="markDone" 
                class="form-check-input me-3">
                {{ task.name }} - {{ task.date }}
                <task-editor 
                :hidden="isVisable"
                v-model="editName"
                :edit-date="editDate"
                :task-index="index"
                @edit-name-sender="saveEdits"
                @delete-task-sender="removeTasks">
            </task-editor>
            </li>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '../stores/TodoStore'
import TaskEditor from './TaskEditor.vue';

export default {
    computed: {
        ...mapState(useTodoStore, ["tasks"])
    },


    props: {
        task: Object,
        index: Number,
        isVisable: Boolean,
        editName: String,
        editDate: String
    },

    data() {
        return {
            trueOrFalse: false
        };
    },
    methods: {
        ...mapActions(useTodoStore, ["markDone"]),

        saveEdits() {
            this.$emit('edit-name-sender', {
                index: this.index,
                name: this.editName,
                date: this.editDate
            })
        },

        removeTasks() {
            this.$emit('delete-task-sender', this.index)
        }
    },
    components: { TaskEditor }
}
</script>