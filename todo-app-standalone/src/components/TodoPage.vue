<template>
    <div>
        <button @click.prevent.stop="logout()" class="my-logout-button">{{ this.$t('logout') }}</button>
        <div class="todo-page-container">
            <task-title-header />
            <change-language />
            <task-form />

            <task-controls 
            :toggle-all="toggleAll"
            :toggle-completed="toggleCompleted"
            :toggle-data-table="toggleDataTable">
            </task-controls>

            <div 
            class="todo-page-margin-bottom" 
            :hidden="visableAllTasks">
                <task-all-tasks-list
                class="todo-page-list-group" 
                :isVisable="isVisable">
                </task-all-tasks-list>
            </div>

            <div 
            :hidden="this.visableCompleted">
                <task-completed-list />
            </div>
            
            <task-data-table :hidden="visableDataTable" />
        </div>
    </div>
</template>

<script>
import ChangeLanguage from "@/components/ChangeLanguage.vue";
import TaskTitleHeader from "@/components/TaskTitleHeader.vue";
import TaskForm from "@/components/taskForm.vue";
import TaskControls from "@/components/TaskControls.vue";
import TaskCompletedList from "@/components/TaskCompletedList.vue";
import TaskAllTasksList from "@/components/TaskAllTasksList.vue";
import TaskDataTable from "@/components/TaskDataTable.vue";
import LoginPage from "@/components/LoginPage.vue";

import { nextTick } from 'vue';
import { useTodoStore } from "../stores/todoStore";
import { mapActions} from "pinia";
import { userStore } from "../stores/userStore";


export default {
    components: {
        TaskTitleHeader,
        ChangeLanguage,
        TaskForm,
        TaskControls,
        TaskAllTasksList,
        TaskDataTable,
        TaskCompletedList,
        LoginPage,
    },
        
    data() {
        return {
            isVisable: true,
            visableCompleted: true,
            visableAllTasks: false,
            visableDataTable: true,
        }
    },

    methods: {
        ...mapActions(userStore, ['setUser','setBearerToken' , 'logout', 'getAccessTokens', 'getUser']),
        ...mapActions(useTodoStore, ['getData']),

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
        
        logout() {
            $cookies.remove('accessToken')
            nextTick(() => {
                this.$router.push({name: 'login.auth'})
            })
        },
    },

    created() {
        this.getData(this.getAccessTokens())
    }
}
</script>

<style>
.todo-page-container {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 1.5rem;
}

.todo-page-margin-bottom {
    margin-bottom: 1rem;
}

.todo-page-list-group {
    display: flex;
}

.my-logout-button {
    margin:  0.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 1.5rem;
    background-color:#0Dc0F0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    height: 40px;
    width: auto;
}

.my-logout-button:hover {
    background-color: #0C76F0;
}

@media (max-width: 992px) {
    .todo-page-container {
        max-width: 960px;
    }
}

@media (max-width: 768px) {
    .todo-page-container {
        max-width: 720px;
    }
}

@media (max-width: 576px) {
    .todo-page-container {
        max-width: 540px;
        padding-right: 10px;
        padding-left: 10px;
    }
}
</style>