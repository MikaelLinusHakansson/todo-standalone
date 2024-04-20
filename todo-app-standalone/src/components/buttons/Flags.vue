<template>
  <div>
    <button class="language-button" >
      <img :src="name" class="button-icon" />
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
  }
}
</script>

<style>
.language-button  {
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  background-color: white;
}

.button-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  transition: width 0.15s ease-in-out, height 0.15s ease-in-out;
}

.button-icon:hover {
  width: 30px;
  height: 30px;
}
</style>