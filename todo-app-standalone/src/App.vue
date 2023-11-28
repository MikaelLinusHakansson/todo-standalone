<template>
  <!-- swtich button in bootstrap or toggle button, bootstrap table radio-button -->
  <div class="container mt-4">
    <table>
      <task-title-header />
      <task-change-language />
      <task-form
          :taskNameId="'taskname'" 
          :taskDateId="'taskdate'" 
          @submit-new-task="addNewTask">
      </task-form>
    </table>

    <task-controls 
      :toggle-all="toggleAll"
      :toggle-completed="toggleCompleted"
      :toggle-edit="ToggleEdit">
    </task-controls>

    <div class="mb-3" :hidden="visableAllTasks">
      <ul class="list-group">
        <task-all-tasks-list 
        :task="task"
        :index="index"
        :isVisable="isVisable"
        :edit-name="editName"
        :edit-date="editDate"
        @edit-name-sender="saveEdits"
        @delete-task-sender="removeTasks">
        </task-all-tasks-list>
      </ul>
    </div>

    <!-- <div 
      class="mb-3"
      :hidden="visableAllTasks">
        <ul 
          class="list-group">
          <li 
            v-for="(task, index) in tasks" 
            :key="task.id"
            class="list-group-item d-flex justify-content-between align-items-center">
            <input 
              type="checkbox" 
              v-model="task.status" 
              @click="markDone(index)" 
              class="form-check-input me-3">
                {{ task.name }} - {{ task.date }}
                <task-editor 
                :hidden="isVisable"
                :edit-name="editName"
                :edit-date="editDate"
                :task-index="index"
                @edit-name-sender="saveEdits"
                @delete-task-sender="removeTasks">
            </task-editor>
        </li>
      </ul>
    </div> -->
    <task-completed-list :hidden="this.visableCompleted" />
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useTodoStore } from "./stores/TodoStore";

import TaskChangeLanguage from "./components/TaskChangeLanguage.vue";
import TaskTitleHeader from "./components/TaskTitleHeader.vue";
import TaskForm from "./components/taskForm.vue";
import TaskControls from "./components/TaskControls.vue";
import TaskEditor from "./components/TaskEditor.vue";
import TaskCompletedList from "./components/TaskCompletedList.vue";
import TaskAllTasksList from "./components/TaskAllTasksList.vue";

export default {
  components: {
    TaskChangeLanguage,
    TaskTitleHeader,
    TaskForm,
    TaskControls,
    TaskEditor,
    TaskCompletedList,
    TaskAllTasksList
  },

  data() {
    return {
      newTaskName: '',
      newTaskDate: '',
      isVisable: true,
      visableCompleted: true,
      visableAllTasks: true,
      editName: '',
      editDate: '',
    }
  },

  provide() {
    return {
      i18n: this.$i18n
    }
  },

  computed: {
    ...mapState(useTodoStore, ['tasks']),
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

    saveEdits(data) {
      const configureTask = {
        index: data.index,
        name: data.name,
        date: data.date
      }

      if (this.validateTask(configureTask.name) && this.validateDate(configureTask.date)) {
        this.editTask(configureTask)
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