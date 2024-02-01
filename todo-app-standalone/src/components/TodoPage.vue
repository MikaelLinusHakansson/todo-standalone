<template>
    <div>
        <!-- <Button @click="logout()">{{ this.$t('logout') }}</Button> -->
        <button @click.prevent.stop="logout()" class="my-logout-button">{{ this.$t('logout') }}</button>
        <div class="container mt-4">
            <task-title-header />
            <change-language />
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
import LoginPage from "./LoginPage.vue";
import Button from "primevue/button";

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
        Button
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
</style>