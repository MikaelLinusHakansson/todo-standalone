<template>
    <div class="card flex justify-content-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script>
import InputText from 'primevue/inputtext'

export default {
    components: {
        InputText,
    },

    data() {
        return {
            value: ''
        }
    }
}
</script>