import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";
import { useUserStore } from "../store/user";
import MainView from "../components/MainView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "index",
    meta: {
      title: "首页",
    },
    component: MainView,
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/IndexView.vue"),
      },
      {
        path: "/hot",
        name: "hot",
        meta: {
          title: "热门",
        },
        component: () => import("@/views/HotView.vue"),
      },
      {
        path: "/category",
        name: "category",
        meta: {
          title: "分类",
        },
        component: () => import("@/views/CategoryView.vue"),
      },
      {
        path: "/player",
        name: "player",
        meta: {
          title: "播放",
        },
        component: () => import("@/views/PlayerView.vue"),
      },
      {
        path: "/update",
        name: "update",
        meta: {
          title: "上传",
        },
        component: () => import("../views/UpdateView.vue"),
      },
      {
        path: "/collection",
        name: "collection",
        meta: {
          title: "收藏",
        },
        component: () => import("../views/CollectionView.vue"),
      },
      {
        path: "/history",
        name: "history",
        meta: {
          title: "历史",
        },
        component: () => import("../views/HistoryView.vue"),
      },
      {
        path: "/admin",
        name: "admin",
        meta: {
          title: "管理",
        },
        component: () => import("../views/AdminView.vue"),
      },
      {
        path: "/message",
        name: "message",
        meta: {
          title: "私信",
          keepAlive: true,
        },
        component: () => import("../views/MessageView.vue"),
      },
      {
        path: "/uservideo",
        name: "uservideo",
        meta: {
          title: "用户视频",
        },
        component: () => import("../views/UserVideo.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
    meta: {
      title: "注册",
    },
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
  /**
   * 路由跳转滚动条
   * @param to
   * @param from
   * @param savedPosition
   * @returns
   */
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 };
  },
});

// let isF = false; //这个是用于判断动态路由是否已经被获取
// router.beforeEach((to, from, next) => {
//   const store = useUserStore();
//   // 如果是去login 或者是 hot 放行
//   if (to.path == "/login" || to.path == "/hot" || to.path == "/register") {
//     next();
//   } else if (!store.token) {
//     next({ path: "/login" });
//   } else {
//     if (isF) {
//       next();
//     } else {
//       // let add = store.getters.menuList || "";
//       const add = store.menu;
//       console.log(add, "menu");
//       routerData(add);
//       isF = true;
//       next({ ...to, replace: true });
//     }
//   }
// });

// const routerData = (result: any) => {
//   const currenRoutes = router.options.routes;
//   if (result) {
//     result.forEach((item: any) => {
//       // has用于判断当前路由中是否已经具有，避免重复
//       const has = currenRoutes.some((it) => it.path == item.path);
//       if (!has) {
//         router.addRoute("Home", {
//           path: item.path,
//           name: item.name,
//           meta: {
//             title: item.name,
//             isShow: item.isShow,
//             icon: item.icon,
//           },
//           component: () => import(`@/views${item.component}.vue`),
//         });
//       }
//       if (item.children && item.children.length) {
//         routerData(item.children);
//       }
//       /**
//        * 添加404路由
//        */
//       router.addRoute({
//         path: "/:pathMatch(.*)",
//         name: "error",
//         component: () => import("@/views/error/ErrorView.vue"),
//         meta: {
//           icon: "#",
//           title: "404",
//         },
//       });
//     });
//   }
// };
export default router;
