<script setup>
import SocialButtons from "@/components/SocialButtons.vue";

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
    name: "Next.js  ",
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
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card profile-card">
            <div class="card-body">
              <div class="profile-header d-flex align-items-center">
                <img :src="require('@/assets/me.jpg')" alt="" />
                <div>
                  <h3 class="card-title">Filipe Ataíde</h3>
                  <h6 class="card-subtitle">Desenvolvedor Frontend</h6>
                </div>
              </div>
              <div class="card-text">
                Desenvolvedor Frontend formado em Análise e Desenvolvimento de
                Sistemas e especializado em frameworks Node.js.
              </div>
              <SocialButtons />
              <h3 class="card-title">Experiência</h3>
              <div class="exp-list">
                <div class="card exp-card">
                  <div class="card-body">
                    <div class="exp-header d-flex">
                      <h6 class="card-title">Desenvolvedor Frontend</h6>
                      <h6 class="card-subtitle">2021-2024</h6>
                    </div>
                    <p class="card-text">LAIS/UFRN</p>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary" href="/Filipe_Ataide_PTBR.pdf">
                <i class="bi bi-download"></i>
                Baixar Currículo
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <ul class="list-group gap-3">
                <li v-for="i in 10" :key="i" class="list-group-item p-0">
                  <img
                    class="img-fluid"
                    src="https://placehold.co/1920x1080"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div
              class="tab-pane fade show active"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main{
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
  background-color: #337799 !important;
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
    border: 3px solid #337799;
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
