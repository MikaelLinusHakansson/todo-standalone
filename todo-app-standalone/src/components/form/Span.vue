<template>
  <span 
    :class="[fontStyles, colorStyles]"> 
      {{ $t(name) }} 
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },

    fontWeight: {
      type: String,
      default: 'normal'
    },

    color: {
      type: String,
      default: 'black'
    }
  },

  computed: {
    fontStyles() {
      const textDecoration = {
        'normal': 'normal-font',
        'bold': 'bold-font'
      }

      return textDecoration[this.fontWeight];
    },

    colorStyles() {
      const textDecoration = {
        'black': 'black-text',
        'default': 'default-text-color'
      }

      return textDecoration[this.color];
    }
  }
}
</script>

<style>
.default-text-color {
  color: #0DC0F0;
}

.black-text {
  color: black;
}

.bold-font {
  font-weight: bold;
}

.normal-font {
  font-weight: normal;
}

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