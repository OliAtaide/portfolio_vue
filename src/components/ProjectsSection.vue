<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    name: "AVASUS",
    image: "avasus.jpg",
    url: "https://avasus.ufrn.br/",
    tools: ["js.png", "ts.png", "php.png", "sass.png"],
  },
  {
    name: "ScriptiveAI",
    image: "scriptiveapp.jpg",
    url: "https://www.scriptiveapp.com/",
    tools: ["js.png", "nodejs.png", "vue.png", "nuxt.png", "sass.png"],
  },
  {
    name: "LAIS/HUOL/IFRN",
    image: "lais.jpg",
    url: "https://lais-4-0.vercel.app/blog",
    tools: ["js.png", "ts.png", "wp.png", "sass.png"],
  },
  {
    name: "SEDIS/UFRN",
    image: "sedis.jpg",
    url: "https://sedis.ufrn.br/",
    tools: ["js.png", "wp.png", "sass.png"],
  },
  {
    name: "NAVI/IFRN",
    image: "navi.jpg",
    url: "https://www.navi.ifrn.edu.br/",
    tools: ["js.png", "wp.png", "sass.png"],
  },
  {
    name: "Olá SecretarIA",
    image: "olasecretaria.jpg",
    url: "https://olasecretaria.com/",
    tools: ["js.png", "nodejs.png", "vue.png", "nuxt.png", "sass.png"],
  },
  {
    name: "SwipeWell",
    image: "swipewell.jpg",
    url: "https://www.swipewell.app/",
    tools: ["js.png", "ts.png", "node.png", "react.png", "next.png", "sass.png"],
  },
];

const project_modules = import.meta.glob('@/assets/projects/*.{jpg,png}', { eager: true })
const getProjectImage = (filename) => project_modules[`/src/assets/projects/${filename}`]?.default


const skill_modules = import.meta.glob('@/assets/skills/*.{jpg,png}', { eager: true })
const getSkillImage = (filename) => skill_modules[`/src/assets/skills/${filename}`]?.default


</script>

<template>
  <div class="section" id="projects">
    <h2 class="section-title">
      {{ $t('tabs.projects') }}
    </h2>
    <swiper :modules="[Navigation, Pagination, Autoplay]" :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }" :space-between="20" :navigation="true" :loop="true" :pagination="{ clickable: true }">
      <swiper-slide v-for="(v, i) in projects" :key="i">
        <a target="_blank" class="btn img-container project-card" :href="v.url" :title="v.name">
          <img class="img-fluid" :src="getProjectImage(v.image)" :alt="v.name" />
          <div class="project-details">
            <h6>
              {{ v.name }}
            </h6>
            <div class="project-skills">
              <img v-for="(t, j) in v.tools" :key="j" class="skill-icon" :src="getSkillImage(t)" :alt="t" />
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
