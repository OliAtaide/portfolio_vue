<script setup>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

#app {
  background-color: #337799;

  font-family: "Inter", sans-serif;
  /*
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  */
}
</style>
