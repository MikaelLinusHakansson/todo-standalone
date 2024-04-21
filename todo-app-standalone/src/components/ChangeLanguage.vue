<template>
  <div>
    <Flags :name="'src/components/assets/flags/uk.png'" @click="changeLanguage('en')" />
    <Flags :name="'src/components/assets/flags/sv.png'" @click="changeLanguage('sv')" />
  </div>
</template>

<script>
import Flags from "@/components/buttons/flags.vue";

export default {
  components: {
    Flags
  },

  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>