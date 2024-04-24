<template>
  <div>
    <div>
      <CheckBoxSlider class="margin-right margin-left" v-model="checkedToggleAll" @change="toggleAll()" />
      <Span :name="'showAll'" />
    </div>

    <div>
      <CheckBoxSlider class="margin-right margin-left" v-model="checkedCompleted" @change="toggleCompleted()" />
      <Span :name="'showDone'" />
    </div>
        
    <div>
      <CheckBoxSlider class="margin-right margin-left" v-model="checkedDataTable" @change="toggleDataTable()" />
      <Span :name="'showDataTable'" />
    </div>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useTodoStore } from '../stores/todoStore'

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
      checkedDataTable: false
    }
  },

  methods: {
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

.margin-right{
  margin-right: 10px;
}

.margin-left {
  margin-left: 10px;
}
</style>