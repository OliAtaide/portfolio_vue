<script setup>
import SocialButtons from "@/components/SocialButtons.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="section" id="profile">
    <h1 class="section-title">Filipe Ataíde</h1>
    <p class="section-subtitle">{{ t("profile.subtitle") }}</p>
    <p class="section-tagline">Shopify · React · Node.js</p>
    <p class="section-text">{{ t("profile.summary") }}</p>
    <SocialButtons />
  </section>
</template>
