<script setup>
const skills = [
  {
    name: "JavaScript",
    image: "js.png",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image: "ts.png",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "SCSS/Sass",
    image: "sass.png",
    url: "https://sass-lang.com/",
  },
  {
    name: "PHP",
    image: "php.png",
    url: "https://www.php.net/",
  },
  {
    name: "Python",
    image: "python.png",
    url: "https://www.python.org/",
  },
  {
    name: "Java",
    image: "java.png",
    url: "https://www.java.com/",
  },
  {
    name: "C",
    image: "c.png",
    url: "https://learn.microsoft.com/cpp/c-language/",
  },
  {
    name: "C#",
    image: "csharp.png",
    url: "https://dotnet.microsoft.com/languages/csharp",
  },
  {
    name: "Node.js",
    image: "nodejs.png",
    url: "https://nodejs.org/en",
  },
  {
    name: "React / React Native",
    image: "react.png",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    image: "nextjs.png",
    url: "https://nextjs.org/",
  },
  {
    name: "Vue.js",
    image: "vue.png",
    url: "https://vuejs.org/",
  },
  {
    name: "Nuxt",
    image: "nuxt.png",
    url: "https://nuxt.com/",
  },
  {
    name: "Laravel",
    image: "laravel.png",
    url: "https://laravel.com/",
  },
  {
    name: "Flutter",
    image: "flutter.png",
    url: "https://flutter.dev/",
  },
  {
    name: "Angular",
    image: "angular.png",
    url: "https://angular.dev/",
  },
  {
    name: "Wordpress",
    image: "wp.png",
    url: "https://wordpress.org/",
  },
  {
    name: "Django",
    image: "django.png",
    url: "https://www.djangoproject.com/",
  },
  {
    name: "Figma",
    image: "figma.png",
    url: "https://www.figma.com/",
  },
  {
    name: "Unity",
    image: "unity.png",
    url: "https://unity.com/",
  },
  {
    name: "Construct 3",
    image: "construct.png",
    url: "https://www.construct.net/",
  },
  {
    name: "Blender",
    image: "blender.png",
    url: "https://blender.org/",
  },
  {
    name: "Godot Engine",
    image: "godot.png",
    url: "https://godotengine.org/",
  },
  {
    name: "Unreal Engine",
    image: "unreal.png",
    url: "https://www.unrealengine.com/",
  },
];
</script>

<template>
  <div class="skills d-flex">
    <a
      v-for="(s, i) in skills"
      :key="i"
      class="card skill-card"
      :title="s.name"
      :href="s.url"
      target="_blank"
    >
      <img
        :src="require(`@/assets/skills/${s.image}`)"
        :alt="s.name"
        class="img-fluid"
      />
      <h6>
        {{ s.name }}
      </h6>
    </a>
  </div>
</template>
