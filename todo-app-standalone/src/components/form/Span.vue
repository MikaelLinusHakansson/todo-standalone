<template>
  <span class="switch-text" > {{ $t(name) }} </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },

    class: {
      type: String
    }
  }
}
</script>

<style>
.switch-text {
  font-size: 1rem;
  color: #333;
}
</style>