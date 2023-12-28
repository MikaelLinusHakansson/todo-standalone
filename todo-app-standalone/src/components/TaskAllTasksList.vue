<template>
    <div class="mb-3">
        <ul class="list-group d-flex">
            <li class="
                    list-group-item 
                    d-flex 
                    justify-content-between 
                    align-items-center" :style="{
                        backgroundColor: task.completed ? '#c8e6c9' : '#FFFFFF',
                        textDecoration: task.completed ? 'line-through' : 'none'
                    }" v-for="(task, index) in tasks" :key="task.id" @click="startEditing(index)">
                <Checkbox v-model="task.completed" :binary="true" @click="markDoneSender(task, index)" class="me-3">
                </Checkbox>

                <div class="flex-grow-1">
                    <div @click="this.editTask(task, this.getAccessTokens())">
                        <div>
                            <div>
                                <input v-if="task.completed !== true && editIndex === index" type="text" placeholder="Task"
                                    v-model="task.name" style="border: 0px; outline: none">
                                <div v-else>
                                    {{ task.name }}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div v-if="task.completed !== true && editIndex === index">
                                <Calendar v-if="task.completed !== true" v-model="task.date" showTime hourFormat="24"
                                    showButtonBar date-format="yy/mm/dd" touchUI></Calendar>
                            </div>
                            <div v-else>
                                {{ task.date }}
                            </div>
                        </div>
                    </div>
                </div>
                <Button v-if="editIndex === index" severity="danger" icon="pi pi-trash"
                    @click.stop.prevent="deleteTasks(task, index)"></Button>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'
import { userStore } from '../stores/userStore';

import TaskEditor from '@/components/TaskEditor.vue';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

export default {
    components: { TaskEditor, Checkbox, Calendar, Button },

    computed: {
        ...mapState(useTodoStore, ["tasks", "getData"])
    },

    data() {
        return {
            editIndex: null,
            editName: '',
            editDate: '',
        };
    },

    methods: {
        ...mapActions(userStore, ['getAccessTokens']),
        ...mapActions(useTodoStore, ["markDone", "removeTasks", 'editTask']),

        startEditing(index) {
            this.editIndex = index
        },

        editNameCall(task, index) {  // TODO not using this anymore going through the store direclty.
            console.log(task)
            if (task.completed !== false) {
                this.editTask({
                    indexFromTasks: task.index,
                    id: task.id,
                    name: task.name,
                    date: task.date,
                }, this.getAccessTokens())
            }
        },

        markDoneSender(task, index) {
            this.markDone(task, index, this.getAccessTokens())
        },

        deleteTasks(task, index) {
            this.removeTasks({
                indexFromTasks: index,
                taskId: task.id
            }, this.getAccessTokens())
        },
    },
}
</script>