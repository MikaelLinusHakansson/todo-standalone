<template>
    <div class="mb-3">
        <ul class="list-group d-flex">
            <li 
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="(task, index) in tasks" 
            :key="task.id">
            <input 
                type="checkbox" 
                v-model="task.status" 
                @click="markDoneSender(index)" 
                class="form-check-input me-3">
                <div class="flex-grow-1">
                    <div >
                        <div>
                            {{ task.name }}
                        </div>
                        <div>
                            {{ task.date }}
                        </div>
                    </div>
                </div>
                <task-editor 
                :hidden="isVisable"
                :edit-name="editName"
                :edit-date="editDate"
                :task-index="index"
                @edit-name-sender="saveEdits"
                @delete-task-sender="removeTask">
            </task-editor>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '../stores/TodoStore'
import TaskEditor from './TaskEditor.vue';

export default {
    components: { TaskEditor },

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
        };
    },

    methods: {
        ...mapActions(useTodoStore, ["markDone", 'editTask', 'removeTasks', 'validateDate', 'validateTask']),

        saveEdits(data) {
            this.editTask(data)
            if (this.validateTask(data.name) && this.validateDate(data.date)) {
                this.editTask(data)
            } else {
                alert("Invalid input")
            }
        },

        markDoneSender(index) {
            this.markDone(index)
        },

        removeTask(data) {
            this.removeTasks(data)
        }
    },
}
</script>