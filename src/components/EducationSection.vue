<script setup>
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();
</script>

<template>
  <section class="section" id="education">
    <h2 class="section-title">{{ t("education.title") }}</h2>
    <div class="row row-gap-3">
      <div class="col-12 col-lg-6">
        <h3 class="group-title">{{ t("education.degreesTitle") }}</h3>
        <div class="d-flex flex-column gap-3">
          <article class="info-card" v-for="(degree, i) in tm('education.degrees')" :key="i">
            <div class="info-header">
              <h4 class="info-title">{{ rt(degree.title) }}</h4>
              <span class="info-date">{{ rt(degree.date) }}</span>
            </div>
            <p class="info-subtitle mb-0">{{ rt(degree.school) }}</p>
          </article>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <h3 class="group-title">{{ t("education.languagesTitle") }}</h3>
        <article class="info-card">
          <ul class="language-list">
            <li v-for="(language, i) in tm('education.languages')" :key="i">
              <strong>{{ rt(language.name) }}:</strong>{{ " " }}
              <a v-if="language.url" :href="rt(language.url)" target="_blank" rel="noopener noreferrer">
                {{ rt(language.level) }} <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
              </a>
              <span v-else>{{ rt(language.level) }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
