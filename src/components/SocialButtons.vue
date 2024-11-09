<script setup>
import { ref } from "vue";

const email = ref("flpdoa@gmail.com");

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email.value);
    alert(`Email  ${email.value} copied to clipboard!`);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<template>
  <div class="card-buttons">
    <a
      href="https://www.linkedin.com/in/filipe-ataide/"
      class="btn btn-primary"
    >
      <i class="bi bi-linkedin"></i>
    </a>
    <button type="button" @click="copyToClipboard" class="btn btn-primary">
      <i class="bi bi-envelope-at-fill"></i>
    </button>
    <a href="https://github.com/OliAtaide" class="btn btn-primary">
      <i class="bi bi-github"></i>
    </a>
  </div>
</template>

<style lang="scss">
.card-buttons {
  display: flex;
  gap: 20px;

  .btn {
    width: 40px;
    height: 40px;
  }
}
</style>
