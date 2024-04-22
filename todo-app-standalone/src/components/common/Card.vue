<template>
  <div class="custome-container">
    <div class="custom-card">

      <div class="custom-card-header">
        <slot name="header"></slot>
      </div>

      <div class="custom-card-content">
        <slot name="body"></slot>
      </div>
      
      <div class="custom-card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.custome-container {
  padding-top: 3rem;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.custom-row {
  display: flex;
  justify-content: center;
}

.custom-col {
  flex: 0 0 auto;
  width: 50%;
  max-width: 540px;
}

.custom-card {
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

.custom-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.custom-form-group {
  margin-bottom: 1rem;
}

.custom-card-footer {
  margin-top: 1rem;
}
</style>