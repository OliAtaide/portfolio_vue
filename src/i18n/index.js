import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "en",
  messages: {
    pt: {
      profile: {
        subtitle: "Desenvolvedor Frontend",
        summary:
          "Formado em Análise e Desenvolvimento de Sistemas e especializado em frameworks Node.js (React/Next, Vue, Angular).",
        exp: {
          title: "Experiência",
        },
        resume: {
          title: "Baixar Currículo",
          file: "Filipe_Ataide_PTBR.pdf",
        },
      },
    },
    en: {
      profile: {
        subtitle: "Frontend Developer",
        summary:
          "Graduated in Systems Analysis and Development and specialized in Node.js related frameworks (React/Next, Vue, Angular).",
        exp: {
          title: "Experience",
        },
        resume: {
          title: "Download Resume",
          file: "Filipe_Ataide_ENUS.pdf",
        },
      },
    },
  },
});

export default i18n;
