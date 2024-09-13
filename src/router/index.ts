import { createWebHistory, createRouter } from "vue-router";

const init_router = () => {
  return createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: () => import("@/drawer/index.vue"),
        name: "drawer",
        redirect:'/chat',
        children:[
          {
            path:'chat',
            component:()=>import('@/views/Chat/Chat.vue'),
            name:'chat'
          }
        ]
      },
    ],
  });
};

const router = init_router();

export default router;
