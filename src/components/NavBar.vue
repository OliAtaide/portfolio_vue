<script setup>
import BrazilIcon from "@/icons/BrazilIcon.vue";
import UsaIcon from "@/icons/UsaIcon.vue";
</script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="row w-100">
        <div class="col-4">
          <div class="d-flex w-100 justify-content-center">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BrazilIcon v-if="this.$i18n.locale == 'pt'" />
                <UsaIcon v-if="this.$i18n.locale == 'en'" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/pt/"
                    v-if="this.$i18n.locale == 'en'"
                  >
                    <BrazilIcon />
                  </a>
                  <a
                    class="dropdown-item"
                    href="/en/"
                    v-if="this.$i18n.locale == 'pt'"
                  >
                    <UsaIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <ul class="nav" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
                title="Projetos"
              >
                <i class="bi bi-kanban"></i>
              </button>
            </li>
            <li class="nav-item">
              <div class="dot"></div>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                title="Tecnologias"
              >
                <i class="bi bi-tools"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navbar {
  z-index: 1;
  height: 60px;
  background-image: linear-gradient(var(--primary), transparent);
}
.dropdown {
  display: flex;
  justify-content: center;
  border: none !important;
  outline: none !important;
}

.dropdown-menu {
  white-space: nowrap;
  left: 0;
  right: 0;
  min-width: 100% !important;
}

.nav {
  justify-content: center;
  gap: 20px;

  .nav-item {
    display: flex;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    margin-top: auto;
    margin-bottom: auto;
  }

  .nav-link {
    border: 2px solid white;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      background-color: white;
      color: var(--primary);
    }
  }
}
</style>
