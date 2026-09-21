export const site = {
  name: "Prince Bavishi",
  role: "Full Stack Engineer",
  location: "Ahmedabad, Gujarat, India",
  email: "bavishiprince90@gmail.com",
  phone: "+91 90160 91157",
  phoneHref: "tel:+919016091157",
  url: "https://prince-bavishi.netlify.app",
  /* Drop the PDF at public/prince-bavishi-resume.pdf to activate this. */
  resume: "/Prince_Bavishi_cv.pdf",
  github: "https://github.com/PrinceDev90",
  linkedin: "https://www.linkedin.com/in/prince-bavishi-10x/",
  twitter: "https://x.com/PrinceBavishi10",
  availability: "I'm really interested to meet you and discuss new projects!",
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
    role: "Freelance Software Developer",
    focus: "Custom Software Solutions",
    company: "Self-Employed",
    location: "Remote",
    period: "Present",
    summary:
      "Right now I am freelance and helping businesses to provide digital solutions by custom software.",
    points: [
      {
        label: "Current Project",
        text: "Currently building Factory OS, a full-stack manufacturing operations platform covering the complete business lifecycle from CRM and quotations to dispatch.",
      },
      {
        label: "Client Solutions",
        text: "Delivering tailored digital solutions spanning frontend interfaces, backend APIs, and database architecture.",
      },
    ],
    stack: ["Angular", "React", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
  },
  {
    index: "02",
    role: "Software Developer",
    focus: "Angular · Full Stack",
    company: "Softrefine Technology Pvt. Ltd.",
    location: "Rajkot, India",
    period: "May 2025 — Present",
    summary:
      "Develop and maintain a production-grade enterprise SaaS application using Angular, TypeScript, JavaScript, HTML5, and SCSS within an established architecture and complex business workflows.",
    points: [
      {
        label: "Feature Ownership",
        text: "Own frontend development tasks end-to-end, from understanding requirements and implementing UI/UX to building and integrating reusable components, connecting REST APIs, handling edge cases, debugging, testing, and delivering production-ready features.",
      },
      {
        label: "Integration & Stability",
        text: "Implement features and enhancements across multiple product modules by integrating REST APIs and working with shared components, services, and business logic while maintaining application stability.",
      },
      {
        label: "Debugging & QA",
        text: "Investigate and resolve production and QA-reported defects by tracing issues across the UI, API responses, asynchronous flows, and business logic; perform functional, regression, edge-case, and API testing using Postman.",
      },
      {
        label: "Agile Workflow",
        text: "Work with Azure DevOps and Agile/Scrum workflows for ticket management, sprint tasks, bug tracking, acceptance criteria, and development-to-testing handoffs, collaborating with developers, QA, and product stakeholders through release.",
      },
    ],
    stack: ["Angular", "TypeScript", "JavaScript", "HTML5", "SCSS", "Azure DevOps"],
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
    kind: "Manufacturing & Distribution Management Platform",
    year: "2026",
    summary:
      "Designing and developing a full-stack manufacturing operations platform covering the complete business lifecycle from CRM and quotations to sales orders, inventory, procurement, production, and dispatch.",
    contribution:
      "Architecting interconnected business workflows such as Quotation → Sales Order → Inventory Analysis → Purchase/Production → Dispatch, with role-based access and module-specific responsibilities.",
    stack: ["PostgreSQL", "Express.js", "Angular", "Node.js", "PrimeNG", "RxJS", "Signals"],
    featured: true,
    category: "fullstack",
  },
  {
    slug: "ats",
    index: "02",
    title: "AI-Powered Enterprise Applicant Tracking System (ATS)",
    kind: "Applicant Tracking System",
    year: "2025 — Present",
    summary:
      "An AI-assisted recruitment and applicant tracking platform used by hiring teams to run a role from requisition through offer. An established product I joined and now work on day to day.",
    contribution:
      "Building new features, extending existing ones and fixing production issues.",
    stack: ["Angular", "TypeScript", "Angular Material", "RxJS", "REST APIs", "Azure DevOps"],
    confidential: true,
    featured: true,
    category: "product",
  },
  {
    slug: "outreach-pro",
    index: "03",
    title: "OutreachPro",
    kind: "Cold Outreach Platform",
    year: "2025",
    summary:
      "A cold outreach platform that finds leads, enriches them, sends templated email, sequences follow-ups and tracks replies in one place.",
    contribution:
      "Built alone, architecture through delivery — ten lazy-loaded Angular modules over a shared component library.",
    stack: ["Angular", "TypeScript", "Angular Material", "SCSS", "RxJS"],
    repo: "https://github.com/PrinceDev90/OutreachPro-frontend",
    featured: true,
    category: "angular",
  },
  {
    slug: "real-estate",
    index: "04",
    title: "Property Listing Platform",
    kind: "Real Estate Management Platform",
    year: "2025",
    summary:
      "Developed responsive React interfaces and RESTful APIs with Node.js and Express.js, integrating frontend workflows with MongoDB for persistent data management.",
    contribution: "Worked across frontend and backend layers to implement features, debug application issues, fix API/data-flow problems, and perform functional testing to ensure reliable application behaviour.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    featured: true,
    category: "fullstack",
  },
];
