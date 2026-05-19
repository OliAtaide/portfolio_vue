<script setup>
const projects = [
  {
    name: "AVASUS",
    image: "avasus.jpg",
    url: "https://avasus.ufrn.br/",
  },
  {
    name: "ScriptiveAI",
    image: "scriptiveapp.jpg",
    url: "https://www.scriptiveapp.com/",
  },
  {
    name: "LAIS/HUOL/IFRN",
    image: "lais.jpg",
    url: "https://lais-4-0.vercel.app/blog",
  },
  {
    name: "SEDIS/UFRN",
    image: "sedis.jpg",
    url: "https://sedis.ufrn.br/",
  },
  {
    name: "NAVI/IFRN",
    image: "navi.jpg",
    url: "https://www.navi.ifrn.edu.br/",
  },
  {
    name: "Olá SecretarIA",
    image: "olasecretaria.jpg",
    url: "https://olasecretaria.com/",
  },
  {
    name: "SwipeWell",
    image: "swipewell.jpg",
    url: "https://www.swipewell.app/",
  },
];

const modules = import.meta.glob('@/assets/projects/*.{jpg,png}', { eager: true })
const getProjectImage = (filename) => modules[`/src/assets/projects/${filename}`]?.default
</script>
<template>
  <div class="row row-projects">
    <div class="col-md-6" v-for="(v, i) in projects" :key="i">
      <a
        target="_blank"
        class="btn img-container"
        :href="v.url"
        :title="v.name"
        :alt="v.name"
      >
        <img
          class="img-fluid"
          :src="getProjectImage(v.image)"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
