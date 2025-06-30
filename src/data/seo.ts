import type { Route } from "../routes/+types/home";

export const seoMetadata: Route.MetaDescriptors = [
  { title: "Ikram Hussain - Frontend Web Developer" },
  {
    name: "description",
    content:
      "Committed to developing modern software solutions using modern JavaScript frameworks with a particular focus on React.js. From interactive frontend UIs to full-stack applications that elevate user experiences.",
  },
  { name: "robots", content: "index, follow" },
  {
    name: "keywords",
    content:
      "ikram hussain siyam, ikram, hussain, ikram hussain, siyam, ikram siyam, react developer, react.js, reactjs, nextjs, javascript developer, next.js, Nextjs developer, web developer, prisma, mongodb, web developer bangladesh, full-stack developer, fullstack developer, full stack developer, software developer",
  },
  { name: "og:type", content: "website" },
  {
    name: "og:title",
    content: "Ikram Hussain - Frontend Web Developer",
  },
  {
    name: "og:description",
    content:
      "Committed to developing modern software solutions using modern JavaScript frameworks with a particular focus on React.js. From interactive frontend UIs to full-stack applications that elevate user experiences.",
  },
  {
    name: "og:url",
    content: "https://ikramhussainsiyam.vercel.app/",
  },
  {
    name: "og:image",
    // TODO: 👇 change image with my own real image in later commit after photo editing
    content:
      "https://media.licdn.com/dms/image/v2/D5616AQELC6MFvkAjbg/profile-displaybackgroundimage-shrink_350_1400/B56ZbYcfynGgAY-/0/1747388072255?e=1756339200&v=beta&t=EDbkD_TzxdVP9IfKHLD5Tm7uskck4MYSvoL0ZQVzB40",
  },
];
