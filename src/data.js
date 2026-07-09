// ============================================================
// ALL YOUR PORTFOLIO DATA LIVES HERE
// Edit this file to update your portfolio content easily
// ============================================================

export const navLinks = ["About", "Skills", "Projects", "Contact"];

export const personalInfo = {
  name: "Chukwuemeka Onuoha",
  firstName: "Chukwuemeka",
  lastName: "Onuoha",
  title: "Frontend Developer crafting thoughtful digital experiences",
  bio: "I design and build polished web experiences that feel fast, clear, and memorable — from product interfaces to full-featured applications. Based in Lagos, Nigeria, I love turning ideas into elegant user journeys.",
  email: "emycallistus@gmail.com",
  github: "https://github.com/Silver36-ship-it",
  linkedin: "https://linkedin.com/in/chukwuemeka-onuoha-a62a13374",
  location: "Lagos, Nigeria",
  status: "Open to work",
};

export const aboutText = [
  "I'm a Frontend Developer based in Lagos, Nigeria, with a strong eye for clean interfaces and a love for turning complex ideas into simple, beautiful user experiences. I trained at Semicolon Africa and graduated from the Federal University of Technology, Owerri (FUTO) with a degree in Petroleum Engineering. My journey started at a coding bootcamp, and I haven't stopped building since.",
  "My most meaningful project so far is a healthcare platform I helped build — a project that aims to make healthcare more transparent by letting patients discover approximate procedure costs before arriving at the hospital. I believe technology should solve real problems for real people.",
  "I'm actively seeking my first professional frontend role where I can grow, contribute, and build things that matter. If that sounds like a fit, I'd love to hear from you.",
];

export const skillGroups = [
  {
    category: "Languages",
    skills: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "Axios",
    ],
  },
  {
    category: "Tools & Concepts",
    skills: [
      "Git",
      "GitHub",
      "REST APIs",
      "Custom Hooks",
      "Responsive Design",
      "Vite",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "Healthpadi",
    description:
      "A healthcare frontend that helps users discover approximate procedure costs before arriving at hospitals. Built as a product-focused SPA.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://healthpadi-frontend-ecru.vercel.app/",
    github: "https://github.com/Silver36-ship-it",
    featured: true,
    status: "live",
  },
  {
    id: "02",
    name: "Task Manager",
    description:
      "A full-featured task management app with filtering, local storage persistence, and a custom useLocalStorage hook.",
    tech: ["React", "Custom Hooks", "Tailwind CSS"],
    live: null,
    github: null,
    featured: false,
    status: "in-development",
  },
  {
    id: "03",
    name: "Movie Search",
    description:
      "A movie discovery app powered by the OMDB API, featuring real-time search, React Query caching, and a clean detail page.",
    tech: ["React", "React Query", "Axios", "React Router"],
    live: null,
    github: null,
    featured: false,
    status: "coming-soon",
  },
];
