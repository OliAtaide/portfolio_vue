import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "en",
  messages: {
    pt: {
      profile: {
        subtitle: "Desenvolvedor Web",
        summary:
          "Especializado em JavaScript/TypeScript e Node.js (React/Next, Vue, Angular).",
        exp: {
          title: "Experiência",
          list: [
            {
              title: "Desenvolvedor Web",
              comp: "LAIS/UFRN",
              date: "2021-2026",
            },
            {
              title: "Desenvolvedor Shopify",
              comp: "E-Smart Capitais",
              date: "2025-2026",
            },
            {
              title: "Desenvolvedor Wordpress",
              comp: "Olivas Digital",
              date: "2025",
            },
            {
              title: "Desenvolvedor Nuxt/Next",
              comp: "IT Development",
              date: "2025",
            },
            // {
            //   title: "Voluntário (Conversação em Inglês)",
            //   comp: "BP Global STEM Academies",
            //   date: "2018",
            // },
          ],
          links: [
            // {
            //   title:
            //     "Inglês: leitura, escrita, fala e compreensão (EFSET - Nível C2)",
            //   url: "https://cert.efset.org/pt/mxcEQj",
            // },
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
          "Specialized in JavaScript/TypeScript and Node.js (React/Next, Vue, Angular).",
        exp: {
          title: "Experience",
          list: [
            {
              title: "Web Developer",
              comp: "LAIS/UFRN",
              date: "2021-2026",
            },
            {
              title: "Shopify Developer",
              comp: "E-Smart Capitais",
              date: "2025-2026",
            },
            {
              title: "Wordpress Developer",
              comp: "Olivas Digital",
              date: "2025",
            },
            {
              title: "Nuxt/Next Developer",
              comp: "IT Development",
              date: "2025",
            },
            // {
            //   title: "Volunteer (English Speaking)",
            //   comp: "BP Global STEM Academies",
            //   date: "2018",
            // },
          ],
          links: [
            // {
            //   title:
            //     "English: reading, writing, speaking and listening (EFSET - Level C2)",
            //   url: "https://cert.efset.org/pt/mxcEQj",
            // },
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
