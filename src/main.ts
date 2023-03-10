import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
import ImaggerUI from "../src/utils/ImggerUI";
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css
//引入Elmessage和Elloading的css样式文件
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ZUI from "zl-vue3-ui";
import dayjs from "dayjs";
import "../node_modules/zl-vue3-ui/dist/style.css";
import { message } from "../src/utils/resetMessage";
import piniaPersist from "pinia-plugin-persist";
const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app
  .use(router)
  .use(pinia)
  .use(ImaggerUI)
  .use(vue3videoPlay)
  .use(ZUI)
  .use(ElementPlus);
app.mount("#app");
app.config.globalProperties.day = dayjs;
app.config.globalProperties.$message = message;
