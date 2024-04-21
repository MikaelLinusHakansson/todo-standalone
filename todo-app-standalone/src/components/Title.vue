<template>
  <div>
    <h2>{{ $t(name) }}</h2>
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