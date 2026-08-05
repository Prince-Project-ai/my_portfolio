export const site = {
  name: "Prince Bavishi",
  role: "Full Stack Engineer",
  location: "Rajkot, Gujarat, India",
  email: "bavishiprince90@gmail.com",
  phone: "+91 90160 91157",
  phoneHref: "tel:+919016091157",
  url: "https://prince-bavishi.netlify.app",
  /* Drop the PDF at public/prince-bavishi-resume.pdf to activate this. */
  resume: "/Prince Bavishi CV.pdf",
  github: "https://github.com/PrinceDev90",
  linkedin: "https://www.linkedin.com/in/prince-bavishi-10x/",
  twitter: "https://x.com/PrinceBavishi10",
  availability: "Open to full stack engineering roles",
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
    role: "Software Developer",
    focus: "Angular · Full Stack",
    company: "Softrefine Technology Pvt. Ltd.",
    location: "Rajkot, India",
    period: "May 2025 — Present",
    summary:
      "Talent Recruit is an established AI-assisted applicant tracking system used by hiring teams. I joined the product team after it was already in production, and now lead three of its modules day to day.",
    points: [
      {
        label: "What I lead",
        text: "The Offer, Settings and Reports modules of an existing codebase — the platform and its core flows were already built when I joined.",
      },
      {
        label: "New features",
        text: "I build new features inside those modules against requirements from my manager and the product team, then take them through review and release.",
      },
      {
        label: "Production issues",
        text: "I investigate and fix live production issues, including defects QA didn't catch — working backwards from a user report to the root cause.",
      },
      {
        label: "Performance",
        text: "Traced redundant request chains in the Offer module and removed them, cutting network calls and improving response time by roughly 40%.",
      },
      {
        label: "Integration",
        text: "Integrated the Shine job platform API so postings and candidate inflow sync without manual handoff.",
      },
    ],
    stack: ["Angular", "TypeScript", "Angular Material", "RxJS", "REST APIs", "Azure DevOps"],
  },
  {
    index: "02",
    role: "Hardware & Software Support Assistant",
    focus: "IT Support · Networking",
    company: "College Computer Lab / Hardware Workshop",
    location: "Amreli, Gujarat",
    period: "2 Years",
    summary:
      "Provided comprehensive IT support for the college lab, including hardware repair, network maintenance, and OS administration for student systems.",
    points: [
      {
        label: "Hardware Support",
        text: "Diagnosed faults, replaced components, and performed routine maintenance on lab computers to minimize downtime.",
      },
      {
        label: "Networking",
        text: "Maintained localized network switches and LAN cabling, and rapidly addressed connectivity faults.",
      },
      {
        label: "System Admin",
        text: "Installed and configured Windows and Linux operating systems across lab systems, ensuring consistent environments.",
      },
      {
        label: "Asset Tracking",
        text: "Maintained records of equipment condition and usage to support informal IT asset tracking.",
      },
    ],
    stack: ["Hardware Repair", "Networking", "Linux", "Windows", "Asset Management"],
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
    note: "Angular first, daily",
    items: [
      { name: "Angular", core: true },
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "RxJS", core: true },
      { name: "Angular Material", core: true },
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
  {
    index: "05",
    group: "IT Support",
    note: "Systems & operations",
    items: [
      { name: "Hardware Troubleshooting", core: true },
      { name: "Linux Administration", core: true },
      { name: "Windows & macOS", core: true },
      { name: "Network Configuration", core: true },
      { name: "SAP ERP" },
      { name: "Tally ERP" },
      { name: "Software Deployment" },
      { name: "Asset Management" },
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
    slug: "talent-recruit",
    index: "01",
    title: "Talent Recruit",
    kind: "Applicant Tracking System",
    year: "2025 — Present",
    summary:
      "An AI-assisted recruitment and applicant tracking platform used by hiring teams to run a role from requisition through offer. An established product I joined and now work on day to day.",
    contribution:
      "Leading the Offer, Settings and Reports modules — building new features, extending existing ones and fixing production issues.",
    stack: ["Angular", "TypeScript", "Angular Material", "RxJS", "REST APIs", "Azure DevOps"],
    confidential: true,
    featured: true,
    category: "product",
  },
  {
    slug: "outreach-pro",
    index: "02",
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
    index: "03",
    title: "Property Listing Platform",
    kind: "Full stack platform",
    year: "2025",
    summary:
      "Property listings with search, enquiry and an admin surface. Express and MongoDB behind a React client, with JWT auth.",
    contribution: "Built alone, front to back — currently in progress.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "fullstack",
  },
];
