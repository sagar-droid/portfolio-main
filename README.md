# My 3D Developer Portfolio

This is my personal developer portfolio: an interactive, motion-focused website where I showcase my work, services, and ways to get in touch. I built it to feel like an experience rather than a static resume, with a 3D hero scene, smooth scrolling, and carefully timed transitions.

## What is inside

- Interactive 3D hero scene built with Three.js and React Three Fiber
- Animated navigation and scroll-based section transitions
- Services section covering frontend, full-stack, performance, and web application work
- Project showcase with technology details and local project artwork
- About section with animated text and image reveals
- Marquee-style contact call to action and contact form section
- Responsive layout for desktop and mobile screens

## Built with

- React 19 and Vite
- Tailwind CSS
- GSAP and `@gsap/react`
- Three.js, React Three Fiber, and Drei
- Lenis for smooth scrolling
- React Scroll and React Responsive

## Run it locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Check the project with ESLint
```

## Make it yours

The main portfolio content lives in [src/constants/index.js](src/constants/index.js). I can update project names, descriptions, technologies, and social links there. Section content and layout can be edited in [src/sections](src/sections), while shared animated components live in [src/components](src/components).

The visual assets are stored locally in [public/assets](public/assets), and the 3D model files are in [models](models). The site font files are kept in [fonts](fonts).

## Project structure

```text
src/
├── components/   Shared animated and 3D components
├── constants/    Portfolio data and social links
├── sections/     Main portfolio sections
├── App.jsx       Application layout and loading state
└── index.css     Global styles and font definitions
```

This portfolio is a work in progress and will continue to evolve as I add new projects, refine the interactions, and improve the overall experience.

## Inspired By- Ali-Sanati
https://github.com/Ali-Sanati/awwwards-portfolio.git
