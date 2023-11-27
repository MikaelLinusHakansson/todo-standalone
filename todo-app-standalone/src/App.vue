<template>
  <div class="container mt-4">
    <task-title-header />

    <task-change-language />

    <task-form
      :taskNameId="'taskname'" 
      :taskDateId="'taskdate'" 
      @submit-new-task="addNewTask">
    </task-form>

    <div class="mb-3">
      <button @click="toggleAll" class="btn btn-secondary m-1">
        {{ $t('showAll') }}
      </button>
      <button @click="toggleCompleted" class="btn btn-secondary m-1">
        {{ $t('showDone') }}
      </button>
      <button @click="ToggleEdit()" class="btn btn-info m-1">
        <span>
          {{ $t('edit') }}
        </span>
      </button>
    </div>

    <div>
      <label for="editTask">
      </label>
      <label for="editDate">
      </label>
      <div>
        <input type="text" id="editTask" placeholder="Edit task:" :hidden="isVisable" v-model="editName"
        class="form-control me-2">
        <input type="text" id="editDate" placeholder="Edit date: YYYY-MM-DD" :hidden="isVisable" v-model="editDate"
        class="form-control me-2">
      </div>
      
    </div>

    <div class="mb-3" :hidden="visableAllTasks">
      <ul class="list-group">
        <li v-for="(task, index) in tasks" :key="task.id"
          class="list-group-item d-flex justify-content-between align-items-center">
          <input type="checkbox" v-model="task.status" @click="markDone(index)" class="form-check-input me-3">
          {{ task.name }} - {{ task.date }}
          <div>
            <button :hidden="isVisable" @click="saveEdits(index, editName, editDate)" class="btn btn-success me-2 m-1">
              {{ $t('save') }}
            </button>
            <button @click="this.removeTasks(index)" :hidden="isVisable" class="btn btn-danger m-1">
              {{ $t('delete') }}
            </button>
            
          </div>
        </li>
      </ul>
    </div>

    <br>
    <div :hidden="this.visableCompleted">
      <span class="text-primary fw-bold">
        <Strong>
          {{ $t('done') }}:
        </Strong>
      </span>
      <ul class="list-group">
        <li v-for="(completedTasks) in this.completedTasks" :key="completedTasks.id" class="list-group-item">
          {{ completedTasks.name }}
          {{ completedTasks.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useTodoStore } from "./stores/TodoStore";

import TaskChangeLanguage from "./components/TaskChangeLanguage.vue";
import TaskTitleHeader from "./components/TaskTitleHeader.vue";
import TaskForm from "./components/taskForm.vue";

export default {
  components: {
    TaskChangeLanguage,
    TaskTitleHeader,
    TaskForm
  },

  data() {
    return {
      newTaskName: '',
      newTaskDate: '',
      isVisable: true,
      visableCompleted: true,
      visableAllTasks: true,
      editName: '',
      editDate: ''
    }
  },

  provide() {
    return {
      i18n: this.$i18n
    }
  },

  computed: {
    ...mapState(useTodoStore, ['tasks', 'completedTasks']),
  },

  methods: {
    ...mapActions(useTodoStore, ['createNewTask', 'removeTasks', 'markDone', 'editTask', 'validateTask', 'validateDate']),

    addNewTask(newTaskData) {
      if (this.createNewTask({ name: newTaskData.name, date: newTaskData.date })) {
        this.newTaskName = ''
        this.newTaskDate = ''
      } else {
        alert("Invalid input")
      }
    },

    saveEdits(index, name, date) {
      const configureTask = {
        name: name,
        date: date
      }

      if (this.validateTask(configureTask.name) && this.validateDate(configureTask.date)) {
        this.editTask(index, configureTask)
        this.editName = ''
        this.editDate = ''
      } else {
         alert("Invalid input")
        }
    },

    toggleCompleted() {
      this.visableCompleted = !this.visableCompleted
    },

    toggleAll() {
      this.visableAllTasks = !this.visableAllTasks
    },
    
    ToggleEdit() {
        this.isVisable = !this.isVisable
    },

    changeTheLanguage(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>