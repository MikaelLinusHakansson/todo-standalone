<template>
  <div class="custom-container">
    <ul class="task-list">
      <li
        @click.stop="startEditing(index)" 
        v-for="(task, index) in tasks" 
        :key="task.id"
        class="list-item"
        :class="{ 'task-completed': task.completed, 'selected': editIndex === index }"
        v-show="!task.completed">

          <CheckBox v-model="task.completed" @click.prevent.stop="markDoneSender(task)" />
        
          <div v-if="!task.completed && editIndex === index" class="task-editor">
            <TextField
              class="margin-around"
              v-model="task.name" 
              :label="'task'"
              @blur="editTask(task, getAccessTokens())"
              @click.stop="">
            </TextField>

            <Calender :hide="true" :task="task" @date-time="sendData" />
          </div>

          <div v-else class="task-info">
            <span class="task-name">{{ task.name }}</span>
            <span class="task-date">{{ task.date }}</span>
            
          </div>

          <!-- v-if="editIndex === index" --> 
          <IconButton
            @click.prevent.stop="deleteTasks(task)"
            :icon="'src/components/assets/navigation/delete.png'"
            :backgroundColor="'transparent'"> 
          </IconButton>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'
import { userStore } from '../stores/userStore';

import Calendar from 'primevue/calendar';

import TextField from "@/components/form/TextField.vue"
import CheckBox from "@/components/form/CheckBox.vue"
import Calender from "@/components/Calender.vue"
import IconButton from "@/components/buttons/IconButton.vue";

export default {
    components: { 
        Calendar,
        TextField,
        CheckBox,
        Calender,
        IconButton
    },

    computed: {
        ...mapState(useTodoStore, ["tasks", "getData"])
    },

    data() {
        return {
            editIndex: null,
            editName: '',
            editDate: ''
        }
    },

    methods: {
        ...mapActions(userStore, ['getAccessTokens']),
        ...mapActions(useTodoStore, ["markDone", "removeTasks", 'editTask']),

        startEditing(index) {
            if (this.editIndex === index) {
                this.editIndex = null
            
            } else {
                this.editIndex = index
            }
        },

        sendData(data) {
          this.editTask(data, this.getAccessTokens())
        },

        stopEditing () {
            this.editIndex = null
        },

        clearDate(task) {
            task.date = ''
            this.editTask(task, this.getAccessTokens())
        },

        markDoneSender(task) {
            this.editIndex = null;
            this.markDone(task, this.getAccessTokens());
        },

        deleteTasks(task) {
            this.removeTasks({
                taskId: task.id
            }, this.getAccessTokens());
        }
    }
}
</script>

<style>
.custom-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
}

.task-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
}

.list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
}

.list-item:hover {
    background-color: rgb(150, 225, 244);
    transition: background-color 0.3s, box-shadow 0.3s;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
    border-radius: 5px;
    cursor: pointer;
}

.task-editor {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    margin-right: 1rem;
}

.margin-around {
  margin: 5px;
}

.task-input {
    /* flex-grow: 1;
    flex-shrink: 1;
    flex-basis: calc(100% - 120px); 
    min-width: 0;
    outline: none; 
    padding: 5px; 
    background-color: #e9ecef;  
    border: none; */
    /* box-shadow: inset 0 1px 3px rgba(0,0,0,.1);  */
    /* transition: background-color 0.3s, box-shadow 0.3s;  */
}

.task-input:focus {
    background-color: #f8f9fa; 
    box-shadow: inset 0 2px 4px rgba(0,0,0,.2); 
}

.task-calendar {
    flex-shrink: 0;
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

.task-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    justify-content: flex-end;
}

.clear-date-button {
    margin:0.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #0DC0F0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
}

.clear-date-button:hover {
    background-color: #0C76F0;
}

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

@media (max-width: 768px) {
    .list-item {
        flex-direction: column;
        align-items: stretch;
    }

    .task-editor,
    .task-info {
        flex-direction: column;
        align-items: stretch;
        margin-right: 0;
    }

    .task-input {
        flex-basis: auto;
    }

    .task-actions {
        justify-content: space-between;
        padding-top: 0.5rem;
    }
}
</style>