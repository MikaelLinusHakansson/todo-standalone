<template>
    <div>
      <label for="editTask">
      </label>
      <label for="editDate">
      </label>
      <div>
        <input
            maxlength="50"
            type="text"
            id="editTask"
            placeholder="Edit task:"
            v-model.trim="editName"
            class="form-control me-2">
        <input
            maxlength="10"
            type="text"
            id="editDate"
            placeholder="Edit date: YYYY-MM-DD"
            v-model.trim="editDate"
            class="form-control me-2">
      </div>
    </div>
</template>

<script>
export default {
    emits: ['end-edited-data'],

    data() {
        return {
            editname: '',
            editDate: ''
        }
    },

    methods: {
        sendEditedData() {
            this.$emit('send-edited-data', {
                name: this.editName,
                date: this.editDate
            })
        }
    }
}
</script>