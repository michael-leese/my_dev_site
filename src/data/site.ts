import type { ExperienceEntry, Project, Skill, SocialLink, StackGroup } from "@/types/site";

/**
 * Core profile data shown in the hero section.
 */
export const profile: {
  name: string;
  role: string;
  location: string;
  introduction: string;
  summary: string;
} = {
  name: "Michael Leese",
  role: "Full Stack Developer",
  location: "Sicily, Europe (GMT+1)",
  introduction:
    "I’m a full-stack developer with hands-on experience delivering real projects.",
  summary:
    "I work across the stack, value maintainable code, and enjoy turning ideas into working applications.",
};

/**
 * Social and contact links displayed in the footer.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:michael-leese@outlook.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/michael-leese",
  },
  {
    label: "LinkedIn",
    href: "#",
    note: "Coming soon",
  },
];

/**
 * Highlighted stack groupings for quick scanning.
 */
export const stackGroups: StackGroup[] = [
  {
    title: "Core Stack",
    description: "Modern, production-ready web apps with strong typing and clear UI.",
    items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    description: "API design, data modeling, and pragmatic server-side delivery.",
    items: ["Python", "Django", "Django REST Framework", "Node.js"],
  },
  {
    title: "Platform",
    description: "Cloud, deployment, and developer tooling for reliable releases.",
    items: ["Supabase", "AWS (Cloud Practitioner)", "Git", "Postman"],
  },
];

/**
 * Professional experience timeline.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "SecureGRC Pro",
    role: "Freelance Full Stack Developer",
    location: "Australia (Remote)",
    dates: "Jan 2026 — Present",
    highlights: [
      { detail: "Full Stack Developer for an Australian start-up consultancy." },
      {
        detail:
          "Building SecureGRC Pro, a modular Governance, Risk, and Compliance platform.",
      },
      {
        detail:
          "Developing with Next.js 14, TypeScript, Tailwind CSS, and Supabase.",
      },
      {
        detail:
          "Contributing to architecture, feature delivery, and ongoing platform evolution.",
      },
    ],
  },
  {
    company: "Career Sabbatical",
    role: "Planned Sabbatical & Personal Development",
    location: "Sicily, Italy",
    dates: "Jun 2024 — Jan 2026",
    highlights: [
      {
        detail:
          "Took a planned sabbatical following redundancy to reset and refocus professionally.",
      },
      {
        detail:
          "Relocated to Sicily, purchased a property, and completed a full renovation independently.",
      },
      {
        detail:
          "Continued self-development through personal software projects and technical learning.",
      },
      {
        detail: "Returned to the industry refreshed and actively freelancing.",
      },
    ],
  },
  {
    company: "PwC",
    role: "Full Stack Developer",
    location: "London, UK (More London Office)",
    dates: "Aug 2020 — Jun 2024",
    highlights: [
      {
        detail:
          "Delivered enterprise web applications in Agile teams using Python (Django), React, APIs, and cloud services.",
      },
      {
        detail:
          "Part of a team involved in PwC’s initial corporate test launch utilising OpenAI technologies.",
      },
      {
        detail:
          "Contributed to a real-world AI-driven customer complaints system built with React.",
      },
      {
        detail:
          "Acted as lead developer supporting TAMHI on a voluntary basis alongside core duties.",
      },
    ],
  },
  {
    company: "Vuepoint Solutions Ltd",
    role: "Junior Software Developer",
    location: "UK",
    dates: "Jun 2019 — 2020",
    highlights: [
      {
        detail:
          "Worked across front end and back end using HTML, CSS, JavaScript, JQuery, ASP, and VB.NET / PL SQL.",
      },
      {
        detail:
          "Developed new functionality, carried out bug fixes, and supported production systems.",
      },
      {
        detail:
          "Used issue tracking and version control across multiple environments.",
      },
      {
        detail:
          "Maintained productivity while working independently during Covid-19 restrictions.",
      },
    ],
  },
  {
    company: "OWOW Innovations",
    role: "Software Developer",
    location: "UK",
    dates: "May 2019",
    highlights: [
      {
        detail:
          "Developed a proof-of-concept platform for locating lost children with autism.",
      },
      {
        detail: "Focused on UI/UX design and interactive front-end development.",
      },
      {
        detail:
          "Presented the solution at an autism conference on behalf of the company.",
      },
      {
        detail: "Delivered a working prototype within a 10-day deadline for a pitch.",
      },
    ],
  },
  {
    company: "The Big IoT Hack",
    role: "Front End Developer (Winning Team)",
    location: "Basingstoke, UK",
    dates: "May 2019",
    highlights: [
      {
        detail: "Built front-end landing and data pages for an IoT prototype.",
      },
      {
        detail: "Integrated Microsoft Azure Maps into the user interface.",
      },
      {
        detail: "Delivered a functional prototype within 48 hours.",
      },
      {
        detail: "Part of the overall winning team at the event.",
      },
    ],
  },
  {
    company: "Community & Volunteer Experience",
    role: "Committee Member / Technical Support",
    location: "UK",
    dates: "2019 — 2020",
    highlights: [
      { detail: "Committee member of Picket Piece Residents Association." },
      { detail: "Frontend support on community website with the creator." },
      {
        detail:
          "Initiated and led one of the largest Neighbourhood Watch schemes in Hampshire.",
      },
      { detail: "Coordinated volunteers and worked with local authorities." },
    ],
  },
];

/**
 * Portfolio projects with optional links and extra context.
 */
export const projects: Project[] = [
  {
    name: "SecureGRC Pro",
    summary:
      "A modular Governance, Risk & Compliance platform for an Australian consultancy.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase"],
    details: [
      "Designed modular workflows for compliance programs across different clients.",
      "Built scalable UI patterns for risk registers, policy mapping, and audits.",
      "Commercial project with private codebase.",
    ],
    isPrivate: true,
  },
  {
    name: "Enterprise Compliance Platform (PwC)",
    summary:
      "Confidential enterprise Django applications delivered within Agile teams.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Web Components",
      "REST APIs",
    ],
    details: [
      "Delivered internal tooling supporting compliance and governance workflows.",
      "Collaborated across teams to align technical and operational requirements.",
      "Shipped iterative improvements within enterprise-grade release cycles.",
    ],
  },
  {
    name: "CharityFund",
    summary:
      "Full-stack charity fundraising platform with authentication and backend workflows.",
    stack: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    details: [
      "Implemented user accounts, donation journeys, and admin reporting.",
      "Focused on clean UX for transparency and ease of use.",
    ],
  },
  {
    name: "ReciPys",
    summary: "A Flask-based recipe sharing web application.",
    stack: ["Python", "Flask", "HTML", "CSS"],
    details: [
      "Designed CRUD flows for recipes and user-generated content.",
      "Built lightweight templates with a focus on simplicity.",
    ],
  },
  {
    name: "Galactic Gunners",
    summary: "A browser-based Space Invaders-style game.",
    stack: ["JavaScript", "Phaser 3"],
    liveUrl: "https://michael-leese.github.io/GallacticGunners/",
    details: [
      "Delivered a retro-inspired game with responsive input controls.",
      "Optimised animation loops for smooth gameplay.",
    ],
  },
];

/**
 * Skills for the filterable list.
 */
export const skills: Skill[] = [
  { name: "Next.js 14", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Django REST Framework", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs / JSON", category: "Backend" },
  { name: "Supabase", category: "Platform" },
  { name: "AWS (Cloud Practitioner)", category: "Cloud" },
  { name: "OpenAI (enterprise pilot)", category: "Data" },
  { name: "Git", category: "Tooling" },
  { name: "Postman", category: "Tooling" },
];
