// ─── Personal Info ───────────────────────────────────────────────────────────
// Update this file whenever your details change.
// All components pull from here — one change updates the whole site.

export const personalInfo = {
  firstName: 'Chukwuemeka',
  lastName: 'Onuoha',
  fullName: 'Chukwuemeka Onuoha',
  title: 'Frontend Developer',
  email: 'emycallistus@gmail.com',
  github: 'https://github.com/Silver36-ship-it',
  linkedin: 'https://linkedin.com/in/chukwuemeka-onuoha-a62a13374',
  location: 'Lagos, Nigeria',
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

// ─── Skills ──────────────────────────────────────────────────────────────────
export const skillGroups = {
  'Languages': ['JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3'],
  'Frameworks & Libraries': [
    'React',
    'Tailwind CSS',
    'Redux Toolkit',
    'Zustand',
    'React Query',
    'Axios',
  ],
  'Tools & Concepts': [
    'Git',
    'GitHub',
    'REST APIs',
    'Custom Hooks',
    'Responsive Design',
    'Vite',
  ],
};

// ─── Projects ────────────────────────────────────────────────────────────────
// Add your new projects here as you build them.
// Set live and github to null if they are not ready yet.

export const projects = [
  {
    id: '01',
    name: 'Healthpadi',
    description:
      'A healthcare platform bridging the gap between users and hospitals — letting patients discover the cost of medical procedures before arriving, removing financial uncertainty from healthcare decisions in Nigeria.',
    tech: ['React', 'TypeScript', 'Django', 'Tailwind CSS'],
    live: '#',
    github: 'https://github.com/Silver36-ship-it',
    featured: true,
  },
  {
    id: '02',
    name: 'Task Manager',
    description:
      'A full-featured task management app with filtering, local storage persistence, and a custom useLocalStorage hook. Currently in development.',
    tech: ['React', 'Custom Hooks', 'Tailwind CSS'],
    live: null,
    github: null,
    featured: false,
  },
  {
    id: '03',
    name: 'Movie Search',
    description:
      'A movie discovery app powered by the OMDB API, featuring real-time search, React Query caching, and a clean detail page. Coming soon.',
    tech: ['React', 'React Query', 'Axios', 'React Router'],
    live: null,
    github: null,
    featured: false,
  },
];
