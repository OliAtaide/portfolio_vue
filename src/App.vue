<script setup>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { Analytics } from "@vercel/analytics/vue"
</script>

<template>
  <SpeedInsights />
  <Analytics />
  <NavBar />
  <div class="main">
    <router-view />
  </div>
  <FooterBar />
</template>

<style lang="scss" src="@/assets/style.scss"></style>
