import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tw-elements";
import "./assets/main.css";
import { createPinia } from "pinia";
// import moment from "moment";

// Vue.prototype.moment = moment;

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
