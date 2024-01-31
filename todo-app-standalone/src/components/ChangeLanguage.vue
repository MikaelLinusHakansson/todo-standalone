<template>
    <div class="button-container">
            <button class="my-button" @click="changeLanguage('en')">English</button>
            <button class="my-button" @click="changeLanguage('sv')">Svenska</button>
        </div>
</template>

<script>
export default {
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

<style scoped>
.button-container {
    margin-bottom: 1rem;
}

.my-button {
    margin:0.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #0DC0F0;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
}

.my-button:hover {
    background-color: #0C76F0;
}
</style>