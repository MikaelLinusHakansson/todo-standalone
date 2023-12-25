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
                    
                    <div class="flex-grow-1" >
                        <div>
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
                        :currentIndex="index"
                        :task-id="task.id"
                        :index-editor="index"
                        :completed-task="task">
                    </task-editor>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'

import TaskEditor from '@/components/TaskEditor.vue';
import Checkbox from 'primevue/checkbox';
import { userStore } from '../stores/userStore';

export default {
    components: { TaskEditor, Checkbox},

    computed: {
        ...mapState(userStore, ['accessToken']),
        ...mapState(useTodoStore, ["tasks", "getData"])
    },

    data() {
        return {
            editIndex: null,
        };
    },

    methods: {
        ...mapActions(useTodoStore, ["markDone"]),

        startEditing(index) {
            this.editIndex = index
        },

        markDoneSender(task, index) {
            this.markDone(task, index, this.accessToken)
        },
    },
}
</script>