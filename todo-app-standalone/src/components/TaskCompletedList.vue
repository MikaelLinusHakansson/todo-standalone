<template>
    <table>
        <div>
            <span class="completed-tasks-header">
                    {{ $t('done') }}:
            </span>

            <ul
                class="task-list">
                <li
                    v-for="(completedTask) in this.completedTasksGetters" 
                    :key="completedTask.id" 
                    class="list-item task-completed">
                        {{ completedTask.name }}
                        {{ completedTask.date }}
                </li>
            </ul>
        </div>
    </table>
</template>

<script>
import { mapState } from 'pinia'
import { useTodoStore } from '@/stores/todoStore.js'

export default {
    computed: {
        ...mapState(useTodoStore, ['completedTasksGetters'])
    },

    data() {
        return {
        }
    },
}
</script>

<style scoped>

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
</style>