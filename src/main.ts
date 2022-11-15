import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import { VueQueryPlugin } from "vue-query";
import "mosha-vue-toastify/dist/style.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
