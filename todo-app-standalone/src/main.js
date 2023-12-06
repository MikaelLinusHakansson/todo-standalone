import { createApp } from "vue"
import { createPinia } from "pinia"

import i18n from "./configurations/i18n.js"
import App from "./App.vue"

import primevue from "primevue/config"

import "primeicons/primeicons.css"
import "primevue/resources/themes/soho-dark/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

const pinia = createPinia();
const app = createApp(App);

app.use(primevue);
app.use(pinia);
app.use(i18n);
app.mount('#app');
