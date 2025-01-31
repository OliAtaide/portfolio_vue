<script setup>
const projects = [
  {
    name: "AVASUS",
    image: "avasus.jpg",
    url: "https://avasus.ufrn.br/",
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
    name: "RECSiflis",
    image: "recsifilis.jpg",
    url: "https://recsifilis.sifilisnao.com.br/",
  },
  {
    name: "Sífilis Não",
    image: "sifilisnao.jpg",
    url: "https://sifilisnao.com.br/",
  },
];
</script>
<template>
  <div class="list-group gap-3">
    <a
      target="_blank"
      :href="v.url"
      v-for="(v, i) in projects"
      :key="i"
      class="list-group-item p-0"
      :title="v.name"
      :alt="v.name"
    >
      <img
        class="img-fluid"
        :src="require(`@/assets/projects/${v.image}`)"
        alt=""
      />
    </a>
  </div>
</template>
