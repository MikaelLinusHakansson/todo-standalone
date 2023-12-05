<template>
  <!-- swtich button in bootstrap or toggle button, bootstrap table radio-button -->
  <div class="container mt-4">
    <table>

      <task-title-header />

      <task-change-language />

      <task-form
          :taskNameId="'taskname'" 
          :taskDateId="'taskdate'" 
          @submit-new-task="createNewTask">
      </task-form>

    </table>

    <task-controls 
      :toggle-all="toggleAll"
      :toggle-completed="toggleCompleted"
      :toggle-edit="ToggleEdit">
    </task-controls>

    <button @click="fetchData" class="btn btn-secondary mb-3">Refresh</button>
    
    <div 
      class="mb-3" 
      :hidden="visableAllTasks">

        <task-all-tasks-list
          class="list-group d-flex" 
          :task="task"
          :index="index"
          :isVisable="isVisable"
          :edit-name="editName"
          :edit-date="editDate"
          @edit-name-sender="saveEdits"
          @delete-task-sender="removeTasks">
        </task-all-tasks-list>
    </div>

    <task-completed-list :hidden="this.visableCompleted" />

    <Calender></Calender>
  </div>
</template>

<script>
import { mapState, mapActions, mapWritableState } from "pinia"
import { useTodoStore } from "@/stores/TodoStore";

import TaskChangeLanguage from "@/components/TaskChangeLanguage.vue";
import TaskTitleHeader from "./components/TaskTitleHeader.vue";
import TaskForm from "@/components/taskForm.vue";
import TaskControls from "@/components/TaskControls.vue";
import TaskEditor from "./components/TaskEditor.vue";
import TaskCompletedList from "@/components/TaskCompletedList.vue";
import TaskAllTasksList from "./components/TaskAllTasksList.vue";
import Calender from "./components/Calender.vue";


export default {
  components: {
    TaskChangeLanguage,
    TaskTitleHeader,
    TaskForm,
    TaskControls,
    TaskEditor,
    TaskCompletedList,
    TaskAllTasksList,
    Calender
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
      todoEntity: [],
    }
  },

  provide() {
    return {
      i18n: this.$i18n
    }
  },

  computed: {
    ...mapState(useTodoStore, ['tasks']),
    ...mapWritableState(useTodoStore, ['tasks']),
  },

  methods: {
    ...mapActions(useTodoStore, ['createNewTask', 'removeTasks', 'markDone', 'editTask', 'validateTask', 'validateDate', 'fetchData']),

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
      } 
      
      else {

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
    },
  }
}
</script>