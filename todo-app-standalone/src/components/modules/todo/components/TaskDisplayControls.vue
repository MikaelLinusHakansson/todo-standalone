<template>
  <div class="switch-container">
    <div class="switch-group">
      <CheckBoxSlider style="margin-right: 10px; margin-left: 10px" v-model="checkedToggleAll" @change="toggleAll()" />
      <Span :name="'showAll'" />
    </div>

    <div class="switch-group">
      <CheckBoxSlider style="margin-right: 10px; margin-left: 10px" v-model="checkedCompleted" @change="toggleCompleted()" />
      <Span :name="'showDone'" />
    </div>
        
    <div class="switch-group">
      <CheckBoxSlider style="margin-right: 10px; margin-left: 10px" v-model="checkedDataTable" @change="toggleDataTable()" />
      <Span :name="'showDataTable'" />
    </div>
  </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia';
import { useTodoStore } from '@/stores/todoStore.js'

import CheckBoxSlider from '@/components/form/CheckBoxSlider.vue'
import Span from '@/components/form/Span.vue'

export default {
  components: {
    CheckBoxSlider,
    Span
  },

  props: {
    toggleAll: Function,
    toggleCompleted: Function,
    toggleEdit: Function,
    toggleDataTable: Function
  },

  computed: {
    ...mapWritableState(useTodoStore, ['tasks']),
  },

  data() {
    return {
      checkedToggleAll: true,
      checkedCompleted: false,
      checkedToggleEdit: false,
      checkedDataTable: false,
    }
  },

  methods: {
    ...mapActions(useTodoStore, ['markDone']),

    callOnToggleAll() {
      this.checkedToggleAll = !this.checkedToggleAll
    },

    callOnToggleCompleted() {
      this.checkedCompleted = !this.checkedCompleted
    },

    callOnCheckedDataTable() {
      this.checkedDataTable = !this.checkedDataTable
    }
  }
}

</script>

<style scoped>
.margin-around {
  margin-right: 1rem;
}
</style>