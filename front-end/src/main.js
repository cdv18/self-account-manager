import { createApp } from "vue";
import "@/assets/scss/style.scss";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import App from "@/App.vue";
import router from "@/router/router.js";
import i18n from "@/i18n/i18nCommon.js";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.mount("#app");
