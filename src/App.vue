<script setup>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
import ProfileCard from "@/components/ProfileCard.vue";
</script>

<template>
  <NavBar />
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <ProfileCard />
        </div>
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

:root {
  --primary: #337799;
}

#app {
  background-color: var(--primary);

  font-family: "Inter", sans-serif;
}
</style>
