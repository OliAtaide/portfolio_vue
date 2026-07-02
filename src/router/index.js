import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import i18n from "@/i18n";

const routes = [
  {
    path: '/',
    redirect: '/pt'
  },
  {
    path: "/:locale?",
    name: "home",
    component: HomeView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
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
