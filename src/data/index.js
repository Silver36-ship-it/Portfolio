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
    name: "Healthpadi",
    description:
      "A healthcare app that helps users discover procedure costs before they arrive at the hospital. It combines a polished frontend experience with backend support for data-driven price discovery.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://healthpadi-frontend-ecru.vercel.app/",
    github: "https://github.com/Silver36-ship-it",
    featured: true,
    status: "live",
  },
  {
    id: "03",
    name: "Movie Search",
    description:
      "A movie discovery app powered by the OMDB API, featuring real-time search, React Query caching, and a clean detail page.",
    tech: ["React", "React Query", "Axios", "React Router"],
    live: null,
    github: "https://github.com/Silver36-ship-it",
    featured: false,
    status: "coming-soon",
  },
  {
    id: "04",
    name: "Buildspace",
    description:
      "A UI clone of ArchSaint Nexus — a Nigerian software development and digital solutions company. The design highlights clean landing page structure, product sections, and responsive interaction.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "https://build-space-arch-saint-clone.vercel.app/",
    github: "https://github.com/Silver36-ship-it",
    featured: false,
    status: "live",
  },
  {
    id: "05",
    name: "TaskFlow",
    description:
      "A modern task workflow app designed to help users manage projects, tasks, and daily priorities with a clear, responsive interface.",
    tech: ["React", "Tailwind CSS"],
    live: "https://task-flow-lake-psi.vercel.app/",
    github: "https://github.com/Silver36-ship-it",
    featured: false,
    status: "live",
  },
];
