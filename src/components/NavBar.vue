<script setup>
import BrazilIcon from "@/icons/BrazilIcon.vue";
import UsaIcon from "@/icons/UsaIcon.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { locale } = useI18n();

const currentLocale = computed(() => route.params.locale || locale.value);
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
                <BrazilIcon v-if="locale == 'pt'" />
                <UsaIcon v-if="locale == 'en'" />
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href="/pt/"
                    v-if="locale == 'en'"
                  >
                    <BrazilIcon />
                  </a>
                  <a
                    class="dropdown-item"
                    href="/en/"
                    v-if="locale == 'pt'"
                  >
                    <UsaIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col">
          <ul class="nav" id="myTab">
            <li class="nav-item">
              <router-link
                :to="{ name: 'home', params: { locale: currentLocale } }"
                class="nav-link"
                active-class="active"
                title="Projetos"
              >
                <i class="bi bi-kanban"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <div class="dot"></div>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'skills', params: { locale: currentLocale } }"
                class="nav-link"
                active-class="active"
                title="Tecnologias"
              >
                <i class="bi bi-tools"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>