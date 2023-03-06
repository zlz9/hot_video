## h_video

毕业设计。这是一个热门短视频平台的网站。
技术栈

- vue3 + composition api
- element-plus
- scss
- pinia
- vue-router 4.x
- typescript

## 功能模块

1. 展示不同的视频资源
2. 对视频资源的增删改查，用户可以自己上传视频资源
3. 自定义用户信息
4. 权限管理

## 目录结构

h_video
├─ README.md  
├─ dist # 打包 dist
├─ public # 静态资源
├─ src # 源码
│ ├─ types # ts 声明
│ ├─ api # 接口请求
│ ├─ assets # webpack 打包的资源
│ ├─ components # 公共组件
│ ├─ router # 路由
│ ├─ store # 全局 store 管理
│ ├─ utils # 全局公共方法
│ └─ views # 所有业务页面
└─ tsconfig.json # ts 编译配置

运行方式：

```js
npm install
npm run dev
```

- 预览地址<http://h_video.zhoulizheng.cn>
