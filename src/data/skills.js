import {
  siDocker,
  siGit,
  siGraphql,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siTailwindcss,
  siUnity,
  siUnrealengine,
} from "simple-icons";

const images = import.meta.glob("@/assets/skills/*.png", { eager: true, import: "default" });
const img = (file) => images[`/src/assets/skills/${file}`];

// Each skill has an `image` (PNG in src/assets/skills) and/or an `icon` (simple-icons SVG).
// The skills grid prefers `icon`; the small project badges prefer `image`.
export const skills = {
  shopify: { name: "Shopify / Hydrogen", image: img("shopify.png"), url: "https://shopify.dev/" },
  js: { name: "JavaScript", image: img("js.png"), url: "https://developer.mozilla.org/docs/Web/JavaScript" },
  ts: { name: "TypeScript", image: img("ts.png"), url: "https://www.typescriptlang.org/" },
  sass: { name: "SCSS/Sass", image: img("sass.png"), url: "https://sass-lang.com/" },
  tailwind: { name: "Tailwind CSS", icon: siTailwindcss, url: "https://tailwindcss.com/" },
  react: { name: "React", image: img("react.png"), url: "https://react.dev/" },
  nextjs: { name: "Next.js", image: img("nextjs.png"), icon: siNextdotjs, url: "https://nextjs.org/" },
  vue: { name: "Vue.js", image: img("vue.png"), url: "https://vuejs.org/" },
  nuxt: { name: "Nuxt", image: img("nuxt.png"), url: "https://nuxt.com/" },
  angular: { name: "Angular", image: img("angular.png"), url: "https://angular.dev/" },
  wordpress: { name: "WordPress", image: img("wp.png"), url: "https://wordpress.org/" },

  nodejs: { name: "Node.js", image: img("nodejs.png"), icon: siNodedotjs, url: "https://nodejs.org/" },
  python: { name: "Python", image: img("python.png"), url: "https://www.python.org/" },
  php: { name: "PHP", image: img("php.png"), url: "https://www.php.net/" },
  graphql: { name: "GraphQL", icon: siGraphql, url: "https://graphql.org/" },
  django: { name: "Django", image: img("django.png"), url: "https://www.djangoproject.com/" },
  laravel: { name: "Laravel", image: img("laravel.png"), url: "https://laravel.com/" },

  postgresql: { name: "PostgreSQL", icon: siPostgresql, url: "https://www.postgresql.org/" },
  mysql: { name: "MySQL", icon: siMysql, url: "https://www.mysql.com/" },
  mongodb: { name: "MongoDB", icon: siMongodb, url: "https://www.mongodb.com/" },

  reactnative: { name: "React Native", image: img("react.png"), url: "https://reactnative.dev/" },
  flutter: { name: "Flutter", image: img("flutter.png"), url: "https://flutter.dev/" },

  docker: { name: "Docker", icon: siDocker, url: "https://www.docker.com/" },
  git: { name: "Git", icon: siGit, url: "https://git-scm.com/" },
  figma: { name: "Figma", image: img("figma.png"), url: "https://www.figma.com/" },

  unity: { name: "Unity", icon: siUnity, url: "https://unity.com/" },
  unreal: { name: "Unreal Engine", icon: siUnrealengine, url: "https://www.unrealengine.com/" },
  godot: { name: "Godot", image: img("godot.png"), url: "https://godotengine.org/" },
  construct: { name: "Construct 3", image: img("construct.png"), url: "https://www.construct.net/" },
  blender: { name: "Blender", image: img("blender.png"), url: "https://www.blender.org/" },
  c: { name: "C", image: img("c.png"), url: "https://learn.microsoft.com/cpp/c-language/" },
  csharp: { name: "C#", image: img("csharp.png"), url: "https://dotnet.microsoft.com/languages/csharp" },
  java: { name: "Java", image: img("java.png"), url: "https://www.java.com/" },
};

// Order and grouping follow the résumé; group titles live in i18n under skills.groups.<key>.
export const skillGroups = [
  { key: "frontend", items: ["shopify", "js", "ts", "sass", "tailwind", "react", "nextjs", "vue", "nuxt", "angular", "wordpress"] },
  { key: "backend", items: ["nodejs", "python", "php", "graphql", "django", "laravel"] },
  { key: "databases", items: ["postgresql", "mysql", "mongodb"] },
  { key: "mobile", items: ["reactnative", "flutter"] },
  { key: "tools", items: ["docker", "git", "figma"] },
  { key: "other", items: ["unity", "unreal", "godot", "construct", "blender", "c", "csharp", "java"] },
];
