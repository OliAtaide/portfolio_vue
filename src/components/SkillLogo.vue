<script setup>
import { computed } from "vue";

const props = defineProps({
  skill: { type: Object, required: true },
  // "icon": prefer the SVG (skills grid, dark background); "image": prefer the PNG (badges on white)
  prefer: { type: String, default: "icon" },
  // Accessible name; leave empty when the skill name is already visible next to the logo
  label: { type: String, default: "" },
});

const useIcon = computed(() =>
  props.prefer === "icon" ? !!props.skill.icon : !props.skill.image && !!props.skill.icon
);

// Brand colors with too little contrast against the skill card are drawn in white instead.
const CARD_LUMINANCE = 0.045; // relative luminance of the card surface over the page background
const fill = computed(() => {
  const hex = props.skill.icon?.hex;
  if (!hex) return undefined;
  if (props.prefer === "image") return `#${hex}`; // badges sit on a white circle
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const contrast = (luminance + 0.05) / (CARD_LUMINANCE + 0.05);
  return contrast < 2.4 ? "#ffffff" : `#${hex}`;
});
</script>

<template>
  <svg v-if="useIcon" viewBox="0 0 24 24" :fill="fill" :role="label ? 'img' : undefined"
    :aria-label="label || undefined" :aria-hidden="label ? undefined : 'true'">
    <path :d="skill.icon.path" />
  </svg>
  <img v-else :src="skill.image" :alt="label" />
</template>
