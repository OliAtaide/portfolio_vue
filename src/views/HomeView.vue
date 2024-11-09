
<template>
  <ul class="list-group gap-3">
    <li v-for="i in 10" :key="i" class="list-group-item p-0">
      <img class="img-fluid" src="https://placehold.co/1920x1080" alt="" />
    </li>
  </ul>
</template>

<style lang="scss">
.main {
  height: calc(100vh - 120px);
}

.profile-card {
  border-radius: 16px !important;
  width: fit-content;

  .card-body {
    padding: 20px !important;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.profile-card img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.profile-header {
  gap: 30px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
}

.btn-primary {
  background-color: var(--primary) !important;
  border-radius: 8px !important;
  font-weight: bold !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;

  i {
    line-height: 0;
  }
}

.exp-card {
  border-radius: 8px !important;
  border-color: black !important;
  border-width: 2px !important;
  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em !important;
  }
  .exp-header {
    justify-content: space-between;
  }
  .card-text,
  .card-subtitle,
  .card-title {
    font-size: 1em !important;
    margin: 0;
  }
}

.list-group {
  overflow-y: scroll;
  height: 100vh;
  margin-top: -60px;
  padding-top: 60px;
  padding-right: 6px;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    padding-top: 60px;
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
    border: 3px solid var(--primary);
    border-top-width: 60px;
    border-bottom-width: 10px;
    height: 20%;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: lightgray;
  }

  .list-group-item {
    border-radius: 20px !important;
    overflow: hidden;
    min-height: fit-content !important;
  }
}

.skills {
  gap: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-card {
  border-radius: 1em !important;
  height: 120px !important;
  min-width: 120px !important;
  padding: 20px;
  cursor: pointer;

  img {
    width: auto;
    height: 100%;
    transition: all 0.2s ease-in-out;
  }
}

.skill-card:hover {
  img {
    transform: scale(1.1);
  }
}
</style>
