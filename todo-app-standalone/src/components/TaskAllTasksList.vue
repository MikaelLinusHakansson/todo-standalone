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
                            <div :hidden="editIndex !== index">
                                <input type="text" placeholder="Task" v-model="task.name"
                                    style="border: 0px; outline: none">
                            </div>
                            <div :hidden="editIndex === index">
                                {{ task.name }}
                            </div>
                        </div>
                        <div>
                            <div :hidden="editIndex !== index">
                                <Calendar v-model="task.date" showTime hourFormat="24" showButtonBar date-format="yy/mm/dd"
                                    touchUI></Calendar>
                            </div>
                            <div :hidden="editIndex === index">
                                {{ task.date }}
                            </div>
                        </div>
                    </div>
                </div>
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

export default {
    components: { TaskEditor, Checkbox, Calendar },

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

        editNameCall(task, index) {
            this.editTask({
                indexFromTasks: task.index,
                id: task.id,
                name: task.name,
                date: task.date,
            }, this.getAccessTokens())
        },

        markDoneSender(task, index) {
            this.markDone(task, index, this.getAccessTokens())
        },
    },
}
</script>