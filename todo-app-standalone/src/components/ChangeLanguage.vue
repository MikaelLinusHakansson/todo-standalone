<template>
  <div>
    <Flags :name="'src/components/assets/flags/uk.png'" @click="changeLanguage('sv')"></Flags>
    <Flags :name="'src/components/assets/flags/sv.png'" @click="changeLanguage('en')"></Flags>
  </div>
</template>

<script>
import Button from "@/components/buttons/Button.vue";
import Flags from "@/components/buttons/flags.vue";

export default {
  components: {
    Button,
    Flags
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