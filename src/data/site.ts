export const site = {
  name: "Prince Bavishi",
  role: "Full Stack Engineer",
  summary:
    "Full Stack Developer with 1.5+ years of experience building and maintaining production SaaS applications across MERN and MEAN stacks (React.js, Angular, Node.js, NestJS, TypeScript) with PostgreSQL and MongoDB. Experienced in CRM/ERP applications, RESTful APIs, JWT/RBAC and AI-assisted development.",
  location: "Amreli / Rajkot, Gujarat, India",
  email: "bavishiprince90@gmail.com",
  phone: "+91 90160 91157",
  phoneHref: "tel:+919016091157",
  url: "https://prince-bavishi.netlify.app",
  /* Drop the PDF at public/prince-bavishi-resume.pdf to activate this. */
  resume: "/CV_Prince_Bavishi_Nov_2026.pdf",
  resumes: [
    {
      role: "Full Stack Developer",
      subtitle: "MERN & MEAN · CRM/ERP · AI-Assisted",
      href: "/CV_Prince_Bavishi_Nov_2026.pdf",
      filename: "CV_Prince_Bavishi_Nov_2026.pdf",
    },
    {
      role: "Forward Deployed Engineer",
      subtitle: "Enterprise Solutions & Integration",
      href: "/Prince_Bavishi_cv_Forward_Deployed_Engineer.pdf",
      filename: "Prince_Bavishi_cv_Forward_Deployed_Engineer.pdf",
    },
  ],
  github: "https://github.com/PrinceDev90",
  linkedin: "https://www.linkedin.com/in/prince-bavishi-10x/",
  twitter: "https://x.com/PrinceBavishi10",
  availability: "Available for full-time engineering roles, high-impact contracts, and forward-deployed engagements.",
};

export const nav = [
  { label: "Work", href: "#work", index: "01" },
  { label: "Experience", href: "#experience", index: "02" },
  { label: "Stack", href: "#stack", index: "03" },
  { label: "Contact", href: "#contact", index: "04" },
];

export const experience = [
  {
    index: "01",
    role: "Full Stack Engineer",
    focus: "Production CRM & ERP · MERN & MEAN Stacks · AI-Assisted Dev",
    company: "World Annex Infotech",
    location: "Amreli, Gujarat, India",
    period: "Sep 2026 — Present",
    summary:
      "Developing and shipping new features for inventory and billing modules of a production CRM platform used by retailers, wholesalers, and manufacturers to manage sales, orders, and stock.",
    points: [
      {
        label: "Inventory & Billing Modules",
        text: "Develop and ship new features for the inventory and billing modules of a production CRM platform used by retailers, wholesalers and manufacturers to manage sales, orders and stock.",
      },
      {
        label: "Full-Stack SaaS Architecture",
        text: "Build and maintain full-stack features using TypeScript, React.js, Angular, Node.js and NestJS with RESTful APIs, backed by MongoDB and PostgreSQL databases.",
      },
      {
        label: "Reliability & AI Velocity",
        text: "Fix bugs and resolve production issues, and use AI-assisted development (Claude, OpenAI Codex, Google Antigravity) to speed up feature work, review code and test edge cases before release.",
      },
    ],
    stack: [
      "TypeScript",
      "React.js",
      "Angular",
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
      "AI-Assisted Dev",
    ],
  },
  {
    index: "02",
    role: "Software Developer",
    focus: "Angular · Enterprise Recruitment SaaS · Azure DevOps",
    company: "SoftRefine Technology Pvt. Ltd.",
    location: "Rajkot, Gujarat, India",
    period: "May 2025 — Sep 2026",
    summary:
      "Developed production Angular, TypeScript, and RxJS modules for an enterprise recruitment and ATS SaaS platform, integrating REST APIs and third-party platforms.",
    points: [
      {
        label: "Enterprise ATS Modules",
        text: "Developed production Angular, TypeScript and RxJS modules for an enterprise recruitment/ATS SaaS platform, integrating REST APIs and third-party platforms.",
      },
      {
        label: "Reusable Architecture & UI",
        text: "Built reusable shared services and UI components that kept business logic consistent across modules.",
      },
      {
        label: "QA Defect Triage & Agile Sprints",
        text: "Resolved QA and production defects using DevTools and Postman, delivering in Agile/Scrum sprints on Azure DevOps.",
      },
    ],
    stack: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "REST APIs",
      "Azure DevOps",
      "Postman",
      "DevTools",
    ],
  },
];

export type StackItem = { name: string; core?: boolean };

/** core: true = reach for it daily. Otherwise working familiarity. */
export const stack: {
  index: string;
  group: string;
  note: string;
  items: StackItem[];
}[] = [
  {
    index: "01",
    group: "Frontend",
    note: "Angular & React, daily",
    items: [
      { name: "Angular (16+)", core: true },
      { name: "React.js", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "Redux", core: true },
      { name: "RxJS", core: true },
      { name: "Signals", core: true },
      { name: "Angular Material", core: true },
      { name: "PrimeNG", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "SCSS", core: true },
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
    ],
  },
  {
    index: "02",
    group: "Backend",
    note: "APIs, auth & services",
    items: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "NestJS", core: true },
      { name: "RESTful APIs", core: true },
      { name: "JWT Auth", core: true },
      { name: "RBAC", core: true },
      { name: "Core Java" },
    ],
  },
  {
    index: "03",
    group: "Data",
    note: "Relational & NoSQL",
    items: [
      { name: "MongoDB", core: true },
      { name: "PostgreSQL", core: true },
      { name: "MySQL", core: true },
      { name: "Supabase", core: true },
      { name: "SQL", core: true },
      { name: "Schema Design", core: true },
    ],
  },
  {
    index: "04",
    group: "Cloud & AI",
    note: "Pipelines & acceleration",
    items: [
      { name: "AI-Assisted Dev", core: true },
      { name: "Prompt Engineering", core: true },
      { name: "LLM Integration", core: true },
      { name: "Azure DevOps", core: true },
      { name: "Git & GitHub", core: true },
      { name: "Docker", core: true },
      { name: "Postman", core: true },
      { name: "CI/CD", core: true },
      { name: "AWS" },
      { name: "Agile/Scrum", core: true },
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Dr. Babasaheb Ambedkar Open University",
    period: "2025 — 2027 (Pursuing)",
    details:
      "Coursework: Data Structures, Algorithms, Operating Systems, DBMS, Software Engineering, OOP, Computer Networks",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Saurashtra University",
    period: "2022 — 2025",
    details: "CGPA: 8.36 ⋄ Awarded Academic Excellence Award (2024)",
  },
];

export const achievements = [
  {
    title: "Production Issue Resolution",
    description:
      "Resolved complex production issues that remained unsolved despite QA testing and senior engineering efforts.",
    tag: "Production Impact",
  },
  {
    title: "Portfolio SEO & Top Google Ranking",
    description:
      "Independently implemented SEO for my portfolio website, reaching a top Google ranking with 75+ clicks and 150+ impressions.",
    tag: "Search Ranking",
  },
  {
    title: "Academic Excellence Award (2024)",
    description:
      "Awarded for securing a top university rank in Bachelor of Computer Applications (BCA, CGPA: 8.36).",
    tag: "Top University Rank",
  },
];

export const certifications = [
  { name: "CCC", issuer: "NIELIT", year: "2022" },
  { name: "Tally ERP", issuer: "Skill Education Hub", year: "2022" },
];

export const hobbies = ["Playing Chess", "Coding", "Cricket"];

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  /** Short line clarifying what my involvement actually was. */
  contribution: string;
  stack: string[];
  repo?: string;
  live?: string;
  confidential?: boolean;
  featured?: boolean;
  category: "product" | "angular" | "fullstack";
};

export const projects: Project[] = [
  {
    slug: "ai-hiring-platform",
    index: "01",
    title: "AI Hiring & Candidate Evaluation Platform",
    kind: "Enterprise Recruitment SaaS — SoftRefine Technology",
    year: "2025 — 2026",
    summary:
      "Enterprise recruitment and candidate evaluation SaaS platform streamlining technical assessments, automated hiring workflows, and candidate pipeline tracking.",
    contribution:
      "Developed responsive recruiter dashboards and candidate evaluation workflows using Angular and REST API integrations; engineered reusable frontend modules and scalable component architecture; contributed to backend workflow handling and API integrations using Node.js and Express.js.",
    stack: [
      "Angular",
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Git",
    ],
    confidential: true,
    featured: true,
    category: "product",
  },
  {
    slug: "factory-os",
    index: "02",
    title: "Factory OS",
    kind: "Manufacturing & Distribution ERP/CRM",
    year: "2026",
    summary:
      "Full-scale manufacturing operations and distribution platform linking CRM, quotations, sales orders, inventory ledger reconciliation, procurement, production, and dispatch into a unified operational system.",
    contribution:
      "Built a full-stack platform linking CRM, quotations, sales orders, inventory, procurement, production and dispatch, with JWT/RBAC and module-level permissions using Angular, PrimeNG, RxJS, Signals, Node.js, and PostgreSQL.",
    stack: [
      "Angular",
      "PrimeNG",
      "RxJS",
      "Signals",
      "Node.js",
      "PostgreSQL",
      "JWT/RBAC",
    ],
    featured: true,
    category: "fullstack",
  },
  {
    slug: "real-estate",
    index: "03",
    title: "Real Estate Management Platform (MERN)",
    kind: "Full-Stack Property Management Platform",
    year: "2025",
    summary:
      "Comprehensive multi-tenant real estate management platform featuring dedicated role-based workflows for customers, property sellers, real estate agents, and administrators.",
    contribution:
      "Developed role-based workflows for customers, sellers, agents and admins with responsive React UI and REST APIs on MongoDB with Tailwind CSS.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    featured: true,
    category: "fullstack",
  },
  {
    slug: "outreach-pro",
    index: "04",
    title: "OutreachPro",
    kind: "Automated Cold Outreach & Lead Engine",
    year: "2025",
    summary:
      "High-deliverability sales engagement platform that discovers leads, enriches contact data, schedules personalized email sequences, and tracks engagement analytics in real time.",
    contribution:
      "Architected and shipped from scratch: structured 10 lazy-loaded Angular feature modules around a shared component library and stateful RxJS event bus for seamless lead workflows.",
    stack: ["Angular", "TypeScript", "Angular Material", "SCSS", "RxJS"],
    repo: "https://github.com/PrinceDev90/OutreachPro-frontend",
    featured: true,
    category: "angular",
  },
];
