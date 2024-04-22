<template>
  <div class="column-row">
    <Textfield :label="getLabel" />
    <Password :feedback="feedback" :toggleMask="toggleMask" :placeholder="getPlaceholder" />
  </div>
</template>

<script>
import Password from 'primevue/password'
import Textfield from '@/components/form/TextField.vue'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },

    feedback: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String,
      default: ''
    },

    toggleMask: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Textfield,
    Password
  },

  computed: {
    getLabel() {
      return this.$t(this.label) !== '' ? this.$t(this.label) : ''
    },

    getPlaceholder() {
      return this.$t(this.placeholder) !== '' ? this.$t(this.placeholder) : ''
    }
  }
}
</script>

<style>
.column-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

}

.space-around {
  margin: 1rem;
}
</style>