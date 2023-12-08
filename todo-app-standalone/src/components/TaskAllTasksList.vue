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
                :key="task.id"
                @click="startEditing(index)">

                    <Checkbox 
                        v-model="task.completed" 
                        :binary="true" 
                        @click="markDoneSender(task, index)" 
                        class="me-3">
                    </Checkbox>
                    
                    <div class="flex-grow-1">
                        <div @click="startEditing(index)">
                            <div>
                                {{ task.name }}
                            </div>
                            <div>
                                {{ task.date }}
                            </div>
                        </div>
                    </div>

                    <task-editor
                        :hidden="editIndex !== index"
                        :completed="task.completed"
                        :currentIndex="index"
                        :edit-name="editName"
                        :edit-date="editDate"
                        :task-index="task.id"
                        :index-editor="index"
                        @edit-name-sender="saveEdits"
                        @delete-task-sender="removeTask">
                        <!-- @click.away="stopEditing()"> -->
                    </task-editor>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'
import TaskEditor from './TaskEditor.vue';
import Checkbox from 'primevue/checkbox';

import VueClickAway from 'v-click-outside';

export default {
    components: { TaskEditor, Checkbox},

    computed: {
        ...mapState(useTodoStore, ["tasks"])
    },

    directives: {
        'click-outside': VueClickAway.directive,
    },

    props: {
        task: Object,
        index: Number,
        editName: String,
        editDate: String,

        isVisable: Boolean,
        showDataTable: Boolean,
    },

    data() {
        return {
            editIndex: null,
        };
    },

    methods: {
        ...mapActions(useTodoStore, ["markDone", 'editTask', 'removeTasks', 'validateDate', 'validateTask', 'fetchData']),

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
            this.fetchData()
        },

        removeTask(data) {
            this.removeTasks(data)
        },

        startEditing(index) {
            this.editIndex = index
        },

        stopEditing() {
            this.editIndex = null
        }
    },
}
</script>