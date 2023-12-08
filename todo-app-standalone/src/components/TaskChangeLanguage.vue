<template>
    <div class="mb-2">
        <Button 
            label="English" 
            @click="changeTheLanguage('en')" 
            class="m-1">
        </Button>

        <Button 
            label="Svenska"
            @click="changeTheLanguage('sv')"
            class="m-1">
        </Button>
    </div>
</template>

<script>
import Button from "primevue/button";

export default {
    inject: ['i18n'],

    components: {
        Button,
    },

    data() {
        return {};
    },

    methods: {
        changeTheLanguage(locale) {
            this.$i18n.locale = locale
        },
    }
}
</script>