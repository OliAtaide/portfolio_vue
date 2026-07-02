<script setup>
import SocialButtons from "@/components/SocialButtons.vue";
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();
</script>

<template>
  <div class="section" id="profile">
    <h1 class="section-title">Filipe Ataíde</h1>
    <h3 class="section-subtitle">{{ t("profile.subtitle") }}</h3>
    <div class="section-text">
      {{ t("profile.summary") }}
    </div>
    <SocialButtons />
  </div>
</template>
