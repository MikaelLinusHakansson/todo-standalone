<template>
  <div>
    <PrimeCalender
      :placeholder="$t('date')"
      showIcon 
      id="calendar-24h" 
      v-model="datetime24h"
      showTime hourFormat="24"
      :manual-input="false"
      showButtonBar
      date-format="yy/mm/dd"
      @update:modelValue="onInput"
      touchUI
      >
    </PrimeCalender>
  </div>
</template>

<script>
import PrimeCalender from 'primevue/calendar'

export default {
  components: {
    PrimeCalender
  },

  data() {
    return {
      datetime24h: ''
    }
  },

  methods: {
    onInput(value) {
      this.$emit('date', value)
    }
  }
}
</script>