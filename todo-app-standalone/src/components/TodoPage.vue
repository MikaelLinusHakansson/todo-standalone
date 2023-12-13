<template>
    <div class="container mt-4">
    <task-title-header />

    <task-change-language />

    <task-form />

    <task-controls 
      :toggle-all="toggleAll"
      :toggle-completed="toggleCompleted"
      :toggle-data-table="toggleDataTable">
    </task-controls>

    <div 
      class="mb-3" 
      :hidden="visableAllTasks">
        <task-all-tasks-list
          class="list-group d-flex" 
          :isVisable="isVisable">
        </task-all-tasks-list>
    </div>

    <task-data-table :hidden="visableDataTable" />

    <div 
      :hidden="this.visableCompleted">
        <task-completed-list />
    </div>
  </div>
</template>

<script>
import TaskChangeLanguage from "@/components/TaskChangeLanguage.vue";
import TaskTitleHeader from "@/components/TaskTitleHeader.vue";
import TaskForm from "@/components/taskForm.vue";
import TaskControls from "@/components/TaskControls.vue";
import TaskCompletedList from "@/components/TaskCompletedList.vue";
import TaskAllTasksList from "@/components/TaskAllTasksList.vue";
import TaskDataTable from "@/components/TaskDataTable.vue";

export default {
    components: {
        TaskTitleHeader,
        TaskChangeLanguage,
        TaskForm,
        TaskControls,
        TaskAllTasksList,
        TaskDataTable,
        TaskCompletedList,
    },
        
    data() {
        return {
            isVisable: true,
            visableCompleted: true,
            visableAllTasks: false,
            visableDataTable: true,
        }
    },

    provide() {
        return {
        i18n: this.$i18n
        }
    },

    methods: {
        toggleCompleted() {
            this.visableCompleted = !this.visableCompleted
        },

        toggleAll() {
            this.visableAllTasks = !this.visableAllTasks
        },

        toggleDataTable() {
        this.visableDataTable = !this.visableDataTable
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