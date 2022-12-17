import { createRouter, createWebHistory } from "vue-router";
// import "flowbite";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //   path: "/",
      //   name: "home",
      //   component: () => import("../views/HomeView.vue"),
      //   component: HomeView,
      path: "/",
      component: () => import("../layouts/AppLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
          //   component: HomeView,
        },
        // {
        //   path: "/detail",
        //   name: "Product",
        //   component: () => import("../views/Detail.vue"),
        // },
        {
          path: "/detail/:id",
          name: "Detail Product",
          component: () => import("../views/Detail.vue"),
        },
        {
          path: "/daftar-semua-produk",
          component: () => import("../layouts/AppSeller.vue"),
          //   name: "Daftar Produk Seller",
          children: [
            {
              path: "",
              name: "Daftar Semua Product",
              component: () => import("../views/products/Index.vue"),
            },
          ],
        },
        {
          path: "/info-product",
          name: "Info Product",
          component: () => import("../views/InfoProduct.vue"),
        },
        // {
        //   path: "/daftar-jual",
        //   name: "Daftar Jual",
        //   component: () => import("../views/DaftarJual.vue"),
        // },
      ],
    },
    // {
    //   path: "/",
    //   component: () => import("../layouts/FullLayout.vue"),
    //   children: [
    //     {
    //       path: "/services",
    //       name: "Services",
    //       component: () => import("../views/Services.vue"),
    //     },
    //   ],
    // },
    // {
    //   path: "/services",
    //   name: "Services",
    //   component: () => import("../views/Services.vue"),
    // },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/auth/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/auth/Register.vue"),
    },
  ],
});

export default router;
