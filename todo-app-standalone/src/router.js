import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import ("@/components/LoginPage.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("@/components/TodoPage.vue"),
    },
  ],
});

export default router;