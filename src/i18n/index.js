import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "en",
  messages: {
    pt: {
      profile: {
        subtitle: "Desenvolvedor Web",
        summary:
          "Formado em Análise e Desenvolvimento de Sistemas com pós-graduação em Desenvolvimento Frontend. Especializado em JavaScript/TypeScript e frameworks Node.js (React/Next, Vue, Angular).",
        exp: {
          title: "Experiência",
          list: [
            {
              title: "Desenvolvedor Web",
              comp: "Laboratório de Inovação Tecnológica em Saúde (LAIS/UFRN)",
              date: "2021-2024",
            },
            {
              title: "Desenvolvedor Wordpress",
              comp: "Olivas Digital",
              date: "03/2025",
            },
            {
              title: "Desenvolvedor Nuxt",
              comp: "Freelancer",
              date: "2025",
            },
            {
              title: "Voluntário (Conversação em Inglês)",
              comp: "BP Global STEM Academies",
              date: "06/2018",
            },
          ],
          links: [
            {
              title:
                "Inglês: leitura, escrita, fala e compreensão (EFSET - Nível C2)",
              url: "https://cert.efset.org/pt/mxcEQj",
            },
          ],
        },
        resume: {
          title: "Baixar Currículo",
          file: "Filipe_Ataide_PT.pdf",
        },
      },
    },
    en: {
      profile: {
        subtitle: "Web Developer",
        summary:
          "Graduated in Systems Analysis and Development with postgrad in Frontend Development. Specialized in JavaScript/TypeScript Node.js related frameworks (React/Next, Vue, Angular).",
        exp: {
          title: "Experience",
          list: [
            {
              title: "Web Developer",
              comp: "Laboratory of Technological Innovation in Health (LAIS/UFRN)",
              date: "2021-2024",
            },
            {
              title: "Wordpress Developer",
              comp: "Olivas Digital",
              date: "03/2025",
            },
            {
              title: "Nuxt Developer",
              comp: "Freelancer",
              date: "2025",
            },
            {
              title: "Volunteer (English Speaking)",
              comp: "BP Global STEM Academies",
              date: "06/2018",
            },
          ],
          links: [
            {
              title:
                "English: reading, writing, speaking and listening (EFSET - Level C2)",
              url: "https://cert.efset.org/pt/mxcEQj",
            },
          ],
        },
        resume: {
          title: "Download Resume",
          file: "Filipe_Ataide_EN.pdf",
        },
      },
    },
  },
});

export default i18n;
