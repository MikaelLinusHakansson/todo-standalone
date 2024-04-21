<template>
  <div>
    <Flags :name="'src/components/assets/flags/uk.png'" @click="changeLanguage('en')"></Flags>
    <Flags :name="'src/components/assets/flags/sv.png'" @click="changeLanguage('sv')"></Flags>
  </div>
</template>

<script>
import Flags from "@/components/buttons/flags.vue";

export default {
  components: {
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