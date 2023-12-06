<template>
    <div>

        <div class="mb-2">

            <button 
                @click="toggleAll"
                class="btn btn-secondary">
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
        return {}
    },

    props: {
        toggleAll: Function,
        toggleCompleted: Function,
        toggleEdit: Function
    },
}
</script>