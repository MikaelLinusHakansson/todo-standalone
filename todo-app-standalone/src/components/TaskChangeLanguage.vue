<template>
    <div class="mb-2">
        <Button 
            label="English" 
            @click="changeLanguage('en')" 
            class="m-1">
        </Button>

        <Button 
            label="Svenska"
            @click="changeLanguage('sv')"
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
        changeLanguage(locale) {
            this.$i18n.locale = locale
        },
    }
}
</script>