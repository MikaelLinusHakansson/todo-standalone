<template>
  <div class="card-container">
    <div class="card-card">

      <div class="card-card-header">
        <slot name="header"></slot>
      </div>

      <div class="card-card-content">
        <slot name="body"></slot>
      </div>
      
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.card-container {
  padding-top: 3rem;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.card-row {
  display: flex;
  justify-content: center;
}

.card-col {
  flex: 0 0 auto;
  width: 50%;
  max-width: 540px;
}

.card-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #f8f9fa;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.075);
}

.spacer-bottom {
  margin-bottom: 1rem;
}

.card-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-form-group {
  margin-bottom: 1rem;
}

.card-footer {
  margin-top: 1rem;
}
</style>