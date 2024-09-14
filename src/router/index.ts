import { createWebHistory, createRouter } from "vue-router";

const init_router = () => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      // chat 首页
      {
        path: "/",
        component: () => import("@/drawer/index.vue"),
        name: "drawer",
        redirect: "/chat",
        children: [
          {
            path: "chat",
            component: () => import("@/views/Chat/Chat.vue"),
            name: "chat",
          },
        ],
      },
      // user login
      {
        path: "/login",
        component: () => import("@/views/User/Login.vue"),
        name: "login",
      },
      // user register
      {
        path: "/register",
        component: () => import("@/views/User/Register.vue"),
        name: "register",
      },
    ],
  });
};

const router = init_router();

export default router;
