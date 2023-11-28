<template>
    <div>
      <label for="editTask" />
      <label for="editDate" />
      <div>
        <input
          type="text"
          id="editTask"
          placeholder="Edit task:"
          v-model.trim="editName"
          class="form-control me-2">
        <input
          type="text"
          id="editDate"
          placeholder="Edit date: YYYY-MM-DD"
          v-model.trim="editDate"
          class="form-control me-2">
      </div>
      <button
        @click="editNameSender"
        :hidden="isVisable" 
        class="btn btn-success me-2 m-1">
            {{ $t('save') }}
        </button>
        <!-- make this button send the correct data to the edit method in parent komponent -->
    </div>
</template>

<script>
export default {
    props: {
        taskIndex: Number,
    },

    data() {
        return {
            editName: '',
            editDate: ''
        }
    },

    methods: {
        editNameSender() {
            this.$emit('edit-name-sender', {
                index: this.taskIndex,
                name: this.editName,
                date: this.editDate
            })

            this.editName = ''
            this.editDate = ''
        },
    }
}
</script>