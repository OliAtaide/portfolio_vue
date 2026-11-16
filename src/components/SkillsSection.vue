<script setup>
import { useI18n } from "vue-i18n";
import { skills, skillGroups } from "@/data/skills";
import SkillLogo from "./SkillLogo.vue";

const { t } = useI18n();
</script>

<template>
  <section class="section" id="skills">
    <h2 class="section-title">{{ t("tabs.skills") }}</h2>
    <div v-for="group in skillGroups" :key="group.key" class="skill-group">
      <h3 class="group-title">{{ t(`skills.groups.${group.key}`) }}</h3>
      <div class="skills">
        <a v-for="id in group.items" :key="id" class="skill-card" :href="skills[id].url" target="_blank"
          rel="noopener noreferrer">
          <SkillLogo class="skill-logo" :skill="skills[id]" />
          <span class="skill-name">{{ skills[id].name }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
