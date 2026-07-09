// ─── Personal Info ───────────────────────────────────────────────────────────
// Update this file whenever your details change.
// All components pull from here — one change updates the whole site.

export const personalInfo = {
  firstName: "Chukwuemeka",
  lastName: "Onuoha",
  fullName: "Chukwuemeka Onuoha",
  title: "Frontend Developer",
  email: "emycallistus@gmail.com",
  github: "https://github.com/Silver36-ship-it",
  linkedin: "https://linkedin.com/in/chukwuemeka-onuoha-a62a13374",
  location: "Lagos, Nigeria",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = ["About", "Skills", "Projects", "Contact"];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillGroups = {
  Languages: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3"],
  "Frameworks & Libraries": [
    "React",
    "Tailwind CSS",
    "Redux Toolkit",
    "Zustand",
    "React Query",
    "Axios",
  ],
  "Tools & Concepts": [
    "Git",
    "GitHub",
    "REST APIs",
    "Custom Hooks",
    "Responsive Design",
    "Vite",
  ],
};

// ─── Projects ────────────────────────────────────────────────────────────────
// Add your new projects here as you build them.
// Set live and github to null if they are not ready yet.

export const projects = [
  {
    id: "01",
    name: "Placeholder Project",
    description:
      "A polished sample project placeholder. Real projects will replace this entry soon.",
    tech: ["React", "Tailwind CSS"],
    live: null,
    github: null,
    featured: true,
  },
  {
    id: "02",
    name: "Task Manager",
    description:
      "A full-featured task management app with filtering, local storage persistence, and a custom useLocalStorage hook. Currently in development.",
    tech: ["React", "Custom Hooks", "Tailwind CSS"],
    live: null,
    {
      id: '01',
      name: 'Healthpadi',
      description:
        'A healthcare frontend that helps users discover approximate procedure costs before arriving at hospitals. Built as a product-focused SPA.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      live: 'https://healthpadi-frontend-ecru.vercel.app/',
      github: 'https://github.com/Silver36-ship-it',
      featured: true,
    },
    github: null,
    featured: false,
  },
];
