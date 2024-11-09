import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import i18n from "@/i18n";
import SkillsView from "@/views/SkillsView.vue";

const routes = [
  {
    path: "/:locale?",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:locale?/skills",
    name: "skills",
    component: SkillsView,
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
