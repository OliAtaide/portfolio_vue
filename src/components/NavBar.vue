<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import LanguageButton from "./LanguageButton.vue";

const route = useRoute();
const { locale } = useI18n();

const currentLocale = computed(() => route.params.locale || locale.value);

// list of hashes in nav order, '' represents "no hash" (the default/first link)
const navHashes = ['', '#projects', '#skills', '#history'];

const activeHash = computed(() => {
  // if the current route hash matches one we know about, use it
  if (navHashes.includes(route.hash)) return route.hash;
  // otherwise fall back to the first entry
  return navHashes[0];
});

const isActive = (hash) => activeHash.value === hash;
</script>

<template>
  <div class="navbar fixed-top">
    <div class="container">
      <ul class="nav" id="myTab">
        <li class="nav-item">
          <router-link :to="{ name: 'home', params: { locale: currentLocale } }" class="nav-link"
            :title="$t('tabs.projects')">
            <i class="bi bi-house-fill"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <div class="dot"></div>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'home', hash: '#projects', params: { locale: currentLocale } }" class="nav-link"
            :class="{ active: isActive('#projects') }" :title="$t('tabs.projects')">
            {{ $t('tabs.projects') }}
          </router-link>
        </li>
        <li class="nav-item">
          <div class="dot"></div>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'home', hash: '#skills', params: { locale: currentLocale } }" class="nav-link"
            :class="{ active: isActive('#skills') }" :title="$t('tabs.skills')">
            {{ $t('tabs.skills') }}
          </router-link>
        </li>
        <li class="nav-item">
          <div class="dot"></div>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'home', hash: '#history', params: { locale: currentLocale } }" class="nav-link"
            :class="{ active: isActive('#history') }" :title="$t('tabs.history')">
            {{ $t('tabs.history') }}
          </router-link>
        </li>
        <language-button/>
      </ul>
    </div>
  </div>
</template>