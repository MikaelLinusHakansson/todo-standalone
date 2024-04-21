<template>
  <div>
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
        touchUI />
    </div>
    <Button 
      v-if="!hide"
      severity="info"
      icon="pi pi-arrow-up" 
      text 
      raised
      iconPos="right" 
      @click="sendDate">
    </Button>
  </div>
</template>

<script>
import { mapActions} from "pinia"
import { userStore } from '../stores/userStore'

import dayjs from 'dayjs'
import PrimeCalender from "primevue/calendar"
import Button from "primevue/button"


export default {
  props: {
    task: {
      type: Object,
      required: false,
      default: null
    },

    hide: {
      type: Boolean,
      default: false
    }
  },

  components: {
    PrimeCalender,
    Button
  },

  data() {
    return {
      datetime24h: this.task.date,
      buttondisplay: null
    }
  },

  methods: {
    ...mapActions(userStore, ['getAccessTokens']),

    sendDate() {
      this.$emit('date-time', {
        date: dayjs(this.datetime24h),
        task: this.task
      })

      this.datetime24h = ''
    }
  },

  watch: {
    datetime24h: {
      handler(newVal) {
        this.task.date = newVal
        
        this.$emit('date-time', this.task)
      }
    }
  }
}
</script>