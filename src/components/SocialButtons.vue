<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const email = "flpdoa@gmail.com";
const copied = ref(false);
let copiedTimer;

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => (copied.value = false), 2000);
  } catch {
    // Clipboard unavailable (insecure context, permission denied): open the mail client instead
    window.location.href = `mailto:${email}`;
  }
};
</script>

<template>
  <div class="social-buttons">
    <a href="https://www.linkedin.com/in/filipe-ataide/" class="btn btn-primary" title="LinkedIn" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-linkedin"></i>
    </a>
    <div class="email-copy">
      <button type="button" @click="copyToClipboard" class="btn btn-primary" :title="t('profile.email.copy')"
        :aria-label="t('profile.email.copy')">
        <i class="bi" :class="copied ? 'bi-check-lg' : 'bi-envelope-at-fill'"></i>
      </button>
      <span class="email-copied" :class="{ visible: copied }" role="status" aria-live="polite">
        {{ copied ? t('profile.email.copied') : '' }}
      </span>
    </div>
    <a href="https://github.com/OliAtaide" class="btn btn-primary" title="Github" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-github"></i>
    </a>

    <a class="btn btn-primary" :href="'/' + t('profile.resume.file')">
      <i class="bi bi-download"></i>
      {{ t("profile.resume.title") }}
    </a>
  </div>
</template>