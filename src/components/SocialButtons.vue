<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm, rt } = useI18n();

const email = ref("flpdoa@gmail.com");

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email.value);
    alert(`Email  ${email.value} copied to clipboard!`);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<template>
  <div class="social-buttons">
    <a href="https://www.linkedin.com/in/filipe-ataide/" class="btn btn-primary" title="LinkedIn" target="_blank">
      <i class="bi bi-linkedin"></i>
    </a>
    <button type="button" @click="copyToClipboard" class="btn btn-primary" title="E-mail">
      <i class="bi bi-envelope-at-fill"></i>
    </button>
    <a href="https://github.com/OliAtaide" class="btn btn-primary" title="Github" target="_blank">
      <i class="bi bi-github"></i>
    </a>

    <a class="btn btn-primary" :href="'/' + t('profile.resume.file')">
      <i class="bi bi-download"></i>
      {{ t("profile.resume.title") }}
    </a>
  </div>
</template>