import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "@/i18n";

const routes = [
  {
    path: "/:locale?",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const locale = to.params.locale || "pt";

  // Set i18n locale
  if (i18n.global.locale !== locale) {
    i18n.global.locale = locale;
  }

  next();
});

export default router;
