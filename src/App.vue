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
        <div class="col-md-4">
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

<style lang="scss" src="@/assets/style.scss"></style>
