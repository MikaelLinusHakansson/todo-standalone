<template>
    <div class="mb-3">
        <table>
            <button @click="toggleAll" class="btn btn-secondary m-1">
                {{ $t('showAll') }}
            </button>
            <button @click="toggleCompleted" class="btn btn-secondary m-1">
                {{ $t('showDone') }}
            </button>
            <button @click="ToggleEdit()" class="btn btn-info m-1">
                <span>
                {{ $t('edit') }}
                </span>
            </button>
        </table>
    </div>
</template>

<script>
export default {
    emits: ['show-all-tasks', 'toggleCompleted', 'toggleEdit'],

    data() {
        return {
            hideAllTasks: true,
            showAllCompleted: false,
            showEdit: false
        }
    },

    methods: {
        toggleAll() {
            this.hideAllTasks = !this.hideAllTasks
            this.$emit('show-all-tasks', this.hideAllTasks)
        },

        toggleCompleted() {
            this.showAllCompleted = !this.showAllCompleted
        },

        toggleEdit() {
            this.showEdit = !this.showEdit
        }
    }
}
</script>