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
  props: {
    value: {
      type: [String, Date]
    }
  },

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
      if (value === null) {
        value = ''
      }
      
      this.$emit('date', value)
    }
  },

  watch: {
    value(value) {
      if (value == null || value === '') {
        this.datetime24h = ''
      }
    }
  }
}
</script>