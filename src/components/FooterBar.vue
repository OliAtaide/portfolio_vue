<template>
  <div class="footer">
    <h6 class="m-0">
      ©{{ new Date().getFullYear() }} — <strong>Vue.js</strong>
    </h6>
  </div>
</template>

<style lang="scss">
.footer {
  z-index: 99;
  position: relative;
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
