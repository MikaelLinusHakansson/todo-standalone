<template>
  <span > {{ $t(name) }} </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },

    class: {
      type: [String, Array],
      default: ''
    }
  }
}
</script>

<style>
.switch-text {
  font-size: 1rem;
  color: #333;
}

.task-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin-right: 1rem;
  max-width: 60%;
  cursor: pointer;
}

.task-date {
  flex-shrink: 0;
  margin-left: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>