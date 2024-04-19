<template>
  <label class="custom-checkbox">
    <input class="checkbox" type="checkbox">
    <span class="checkmark"></span>
  </label>
</template>

<script>
</script>

<style>
.checkbox {
    margin-right: 1rem;
}

.custom-checkbox {
  display: inline-block;
  position: relative;
  padding-left: 30px; 
  cursor: pointer;
  user-select: none; 
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px; 
  transition: background-color 0.2s;
}

.custom-checkbox:hover input ~ .checkmark {
  background-color: #ccc; 
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #0Dc0F0; 
}

.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>