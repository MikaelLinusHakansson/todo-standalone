<template>
  <div>
    <div class="margin-bottom">
      <PrimeCalender
        :placeholder="$t('date')"
        showIcon 
        id="calendar-24h" 
        v-model="datetime24h"
        showTime hourFormat="24"
        :manual-input=false
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
import PrimeCalender from "primevue/calendar";
import Button from "primevue/button";

import { mapActions} from "pinia";
import dayjs from 'dayjs';
import { userStore } from '../stores/userStore';

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
      datetime24h: '',
      buttondisplay: null,
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
  }
}
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 5px;
}
</style>