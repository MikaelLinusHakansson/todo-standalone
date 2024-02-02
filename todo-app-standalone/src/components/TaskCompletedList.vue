<template>
    <div class="custom-container">
        <span class="completed-tasks-header">
            {{ $t('done') }}:
        </span>
        <ul class="task-list">
            <li
                v-for="(completedTask) in completedTasksGetters" :key="completedTask.id" class="list-item" >
                    <label class="custom-checkbox">
                        <input class="checkbox" v-model="completedTask.completed" type="checkbox" @click="markDoneSender(completedTask)">
                            <span class="checkmark"/>
                    </label>
                    <div class="task-info">
                        <span class="task-name">{{ completedTask.name }}</span>
                        <span class="task-date">{{ completedTask.date }}</span>
                    </div>
                    <button @click="deleteTasks(completedTask)" class="delete-task-button">Delete</button>
                </li>
            </ul>
        </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'
import { userStore } from '../stores/userStore';

export default {
    computed: {
        ...mapState(useTodoStore, ['completedTasksGetters', 'getData']),
    },

    methods: {
        ...mapActions(userStore, ['getAccessTokens']),
        ...mapActions(useTodoStore, ["markDone", "removeCompletedTasks"]),

        markDoneSender(task) {
            this.editIndex = null;
            this.markDone(task, this.getAccessTokens());
        },

        deleteTasks(task) {
            this.removeCompletedTasks({
                taskId: task.id
            }, this.getAccessTokens());
        },
    },

    data() {
        return {
        }
    },
}
</script>

<style scoped>

.delete-task-button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 8px 16px;
    margin:0.25rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
}

.delete-task-button:hover {
    background-color: #6666;
}

.task-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin-right: 1rem;
    max-width: 60%;
    cursor: pointer;
}

.task-date {
    flex-shrink: 0;
    margin-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.task-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    max-width: calc(100% - 120px);
    min-width: 0;
    margin: 0 1rem;
}

.custom-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
}

.completed-tasks-header {
    color: #0DC0F0;
    font-weight: bold;
}
.task-list {
    list-style-type: none;
    padding: 0;
}

.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: #f8f9fa;
    border-bottom: 1px solid #e7e7e7;
    border-radius: 8px;
    margin-bottom: 5px;

}

.task-name, .task-date {
    padding: 0.5rem;
}

.checkbox {
    margin-right: 1rem;
}

.custom-checkbox {
  display: inline-block;
  position: relative;
  padding-left: 30px; 
  cursor: pointer;
  user-select: none; 
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px; 
  transition: background-color 0.2s;
}

.custom-checkbox:hover input ~ .checkmark {
  background-color: #ccc; 
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #0Dc0F0; 
}

.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    width: 100%;
}
</style>