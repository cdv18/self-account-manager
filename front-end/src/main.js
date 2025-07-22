import { createApp } from "vue";
import "@/assets/scss/style.scss";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import App from "@/App.vue";
import router from "@/router/router.js";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount("#app");
