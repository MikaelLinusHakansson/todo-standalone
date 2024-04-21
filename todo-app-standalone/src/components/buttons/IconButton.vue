<template>
  <div class="button-container" :style="{ backgroundColor: backgroundColor, color: color}">
    <button class="my-button" :style="{ backgroundColor: backgroundColor, color: color}" >
      <img :src="icon" class="button-icon-size" :style="{ backgroundColor: backgroundColor, color: color}" />
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
    },

    icon: {
      type: String,
      default: ''
    },

    backgroundColor: {
      type: String,
      default: 'white'
    },

    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style>
.my-button {
    height: 40px;
    width: 40px;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #0DC0F0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.my-button:hover {
    background-color: #0C76F0;
    transition: background-color 0.15s ease-in-out;
}

.button-icon-size {
  height: 40px;
  width: auto;
}

.my-button:hover .button-icon-size {
  height: 45px;
  width: auto;
  transition: width 0.15s ease-in-out, height 0.15s ease-in-out;
}
</style>