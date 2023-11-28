<template>
    <div>
        <div class="mb-3">
            <button 
                @click="toggleAll"
                class="btn btn-secondary m-1">
                    {{ $t('showAll') }}
            </button>
            <button
                @click="toggleCompleted"
                class="btn btn-secondary m-1">
                    {{ $t('showDone') }}
            </button>
            <button
                @click="toggleEdit"
                class="btn btn-info m-1">
                    {{ $t('edit') }}
            </button>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: {
        toggleAll: Function,
        toggleCompleted: Function,
        toggleEdit: Function
    },
}
</script>