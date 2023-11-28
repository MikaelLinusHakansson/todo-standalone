<template>
    <div :hidden="this.visableCompleted">
      <span class="text-primary fw-bold">
        <Strong>
          {{ $t('done') }}:
        </Strong>
      </span>
      <ul 
        class="list-group">
            <li
                v-for="(completedTasks) in this.completedTasks" 
                :key="completedTasks.id" 
                class="list-group-item">
                    {{ completedTasks.name }}
                    {{ completedTasks.date }}
            </li>
      </ul>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useTodoStore } from '../stores/TodoStore'

export default {
    computed: {
        ...mapState(useTodoStore, ['completedTasks'])
    },
}
</script>