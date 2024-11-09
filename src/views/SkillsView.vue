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
    name: "React",
    image: "react.png",
    url: "https://react.dev/",
  },
  {
    name: "Next.js",
    image: "nextjs.png",
    url: "https://nextjs.org/",
  },
  {
    name: "Vue",
    image: "vue.png",
    url: "https://vuejs.org/",
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
    </a>
  </div>
</template>
