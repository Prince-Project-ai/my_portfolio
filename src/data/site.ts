export const site = {
  name: "Prince Bavishi",
  role: "Full Stack Engineer",
  location: "Ahmedabad, Gujarat, India",
  email: "bavishiprince90@gmail.com",
  phone: "+91 90160 91157",
  phoneHref: "tel:+919016091157",
  url: "https://prince-bavishi.netlify.app",
  /* Drop the PDF at public/prince-bavishi-resume.pdf to activate this. */
  resume: "/Prince_Bavishi_AI_FullStack.pdf",
  resumes: [
    {
      role: "Full Stack Developer",
      subtitle: "AI & Full Stack Systems",
      href: "/Prince_Bavishi_AI_FullStack.pdf",
      filename: "Prince_Bavishi_AI_FullStack.pdf",
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
  { label: "About", href: "#about", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export const experience = [
  {
    index: "01",
    role: "Full Stack Engineer & Consultant",
    focus: "Enterprise Systems · ERP Architecture",
    company: "Self-Employed / Freelance",
    location: "Remote",
    period: "Present",
    summary:
      "Architecting and shipping end-to-end custom software solutions for growing businesses, focusing on operational workflow automation, scalable database schemas, and resilient client-side architecture.",
    points: [
      {
        label: "Flagship Platform",
        text: "Architecting Factory OS, a full-lifecycle manufacturing ERP platform integrating CRM, dynamic quotation generation, sales pipeline tracking, inventory reconciliation, and dispatch automation.",
      },
      {
        label: "Full-Stack Execution",
        text: "Delivering complete production solutions: normalized PostgreSQL data models, transactional Express/Node APIs, and high-performance reactive frontends using Angular 17+ and PrimeNG.",
      },
    ],
    stack: ["Angular", "React", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  },
  {
    index: "02",
    role: "Software Developer",
    focus: "Angular · Enterprise SaaS",
    company: "Softrefine Technology Pvt. Ltd.",
    location: "Rajkot, India",
    period: "May 2025 — Present",
    summary:
      "Core contributor to a multi-tenant enterprise SaaS platform, engineering complex workflow engines, integrating real-time REST services, and ensuring high system reliability across production releases.",
    points: [
      {
        label: "Feature Ownership",
        text: "Engineered critical hiring pipeline and workflow modules end-to-end, leveraging Angular, RxJS state management, and strict TypeScript architectures to guarantee rock-solid data reactivity.",
      },
      {
        label: "API & Performance",
        text: "Integrated REST APIs across high-traffic product modules, optimizing complex data grids, eliminating client-side bottlenecks, and maintaining state stability across asynchronous flows.",
      },
      {
        label: "Production Reliability",
        text: "Triaged and resolved complex production and QA defects; conducted comprehensive functional, regression, and API testing using Postman to safeguard release velocity.",
      },
      {
        label: "Agile & Delivery",
        text: "Collaborated in an Azure DevOps Scrum environment, driving features through sprint planning, acceptance criteria validation, code reviews, and release deployment.",
      },
    ],
    stack: ["Angular", "TypeScript", "JavaScript", "RxJS", "SCSS", "Azure DevOps"],
  }
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
    note: "Angular first, daily",
    items: [
      { name: "Angular", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "RxJS", core: true },
      { name: "Angular Material", core: true },
      { name: "PrimeNG", core: true },
      { name: "React.js", core: true },
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
      { name: "SCSS", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "Bootstrap 5" },
    ],
  },
  {
    index: "02",
    group: "Backend",
    note: "APIs and services",
    items: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "REST API design", core: true },
      { name: "Core Java", core: true },
      { name: "JWT Auth", core: true },
      { name: "NestJS" },
      { name: "Hibernate" },
      { name: "Java Servlet" },
    ],
  },
  {
    index: "03",
    group: "Data",
    note: "Modelling and queries",
    items: [
      { name: "SQL", core: true },
      { name: "MySQL", core: true },
      { name: "MongoDB", core: true },
      { name: "Schema design", core: true },
      { name: "PostgreSQL" },
    ],
  },
  {
    index: "04",
    group: "Platform",
    note: "Ship and collaborate",
    items: [
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "Azure DevOps", core: true },
      { name: "Postman", core: true },
      { name: "VS Code", core: true },
      { name: "Netlify" },
      { name: "Docker" },
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Application",
    school: "Babasaheb Ambedkar Open University, Rajkot",
    period: "2025 — 2027",
  },
  {
    degree: "Bachelor of Computer Application",
    school: "Saurashtra University, Rajkot",
    period: "2022 — 2025",
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
    slug: "factory-os",
    index: "01",
    title: "Factory OS",
    kind: "Manufacturing & Distribution ERP Platform",
    year: "2026",
    summary:
      "Enterprise-grade manufacturing operations platform (ERP/MRP) unifying CRM, dynamic quotation generation, inventory ledger reconciliation, procurement, and dispatch tracking into a single operational system.",
    contribution:
      "Sole full-stack architect: modeled normalized PostgreSQL schemas, developed transactional REST APIs in Express/Node, and engineered the reactive Angular 17+ client using PrimeNG and fine-grained Signals.",
    stack: ["PostgreSQL", "Express.js", "Angular", "Node.js", "PrimeNG", "RxJS", "Signals"],
    featured: true,
    category: "fullstack",
  },
  {
    slug: "ats",
    index: "02",
    title: "AI-Powered Enterprise Applicant Tracking System (ATS)",
    kind: "Enterprise Recruitment SaaS",
    year: "2025 — Present",
    summary:
      "High-scale recruitment management software powering candidate sourcing, automated resume parsing, interview scheduling, and hiring workflows for enterprise organizations.",
    contribution:
      "Engineered core candidate pipeline modules, integrated complex backend endpoints, authored reusable UI component libraries, and optimized client-side rendering across high-volume hiring pipelines.",
    stack: ["Angular", "TypeScript", "Angular Material", "RxJS", "REST APIs", "Azure DevOps"],
    confidential: true,
    featured: true,
    category: "product",
  },
  {
    slug: "outreach-pro",
    index: "03",
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
  {
    slug: "real-estate",
    index: "04",
    title: "Property Listing Platform",
    kind: "Real Estate Marketplace Platform",
    year: "2025",
    summary:
      "Full-stack property marketplace featuring dynamic multi-criteria search, agent portfolio dashboards, interactive property tours, and secure lead inquiry pipelines.",
    contribution:
      "Developed scalable REST APIs with Node.js and Express, designed indexed MongoDB document schemas, and implemented a responsive React frontend with efficient client-side filtering.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    featured: true,
    category: "fullstack",
  },
];
