<script setup>
import SocialButtons from "@/components/SocialButtons.vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div class="card profile-card">
    <div class="card-body">
      <div class="profile-header d-flex align-items-center">
        <img :src="require('@/assets/me.jpg')" alt="" />
        <div>
          <h3 class="card-title">Filipe Ataíde</h3>
          <h6 class="card-subtitle">{{ t("profile.subtitle") }}</h6>
        </div>
      </div>
      <div class="card-text">
        {{ t("profile.summary") }}
      </div>
      <SocialButtons />
      <h3 class="card-title">
        {{ t("profile.exp.title") }}
      </h3>
      <div class="exp-list">
        <div class="card exp-card">
          <div class="card-body">
            <div class="exp-header d-flex">
              <h6 class="card-title">Desenvolvedor Frontend</h6>
              <h6 class="card-subtitle">2021-2024</h6>
            </div>
            <p class="card-text">LAIS/UFRN</p>
          </div>
        </div>
      </div>
      <a class="btn btn-primary" href="/Filipe_Ataide_PTBR.pdf">
        <i class="bi bi-download"></i>
        {{ t("profile.resume.title") }}
      </a>
    </div>
  </div>
</template>
