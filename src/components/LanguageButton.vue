<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();

const currentLocale = computed(() => route.params.locale || locale.value);
const isEnglish = computed(() => currentLocale.value === "en");

function toggleLocale() {
  const newLocale = isEnglish.value ? "pt" : "en";
  locale.value = newLocale;
  router.push({
    ...route,
    params: { ...route.params, locale: newLocale },
  });
}
</script>

<template>
  <div class="lang-switch">
    <input type="checkbox" id="langSwitch" class="lang-switch-input" :checked="isEnglish" @change="toggleLocale">
    <label for="langSwitch" class="lang-switch-track">
      <span class="lang-switch-option lang-pt">PT</span>
      <span class="lang-switch-option lang-en">EN</span>
      <span class="lang-switch-knob"></span>
    </label>
  </div>
</template>