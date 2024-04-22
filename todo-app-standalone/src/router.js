import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/modules/user/components/LoginPage.vue"),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/login",
      name: "login.auth",
      component: () => import ("@/components/modules/user/components/LoginPage.vue"),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register.auth",
      component: () => import ("@/components/modules/user/components/RegisterPage.vue"),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/todo",
      name: "todo.list",
      component: () => import("@/components/TodoPage.vue"),
      meta: {
        requiresAuth: true
      }
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthPage = to.name === 'todo.list';
  const hasToken = $cookies.get('accessToken') !== null;

  if (requiresAuth && hasToken && !isAuthPage) {
    next({ name: 'todo.list' })
  } else if (requiresAuth && !hasToken) {
    next({ name: 'login.auth' })
  } else {
    next()
  }
});

export default router;