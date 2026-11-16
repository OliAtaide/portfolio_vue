import { createI18n } from "vue-i18n";

// Note: vue-i18n treats @ { } | as special characters in messages; avoid them in text.
const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages: {
    pt: {
      tabs: {
        projects: "Projetos",
        skills: "Habilidades",
        history: "Experiência",
        education: "Formação",
      },
      nav: {
        home: "Início",
        language: "Mudar idioma (PT/EN)",
      },
      profile: {
        subtitle: "Desenvolvedor Web",
        summary:
          "Mais de 5 anos de experiência em plataformas de e-commerce, saúde pública e educação. Especializado em Shopify/Liquid, React/Next.js e Vue/Nuxt, com entregas para marcas de e-commerce dos EUA e sistemas de saúde pública na UFRN.",
        email: {
          copy: "Copiar e-mail",
          copied: "E-mail copiado!",
        },
        resume: {
          title: "Currículo",
          file: "Filipe_Ataide_Curriculo.pdf",
        },
      },
      skills: {
        groups: {
          frontend: "Frontend",
          backend: "Backend",
          databases: "Bancos de dados",
          mobile: "Mobile",
          tools: "Ferramentas",
          other: "Game dev e outros",
        },
      },
      experience: {
        title: "Experiência",
        list: [
          {
            title: "Desenvolvedor Shopify",
            comp: "ESmart Capitais",
            date: "08/2025 – Atual",
            items: [
              "Desenvolvimento e manutenção de temas e funcionalidades Shopify personalizados para marcas de e-commerce, como Case-Mate, FLAUNT, Organifi e Jack Rogers, com Liquid, JavaScript/TypeScript e React.",
              "Desenvolvimento de funcionalidades de loja headless com Shopify Hydrogen, melhorando a velocidade das páginas em 60%.",
            ],
          },
          {
            title: "Desenvolvedor Frontend",
            comp: "LAIS/UFRN – Laboratório de Inovação Tecnológica em Saúde",
            date: "2021 – 2026",
            items: [
              "Desenvolvimento e manutenção do AVASUS, plataforma de ensino em Moodle para estudantes da saúde pública no Brasil, com 1,7 milhão de usuários.",
              "Desenvolvimento e manutenção de sites institucionais em WordPress, como LAIS, SEDIS e NAVI, com temas personalizados em PHP.",
              "Desenvolvimento de interfaces em React e Vue para projetos de pesquisa aplicada em saúde pública.",
            ],
          },
          {
            title: "Desenvolvedor Frontend (Contrato)",
            comp: "IT Developers",
            date: "03/2025 – 08/2025",
            items: [
              "Desenvolvimento de interfaces para produtos de IA com Nuxt/Vue, como Olá SecretarIA e Scriptive AI.",
              "Desenvolvimento do SwipeWell com Next.js/React.",
              "Conteinerização de ambientes de desenvolvimento com Docker.",
            ],
          },
          {
            title: "Desenvolvedor Web (Contrato)",
            comp: "Olivas Digital",
            date: "03/2025",
            items: [
              "Desenvolvimento de sites WordPress personalizados com PHP e JavaScript/TypeScript, com deploy via Docker.",
            ],
          },
        ],
      },
      education: {
        title: "Formação e Idiomas",
        degreesTitle: "Formação acadêmica",
        languagesTitle: "Idiomas",
        degrees: [
          {
            title: "Pós-Graduação em Desenvolvimento Frontend",
            school: "Universidade Anhanguera",
            date: "2022 – 2023",
          },
          {
            title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            school: "IFRN – Instituto Federal do Rio Grande do Norte",
            date: "2018 – 2022",
          },
        ],
        languages: [
          {
            name: "Inglês",
            level: "Fluente – EF SET C2 (2024)",
            url: "https://cert.efset.org/pt/mxcEQj",
          },
          { name: "Português", level: "Nativo" },
        ],
      },
      footer: {
        builtWith: "Feito com Vue.js",
      },
    },
    en: {
      tabs: {
        projects: "Projects",
        skills: "Skills",
        history: "Experience",
        education: "Education",
      },
      nav: {
        home: "Home",
        language: "Change language (PT/EN)",
      },
      profile: {
        subtitle: "Web Developer",
        summary:
          "5+ years of experience building e-commerce, public health, and education platforms. Specialized in Shopify/Liquid, React/Next.js, and Vue/Nuxt, delivering for US e-commerce brands and public health systems at UFRN.",
        email: {
          copy: "Copy e-mail",
          copied: "E-mail copied!",
        },
        resume: {
          title: "Resume",
          file: "Filipe_Ataide_Resume.pdf",
        },
      },
      skills: {
        groups: {
          frontend: "Frontend",
          backend: "Backend",
          databases: "Databases",
          mobile: "Mobile",
          tools: "Tools",
          other: "Game dev & other",
        },
      },
      experience: {
        title: "Experience",
        list: [
          {
            title: "Shopify Developer",
            comp: "ESmart Capitais",
            date: "08/2025 – Present",
            items: [
              "Develop and maintain custom Shopify themes and features for e-commerce brands, including Case-Mate, FLAUNT, Organifi, and Jack Rogers, using Liquid, JavaScript/TypeScript, and React.",
              "Build headless storefront features with Shopify Hydrogen, improving page speed by 60%.",
            ],
          },
          {
            title: "Frontend Developer",
            comp: "LAIS/UFRN – Laboratory of Technological Innovation in Health",
            date: "2021 – 2026",
            items: [
              "Developed and maintained AVASUS, a Moodle-based learning platform for Brazil’s public health students, with 1.7 million users.",
              "Built and maintained institutional WordPress sites, including LAIS, SEDIS, and NAVI, with custom themes in PHP.",
              "Developed interfaces in React and Vue for applied research projects in public health.",
            ],
          },
          {
            title: "Frontend Developer (Contract)",
            comp: "IT Developers",
            date: "03/2025 – 08/2025",
            items: [
              "Built AI product interfaces with Nuxt/Vue, including Olá SecretarIA and Scriptive AI.",
              "Developed SwipeWell with Next.js/React.",
              "Containerized development environments with Docker.",
            ],
          },
          {
            title: "Web Developer (Contract)",
            comp: "Olivas Digital",
            date: "03/2025",
            items: [
              "Developed custom WordPress sites in PHP and JavaScript/TypeScript, deployed with Docker.",
            ],
          },
        ],
      },
      education: {
        title: "Education & Languages",
        degreesTitle: "Education",
        languagesTitle: "Languages",
        degrees: [
          {
            title: "Postgraduate Specialization in Frontend Development",
            school: "Anhanguera University",
            date: "2022 – 2023",
          },
          {
            title: "Technology Degree in Systems Analysis and Development",
            school: "IFRN – Federal Institute of Rio Grande do Norte",
            date: "2018 – 2022",
          },
        ],
        languages: [
          {
            name: "English",
            level: "Fluent – EF SET C2 (2024)",
            url: "https://cert.efset.org/en/mxcEQj",
          },
          { name: "Portuguese", level: "Native" },
        ],
      },
      footer: {
        builtWith: "Built with Vue.js",
      },
    },
  },
});

export default i18n;
