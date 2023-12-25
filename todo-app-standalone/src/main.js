import { createApp } from "vue"
import { createPinia } from "pinia"
import { VueCookies } from "vue-cookies"

import i18n from "./configurations/i18n.js"
import router from "@/router.js"
import App from "./App.vue"
import primevue from "primevue/config"

import "primeicons/primeicons.css"
import "primevue/resources/themes/bootstrap4-light-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

const app = createApp(App);
const pinia = createPinia();

app.use(VueCookies);
app.use(pinia);
app.use(router);
app.use(primevue);
app.use(i18n);
app.mount('#app');
