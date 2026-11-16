const images = import.meta.glob("@/assets/projects/*.{jpg,png}", { eager: true, import: "default" });
const img = (file) => images[`/src/assets/projects/${file}`];

// `tools` are keys from src/data/skills.js
export const projects = [
  // Shopify
  { name: "Case-Mate", image: img("casemate.jpg"), url: "https://case-mate.com/", tools: ["shopify", "js"] },
  { name: "FLAUNT", image: img("flauntcases.jpg"), url: "https://flauntcases.com/", tools: ["shopify", "js"] },
  { name: "Organifi", image: img("organifi.jpg"), url: "https://www.organifishop.com/", tools: ["shopify", "js"] },
  { name: "Jack Rogers", image: img("jackrogersusa.jpg"), url: "https://www.jackrogersusa.com/", tools: ["shopify", "js"] },
  { name: "Follett", image: img("follett.jpg"), url: "https://follett.com/", tools: ["shopify", "js"] },
  { name: "BriskHeat", image: img("briskheat.jpg"), url: "https://www.briskheat.com/", tools: ["shopify", "js"] },
  { name: "David's Bridal", image: img("davidsbridal.jpg"), url: "https://www.davidsbridal.com/", tools: ["shopify", "js"] },
  // Vue/Nuxt
  { name: "Olá SecretarIA", image: img("olasecretaria.jpg"), url: "https://olasecretaria.com/", tools: ["js", "nodejs", "vue", "nuxt", "sass"] },
  { name: "Scriptive AI", image: img("scriptiveapp.jpg"), url: "https://www.scriptiveapp.com/", tools: ["js", "nodejs", "vue", "nuxt", "sass"] },
  // React/Next
  { name: "SwipeWell", image: img("swipewell.jpg"), url: "https://www.swipewell.app/", tools: ["js", "ts", "nodejs", "react", "nextjs", "sass"] },
  // Moodle
  { name: "AVASUS", image: img("avasus.jpg"), url: "https://avasus.ufrn.br/", tools: ["js", "ts", "php", "sass"] },
  // WordPress
  { name: "LAIS/UFRN", image: img("lais.jpg"), url: "https://lais.huol.ufrn.br/", tools: ["js", "ts", "wordpress", "sass"] },
  { name: "SEDIS/UFRN", image: img("sedis.jpg"), url: "https://sedis.ufrn.br/", tools: ["js", "wordpress", "sass"] },
  { name: "NAVI/IFRN", image: img("navi.jpg"), url: "https://www.navi.ifrn.edu.br/", tools: ["js", "wordpress", "sass"] },
];
