# Chukwuemeka Onuoha — Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack
- React 18
- Vite
- Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx        # Fixed navigation bar
│   ├── Hero.jsx       # Landing section
│   ├── About.jsx      # About me section
│   ├── Skills.jsx     # Skills section
│   ├── Projects.jsx   # Projects showcase
│   ├── Contact.jsx    # Contact section
│   └── Footer.jsx     # Footer
├── data.js            # All portfolio content — edit this to update the site
├── App.jsx            # Root component
├── main.jsx           # Entry point
└── index.css          # Global styles + Tailwind directives
```

## Updating Content

All your portfolio data lives in `src/data.js`. 
Edit that file to update your name, bio, skills, projects, and links.

## Deploying to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub account
4. Select this repository
5. Click Deploy

Live in under 2 minutes.
