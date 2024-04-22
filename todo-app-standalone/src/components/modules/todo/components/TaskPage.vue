<template>
  <div>
    <div class="button-container">
      <LanguageGroup class="container-change-language" />

      <IconButton 
        class="container-logout-button spacer-bottom spacer-top" 
        :icon="'src/components/assets/navigation/logout.png'" 
        :name="'logout'" 
        @click="logout()">
      </IconButton>
  
    </div>
    
    <div>
      <Title class="container spacer-bottom" :name="'todo'" />

      <task-form class="container" />

      <task-display-controls
        class="container-row"
        :toggle-all="toggleAll"
        :toggle-completed="toggleCompleted"
        :toggle-data-table="toggleDataTable">
      </task-display-controls>

      <div class="margin-bottom" :hidden="visableAllTasks">
        <task-card class="margin-bottom" :isVisable="isVisable" />
      </div>

      <div class="margin-bottom" :hidden="this.visableCompleted" >
        <task-completed-card />
      </div>
            
      <data-table
        class="container" 
        :hidden="visableDataTable" 
        :modelValue="tasks" 
        :columnOne="'completed'" 
        :header="'completed'" 
        :columnTwo="'name'"
        :headerTwo="'Name'"
        :columnThree="'date'"
        :headerThree="'Date'"
        > 
      </data-table>
    </div>
  </div>
</template>

<script>
import LanguageGroup from '@/components/common/LanguageGroup.vue';
import Title from '@/components/common/Title.vue';
import TaskForm from '@/components/modules/todo/components/taskForm.vue';
import TaskDisplayControls from '@/components/modules/todo/components/TaskDisplayControls.vue';
import TaskCompletedCard from '@/components/modules/todo/components/TaskCompletedCard.vue';
import TaskCard from '@/components/modules/todo/components/TaskCard.vue';
import DataTable from '@/components/common/DataTable.vue';
import IconButton from '@/components/buttons/IconButton.vue';

import { nextTick } from 'vue';
import { useTodoStore } from '../../../../stores/todoStore';
import { mapActions, mapState} from 'pinia';
import { userStore } from '../../../../stores/userStore';


export default {
  components: {
    Title,
    LanguageGroup,
    TaskForm,
    TaskDisplayControls,
    TaskCard,
    DataTable,
    TaskCompletedCard,
    IconButton
  },
        
  data() {
    return {
      isVisable: true,
      visableCompleted: true,
      visableAllTasks: false,
      visableDataTable: true
    }
  },

  computed: {
    ...mapState(useTodoStore, ['tasks']),
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
    }
  },

  created() {
    this.getData(this.getAccessTokens())
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin-bottom {
  margin-bottom: 1rem;
}

.container-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 1rem;
}

.container-change-language {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end;
  margin: 1rem;
}

.container-logout-button {
  margin: 1rem;
}

.spacer-bottom {
  margin-bottom: 1rem;
}

.spacer-top {
  margin-top: 1rem;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>