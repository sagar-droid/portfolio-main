// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I build modern, responsive, and high-performance web interfaces with a strong focus on clean design, smooth interactions, and great user experience.",
    items: [
      {
        title: "Modern UI Development",
        description: "(React, Next.js, TypeScript, Tailwind CSS)",
      },
      {
        title: "Interactive Experiences",
        description: "(Animations, Micro-interactions, Motion, UI/UX)",
      },
      {
        title: "Responsive Design",
        description: "(Mobile-first, Cross-browser, Pixel-perfect)",
      },
    ],
  },

  {
    title: "Full-Stack Development",
    description:
      "Beyond the frontend, I can build and connect the backend systems that power your application—from APIs and authentication to databases and third-party integrations.",
    items: [
      {
        title: "Backend Development",
        description: "(Node.js, Express, REST APIs, Authentication)",
      },
      {
        title: "Database Integration",
        description: "(MySQL, MongoDB, Data Modeling)",
      },
      {
        title: "API & Integrations",
        description: "(Third-party APIs, Payments, Cloud Services)",
      },
    ],
  },

  {
    title: "Performance & Optimization",
    description:
      "Fast websites feel better and perform better. I optimize applications for speed, accessibility, SEO, and a smooth experience across devices.",
    items: [
      {
        title: "Performance Optimization",
        description: "(Core Web Vitals, Lighthouse, Code Splitting)",
      },
      {
        title: "SEO Optimization",
        description: "(SSR, Metadata, Structured Data, Technical SEO)",
      },
      {
        title: "Code Quality",
        description: "(Refactoring, TypeScript, Scalable Architecture)",
      },
    ],
  },

  {
    title: "Web Applications",
    description:
      "From dashboards and business platforms to e-commerce and content-driven websites, I turn ideas and designs into production-ready web applications.",
    items: [
      {
        title: "Business Applications",
        description: "(Dashboards, Admin Panels, Management Systems)",
      },
      {
        title: "E-Commerce",
        description: "(Product Catalogs, Checkout, Payments, APIs)",
      },
      {
        title: "CMS & Content Platforms",
        description: "(Blogs, Dynamic Websites, Headless CMS)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: "ev-dashboard",
    name: "EV Dashboard with telemetry data",
    description:
      "A real-time dashboard for monitoring electric vehicle performance and telemetry data.",
    overview:
      "A real-time monitoring dashboard built for an electric vehicle platform, surfacing live telemetry (battery health, motor performance, location, and diagnostics) in a single, glanceable interface for fleet operators and engineers.",
    role: "Full-Stack Developer",
    href: "",
    image: "/assets/projects/ev/ev5.webp",
    bgImage: "/assets/backgrounds/blanket.webp",
    gallery: [
      "/assets/projects/ev/ev1.webp",
      "/assets/projects/ev/ev2.webp",
      "/assets/projects/ev/ev3.webp",
      "/assets/projects/ev/ev4.webp",
      "/assets/projects/ev/ev6.webp",
      "/assets/projects/ev/ev7.webp",
    ],
    features: [
      "Live telemetry charts for battery, motor, and drivetrain data",
      "Historical trip logs with filterable date ranges",
      "Alerting for out-of-range diagnostic values",
      "Role-based dashboards for fleet operators vs. engineers",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "Worked through the raw telemetry schema with the hardware team to understand which signals mattered most and how often they update.",
      },
      {
        title: "Architecture",
        description:
          "Designed a Node.js ingestion layer that normalizes incoming telemetry into Postgres, with MySQL powering the account/fleet metadata side.",
      },
      {
        title: "Dashboard build",
        description:
          "Built the React/Next.js frontend around composable chart widgets so new telemetry types could be added without touching layout code.",
      },
      {
        title: "Performance",
        description:
          "Tuned polling and chart re-rendering so the dashboard stays responsive even with multiple live data streams open at once.",
      },
    ],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Mysql" },
      { id: 5, name: "Postgres" },
      { id: 6, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    slug: "law-firm-website",
    name: "Law Firm Website",
    description:
      "A professional website for a law firm with case studies, attorney profiles, and contact information.",
    overview:
      "A polished marketing and information site for a law firm, built to establish credibility with prospective clients through case studies, attorney profiles, and a clear path to get in touch.",
    role: "Full-Stack Developer",
    href: "",
    image: "/assets/projects/kanooniastra/kanoon1.webp",
    bgImage: "/assets/backgrounds/curtains.webp",
    gallery: [
      "/assets/projects/kanooniastra/kanoon2.webp",
      "/assets/projects/kanooniastra/kanoon3.webp",
      "/assets/projects/kanooniastra/kanoon4.webp",
      "/assets/projects/kanooniastra/kanoon5.webp",
    ],
    features: [
      "Attorney profile pages with practice-area filtering",
      "Case study / results showcase",
      "Contact and consultation request forms",
      "SEO-friendly page structure for local search visibility",
    ],
    process: [
      {
        title: "Content structure",
        description:
          "Mapped out practice areas, attorney bios, and case studies into a content model that's easy for the firm to keep updated.",
      },
      {
        title: "Design & build",
        description:
          "Implemented the site in React/Next.js with server-side rendering for fast, SEO-friendly page loads.",
      },
      {
        title: "Lead capture",
        description:
          "Built a Node.js backend to handle consultation request submissions and route them to the firm's inbox.",
      },
      {
        title: "Polish",
        description:
          "Refined typography, spacing, and responsive behaviour with Tailwind CSS to keep the tone professional across every screen size.",
      },
    ],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    slug: "school-management-system",
    name: "School Management System",
    description:
      "A comprehensive platform for managing school operations, including student records, attendance, and academic performance.",
    overview:
      "A full administrative platform for schools to manage student records, attendance, and academic performance in one place, replacing a patchwork of spreadsheets with a single system of record.",
    role: "Full-Stack Developer",
    href: "",
    image: "/assets/projects/academics/aca1.webp",
    bgImage: "/assets/backgrounds/map.webp",
    gallery: [
      "/assets/projects/academics/aca2.webp",
      "/assets/projects/academics/aca3.webp",
      "/assets/projects/academics/aca4.webp",
      "/assets/projects/academics/aca5.webp",
      "/assets/projects/academics/aca6.webp",
      "/assets/projects/academics/aca7.webp",
      "/assets/projects/academics/aca8.webp",
      "/assets/projects/academics/aca9.webp",
    ],
    features: [
      "Student record management with attendance tracking",
      "Gradebook and academic performance reporting",
      "Role-based access for admins, teachers, and staff",
      "Printable report cards and attendance summaries",
    ],
    process: [
      {
        title: "Requirements",
        description:
          "Sat down with school administrative staff to understand existing paper/spreadsheet workflows before designing the schema.",
      },
      {
        title: "Backend",
        description:
          "Built the core system in PHP with CodeIgniter, backed by a MySQL database modeling students, classes, attendance, and grades.",
      },
      {
        title: "Interface",
        description:
          "Built admin and teacher-facing screens with Bootstrap and custom CSS, prioritizing fast data entry over flashy visuals.",
      },
      {
        title: "Rollout",
        description:
          "Iterated with real staff feedback during a pilot term to fix workflow friction before full rollout.",
      },
    ],
    frameworks: [
      { id: 1, name: "PHP" },
      { id: 2, name: "CodeIgniter" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "Bootstrap" },
      { id: 5, name: "Custom CSS" },
    ],
  },
  {
    id: 4,
    slug: "inventory-management-system",
    name: "Inventory Management System",
    description:
      "A web application for tracking and managing inventory levels, orders, and suppliers",
    overview:
      "A web application for tracking stock levels, purchase orders, and suppliers, giving the business real-time visibility into inventory instead of relying on manual counts.",
    role: "Full-Stack Developer",
    href: "",
    image: "/assets/projects/inventory/invent1.webp",
    bgImage: "/assets/backgrounds/poster.webp",
    gallery: [
      "/assets/projects/inventory/invent2.webp",
      "/assets/projects/inventory/invent3.webp",
      "/assets/projects/inventory/invent4.webp",
      "/assets/projects/inventory/invent5.webp",
      "/assets/projects/inventory/invent6.webp",
    ],
    features: [
      "Real-time stock level tracking across warehouses",
      "Purchase order and supplier management",
      "Low-stock alerts and reorder suggestions",
      "Reporting on stock movement over time",
    ],
    process: [
      {
        title: "Data modeling",
        description:
          "Designed a MySQL schema covering products, warehouses, suppliers, and stock movements as the single source of truth.",
      },
      {
        title: "Backend",
        description:
          "Built the API layer in Laravel to keep business rules (reorder thresholds, supplier linking) enforced server-side.",
      },
      {
        title: "Frontend",
        description:
          "Built a reactive Vue.js interface styled with SCSS so stock changes reflect immediately without manual page refreshes.",
      },
      {
        title: "Reliability",
        description:
          "Added alerting for low-stock thresholds so reordering happens before items run out, not after.",
      },
    ],
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    slug: "excel-to-json-converter",
    name: "Excel to JSON Converter",
    description:
      "A simple web application to convert Excel files (.xlsx, .xls) to JSON and JSON data to Excel, built with Next.js, React, and Tailwind CSS.",
    overview:
      "A focused utility app that converts Excel files (.xlsx, .xls) to JSON and back, built for developers and analysts who need a fast, no-signup way to move data between the two formats.",
    role: "Full-Stack Developer",
    href: "",
    image: "/assets/projects/exceltojson/excel1.webp",
    bgImage: "/assets/backgrounds/table.webp",
    gallery: [
      "/assets/projects/exceltojson/excel2.webp",
      "/assets/projects/exceltojson/excel3.webp",
    ],
    features: [
      "Drag-and-drop Excel upload with instant JSON preview",
      "Reverse conversion from JSON back to Excel",
      "Client-side parsing for speed and data privacy",
      "Copy or download the converted output in one click",
    ],
    process: [
      {
        title: "Scope",
        description:
          "Kept the tool deliberately single-purpose: paste or drop a file, get a clean conversion, no accounts or clutter.",
      },
      {
        title: "Parsing",
        description:
          "Handled Excel parsing entirely client-side so files never leave the user's browser.",
      },
      {
        title: "Interface",
        description:
          "Built the UI in React/Next.js with Radix UI primitives and Tailwind CSS for an accessible, minimal experience.",
      },
      {
        title: "Edge cases",
        description:
          "Tested against multi-sheet workbooks and malformed JSON to make error messages actually useful.",
      },
    ],
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Excel parsing" },
      { id: 4, name: "Radix UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/sagar_adhikari57/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sagar-adhikari-619b42218/" },
  { name: "GitHub", href: "https://github.com/sagar-droid" },
];
