import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

/** Bootstrap Css, Js **/
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

/** Fontawesome Free **/
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

/** Template CSS File **/
import "../src/assets/css/color.css";
import "../src/assets/css/main.css";
import "../src/assets/css/monochrome.css";

createApp(App).use(router).mount("#app");
