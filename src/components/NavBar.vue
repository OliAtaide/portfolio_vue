<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import LanguageButton from "./LanguageButton.vue";

const route = useRoute();
const { t, locale } = useI18n();

const currentLocale = computed(() => route.params.locale || locale.value);

const links = [
  { hash: "#projects", label: "tabs.projects", icon: "bi-folder-fill" },
  { hash: "#skills", label: "tabs.skills", icon: "bi-tools" },
  { hash: "#history", label: "tabs.history", icon: "bi-briefcase-fill" },
  { hash: "#education", label: "tabs.education", icon: "bi-mortarboard-fill" },
];
</script>

<template>
  <nav class="navbar fixed-top">
    <div class="container">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home', params: { locale: currentLocale } }" class="nav-link"
            :title="t('nav.home')" :aria-label="t('nav.home')">
            <i class="bi bi-house-fill" aria-hidden="true"></i>
          </router-link>
        </li>
        <template v-for="link in links" :key="link.hash">
          <li class="nav-item" aria-hidden="true">
            <div class="dot"></div>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'home', hash: link.hash, params: { locale: currentLocale } }" class="nav-link"
              :class="{ active: route.hash === link.hash }" :title="t(link.label)" :aria-label="t(link.label)">
              <span class="nav-link-text">{{ t(link.label) }}</span>
              <i class="bi" :class="link.icon" aria-hidden="true"></i>
            </router-link>
          </li>
        </template>
      </ul>
      <LanguageButton />
    </div>
  </nav>
</template>
