<template>
  <input 
    type="text" 
    class="rounded-input-task-form"
    :placeholder="translation()"
    :value="modelValue"
    @input="onInput" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },

    label: {
      type: String
    }
  },

  data() {
    return {}
  },

  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },

    isEmpty() {
      return this.modelValue === '' || this.modelValue === null
    },

    translation() {
      return this.$t(this.label) || ''
    }
  }
}
</script>

<style>
.rounded-input-task-form {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.rounded-input-task-form:focus {
  border-color: #80bdff;
  outline: 0;
  background-color: #f8f9fa; 
  box-shadow: inset 0 2px 4px rgba(0,0,0,.2);
}
</style>