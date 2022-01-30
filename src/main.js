import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/tailwind.css";
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
  color: "#e67c6c",
  failedColor: "#b32229",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
};

createApp(App)
  .use(VueProgressBar, options)
  .use(store)
  .use(router)
  .mount("#app");
