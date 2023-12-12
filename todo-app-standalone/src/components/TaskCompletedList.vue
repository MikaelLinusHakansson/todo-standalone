<template>
    <table>
        <div>
            <span class="text-primary fw-bold">
                    {{ $t('done') }}:
            </span>

            <ul
                class="list-group">
                <li
                    v-for="(completedTask) in this.completedTasksGetters" 
                    :key="completedTask.id" 
                    class="list-group-item">
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