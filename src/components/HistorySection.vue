<script setup>
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();
</script>

<template>
  <div class="section" id="history">
    <h2 class="section-title">
      {{ t("profile.exp.title") }}
    </h2>
    <div class="exp-list">
      <div class="row">
        <div class="col" v-for="(v, i) in tm('profile.exp.list')" :key="i">
          <div class="card exp-card">
            <div class="card-body">
              <div class="exp-header d-flex">
                <h6 class="card-title">{{ rt(v.title) }}</h6>
                <h6 class="card-subtitle">{{ rt(v.date) }}</h6>
              </div>
              <p class="card-text">{{ rt(v.comp) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
