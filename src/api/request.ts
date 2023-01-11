import router from "../router";
//引入login
// import login from "@/store/login";
// 引入进度条
import "nprogress/nprogress.css";
import nprogress from "nprogress";
import { ElMessage } from "element-plus";

//对axios进行二次封装
import axios from "axios";
import { useUserStore } from "../store/user";

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
    console.log(res.data, "响应的东西");
    nprogress.done();
    if (res.data.code == 401) {
      const userStore = useUserStore();
      userStore.token = "";
      localStorage.clear;
      router.push({ path: "/login" });
      ElMessage({
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
