import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/AppLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
          //   component: HomeView,
        },
        {
          path: "/detail",
          name: "Detail Product",
          component: () => import("../views/Detail.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layouts/FullLayout.vue"),
      children: [
        {
          path: "/services",
          name: "Services",
          component: () => import("../views/Services.vue"),
        },
      ],
    },
    // {
    //   path: "/services",
    //   name: "Services",
    //   component: () => import("../views/Services.vue"),
    // },
    // {
    //   path: "/profile",
    //   name: "Profile",
    //   component: () => import("../views/Profile.vue"),
    // },
  ],
});

export default router;
