<template>
    <div class="mb-3">
        <ul class="list-group d-flex">

            <li 
                class="
                    list-group-item 
                    d-flex 
                    justify-content-between 
                    align-items-center"
                
                :style="{ 
                    backgroundColor: task.completed ? '#c8e6c9' : '#FFFFFF', 
                    textDecoration: task.completed ? 'line-through' :  'none'
                }"

                v-for="(task, index) in tasks" 
                :key="task.id">

            <input 
                type="checkbox" 
                @click="markDoneSender(task, index)"
                v-model="task.completed"
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
                    :completed="task.completed"
                    :currentIndex="index"
                    :edit-name="editName"
                    :edit-date="editDate"
                    :task-index="task.id"
                    :index-editor="index"
                    @edit-name-sender="saveEdits"
                    @delete-task-sender="removeTask">
                </task-editor>

            </li>

        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'
import TaskEditor from './TaskEditor.vue';

export default {
    components: { TaskEditor },

    computed: {
        ...mapState(useTodoStore, ["tasks"])
    },

    props: {
        task: Object,
        index: Number,
        editName: String,
        editDate: String,

        isVisable: Boolean,
    },

    data() {
        return {};
    },

    methods: {
        ...mapActions(useTodoStore, ["markDone", 'editTask', 'removeTasks', 'validateDate', 'validateTask']),

        saveEdits(data) {
            if (this.validateTask(data.name) && this.validateDate(data.date)) {
                
                this.editTask(data)
            } 
            
            else {

                alert("Invalid input")
            }
        },

        markDoneSender(task, index) {
            this.markDone(task, index)
        },

        removeTask(data) {
            this.removeTasks(data)
        }
    },
}
</script>