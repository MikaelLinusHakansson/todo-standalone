<template>
    <div class="mb-2">

        <button 
            @click="changeTheLanguage('en')"
            class="btn btn-primary m-1">
                English
        </button>

        <button
            @click="changeTheLanguage('sv')"
            class="btn btn-primary m-1">
                Swedish
        </button>
        
    </div>
</template>

<script>
export default {
    inject: ['i18n'],

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