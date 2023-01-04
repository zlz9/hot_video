import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
import ImaggerUI from "../src/utils/ImggerUI";
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(pinia).use(ImaggerUI);
app.mount("#app");
