import router from "../router";
//引入login
// import login from "@/store/login";
// 引入进度条
import "nprogress/nprogress.css";
import nprogress from "nprogress";
import { ElMessage } from "element-plus";
//loading
import { showLoading, hideLoading } from "../utils/loading";
//对axios进行二次封装
import axios from "axios";
import { useUserStore } from "../store/user";
import { message } from "../utils/resetMessage";
const requests = axios.create({
  //配置对象
  baseURL: "http://localhost:8088",
  // baseURL: "http://124.221.186.211:6816",
  // baseURL: "",
  timeout: 30000,
  withCredentials: true,
});

// 添加请求拦截器
requests.interceptors.request.use(
  function (config) {
    nprogress.start();
    // 请求拦截进来调⽤显⽰loading效果
    showLoading();
    config.headers = config.headers || {};
    const userStore = useUserStore();
    config.headers.token = userStore.token;
    // 删除值为undefined、空串、null的key
    for (let key in config.data) {
      if (
        config.data[key] === "" ||
        config.data[key] === null ||
        config.data === undefined
      ) {
        delete config.data[key];
      }
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
requests.interceptors.response.use(
  function (res) {
    // 响应拦截进来隐藏loading效果，此处采⽤延时处理是合并loading请求效果，避免多次请求loading关闭⼜开启
    setTimeout(() => {
      hideLoading();
    }, 200);
    nprogress.done();
    if (res.data.code == 401) {
      const userStore = useUserStore();
      userStore.token = "";
      localStorage.clear;
      router.push({ path: "/login" });
      message({
        type: "error",
        message: `${res.data.msg}`,
      });
    }
    return Promise.resolve(res.data);
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default requests;
