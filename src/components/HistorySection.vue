<script setup>
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();
</script>

<template>
  <section class="section" id="history">
    <h2 class="section-title">{{ t("experience.title") }}</h2>
    <div class="row row-gap-3">
      <div class="col-12 col-lg-6" v-for="(job, i) in tm('experience.list')" :key="i">
        <article class="info-card h-100">
          <div class="info-header">
            <h3 class="info-title">{{ rt(job.title) }}</h3>
            <span class="info-date">{{ rt(job.date) }}</span>
          </div>
          <p class="info-subtitle">{{ rt(job.comp) }}</p>
          <ul class="info-list">
            <li v-for="(item, j) in job.items" :key="j">{{ rt(item) }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
