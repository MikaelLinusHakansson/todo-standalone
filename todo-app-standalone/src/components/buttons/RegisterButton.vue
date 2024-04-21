<template>
  <div class="button-container">
    <button class="my-register-button">
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    translation() {
      return this.name = this.$t(this.name) || ''
    }
  }
}
</script>

<style>
.my-register-button {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #0DC0F0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    width: 100%;
}

.my-register-button:hover {
    background-color:  #0C76F0;
}
</style>