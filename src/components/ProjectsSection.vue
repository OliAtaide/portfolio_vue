<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useI18n } from "vue-i18n";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import SkillLogo from "./SkillLogo.vue";

const { t } = useI18n();

const breakpoints = {
  0: { slidesPerView: 1, spaceBetween: 10 },
  768: { slidesPerView: 2, spaceBetween: 15 },
  992: { slidesPerView: 3, spaceBetween: 20 },
};
</script>

<template>
  <section class="section" id="projects">
    <h2 class="section-title">{{ t("tabs.projects") }}</h2>
    <swiper class="projects-swiper" :modules="[Navigation, Pagination]" :breakpoints="breakpoints" :navigation="true"
      :loop="true" :pagination="{ clickable: true }">
      <swiper-slide v-for="project in projects" :key="project.name">
        <a class="project-card" :href="project.url" target="_blank" rel="noopener noreferrer">
          <img :src="project.image" alt="" loading="lazy" />
          <div class="project-details">
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="project-skills">
              <SkillLogo v-for="tool in project.tools" :key="tool" class="skill-icon" :skill="skills[tool]"
                prefer="image" :label="skills[tool].name" :title="skills[tool].name" />
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </section>
</template>
