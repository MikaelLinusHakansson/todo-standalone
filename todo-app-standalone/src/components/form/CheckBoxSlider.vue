<template>
  <label class="switch-label">
    <input type="checkbox" :checked="modelValue" @change="updateValue">
    <span class="slider round"> </span>
  </label>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean
    }
  },

  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.checked)
    }
  }
}
</script>

<style>
.switch-label {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin-right: 10px;
}

.switch-label input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 10px;
}

.slider::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}

.switch-label input:checked + .slider {
    background-color: #0DC0F0;
}

.switch-label input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

.switch-label input:checked + .slider::before {
    transform: translateX(20px);
}

.slider.round {
    border-radius: 10px;
}

.slider.round::before {
    border-radius: 50%;
}
</style>