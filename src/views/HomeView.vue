<script setup>
const projects = [
  {
    name: "AVASUS",
    image: "avasus.png",
    url: "https://avasus.ufrn.br/",
  },
  {
    name: "NAVI/IFRN",
    image: "navi.png",
    url: "https://www.navi.ifrn.edu.br/",
  },
  {
    name: "RECSiflis",
    image: "recsifilis.png",
    url: "https://recsifilis.sifilisnao.com.br/",
  },
  {
    name: "Sífilis Não",
    image: "sifilisnao.png",
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
