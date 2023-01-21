import { da } from "element-plus/es/locale";
import { defineStore } from "pinia";
export const useWsStore = defineStore("ws", {
  state: (): stateInt => ({
    //推送消息
    data: [],
    webSocket: {} as WebSocket,
  }),
  getters: {},
  actions: {
    //websocket初始化
    initWebsocket() {
      this.webSocket = new WebSocket(
        // 此处填写你要连接的ws地址
        // "ws://localhost:8088/socket/" + Math.random()
        `ws://localhost:8088/websocket/${localStorage.getItem("token")}`
      );
      //建立连接
      this.webSocket.onopen = function () {
        /*
         * 连接成功
         * */
        console.log("通讯开始");
        // 发送心跳防止ws协议自动断联
      };
      // 发送消息
      //接收服务端消息
      this.webSocket.onmessage = function (e) {
        /*
         * 收到消息时回调函数
         * */
        console.log("收到的数据：", e.data);
        // 如果数据对象为字符串，可转换为对象格式
        let data = JSON.parse(e.data);
        data.push(data);
        console.log(data);
      };
      this.webSocket.onerror = function () {
        /*
         * 通讯异常
         * */
        console.log("通讯异常");
      };
      this.webSocket.close = function () {
        /*
         * 关闭连接时回调函数
         * */
        console.log("连接已断开");
      };
    },
    sendMessage() {
      this.webSocket.send("11");
    },
  },
});
