import React, { useState } from 'react';
import { ExternalLink, Github, Clock, AlertCircle, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import todoMain from "../assets/project-imag/todo_main.png";
import todoModel from "../assets/project-imag/todo_model.png";
import cart1 from "../assets/project-imag/cart_1.png";
import cart2 from "../assets/project-imag/cart_2.png";
import onlinePic from "../assets/project-imag/online-pic1.png";
import passGeneLight from "../assets/project-imag/pass-gene-light.png";
import passGeDark from "../assets/project-imag/pass-ge-dark.png";

// JS Project Images
import CartImage from "../assets/js-image/cart-app-js.png";
import CurrencyImage from "../assets/js-image/curruncy-convertor.png";
import FanImage from "../assets/js-image/fan-game.png";
import RockPaperImage from "../assets/js-image/stone-paper.png";
import TicTacToeImage from "../assets/js-image/tic-tio-tac.png";
import WeatherImage from "../assets/js-image/weather.png";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('selected');

  const projects = [
    // === SELECTED (Company Project) ===
    {
      id: 100,
      name: "Talent Recruit (ATS Platform)",
      images: [],
      description: [
        "AI-powered end-to-end recruitment and Applicant Tracking System (ATS)",
        "Managed Offer Module, Settings Module, and Reports Module",
        "Integrated Shine Job Platform API for seamless job posting",
        "Optimized Offer Module performance by ~40% through API call reduction",
        "Resolved complex production issues missed by QA testing",
      ],
      tags: ["Angular", "TypeScript", "Angular Material", "REST APIs", "Azure DevOps"],
      duration: "May 2025 – Present",
      githubLink: null,
      liveLink: null,
      category: "selected",
      isCompanyProject: true,
    },

    // === ANGULAR PROJECTS ===
    {
      id: 50,
      name: "OutreachPro — Cold Email Outreach Platform",
      images: [],
      description: [
        "Full-featured cold email outreach platform with 10+ Angular modules",
        "Custom Material theme with dark/light mode, lazy-loaded routing",
        "Lead Finder, Contact Portal, Email Template Builder, Campaign Management",
        "Follow-up Sequences builder with visual step editor",
        "Reply Tracker with open/click/reply status per lead",
        "Reusable shared component library (data-table, stat-card, badges, dialogs)",
      ],
      tags: ["Angular", "Angular Material", "TypeScript", "SCSS", "Lazy Loading"],
      duration: "Ongoing",
      githubLink: "https://github.com/PrinceDev90/OutreachPro-frontend",
      liveLink: null,
      category: "angular",
    },
    {
      id: 51,
      name: "Drag & Drop Component Builder",
      images: [],
      description: [
        "Drag and drop Angular components like textbox, timer, image, and select",
        "Dynamic component rendering with configurable properties",
        "Built a visual form/page builder interface",
      ],
      tags: ["Angular", "CDK Drag & Drop", "TypeScript", "Dynamic Components"],
      duration: "Practice Project",
      githubLink: null,
      liveLink: "https://prince-bavishi-ng-test-13.netlify.app/",
      category: "angular",
    },
    {
      id: 52,
      name: "Organization Tree Viewer",
      images: [],
      description: [
        "Interactive organization hierarchy tree structure",
        "Expandable/collapsible nodes with employee details",
        "Recursive component rendering for nested data",
      ],
      tags: ["Angular", "TypeScript", "Tree Structure", "Recursive Components"],
      duration: "Practice Project",
      githubLink: null,
      liveLink: "https://prince-bavishi-ng-test-11.netlify.app/",
      category: "angular",
    },
    {
      id: 53,
      name: "Permission-Based Dashboard",
      images: [],
      description: [
        "Dashboard with role-based access control for modules",
        "Permission-based UI rendering and route guards",
        "Dynamic module visibility based on user roles",
      ],
      tags: ["Angular", "TypeScript", "RBAC", "Auth Guards"],
      duration: "Practice Project",
      githubLink: null,
      liveLink: "https://prince-bavishi-ng-test-12.netlify.app/permissions",
      category: "angular",
    },

    // === JAVASCRIPT TESTS ===
    {
      id: 30,
      name: "DOM Manipulation & Events",
      images: [],
      description: [
        "Deep practice of DOM manipulation and event handling",
        "Built interactive UI components from scratch with vanilla JS",
      ],
      tags: ["JavaScript", "DOM", "Event Handling"],
      duration: "9 hours",
      githubLink: "https://github.com/Softrefine-Internship/js-1-PrinceDev90",
      liveLink: null,
      category: "javascript",
    },
    {
      id: 31,
      name: "Async & API Integration",
      images: [],
      description: [
        "Practiced async JavaScript patterns (Promises, async/await)",
        "Fetched and displayed data from external APIs",
      ],
      tags: ["JavaScript", "Async/Await", "API"],
      duration: "6 hours",
      githubLink: null,
      liveLink: "https://prince-bavishi-js-test-2.netlify.app/",
      category: "javascript",
    },
    {
      id: 32,
      name: "Array Methods & Functional JS",
      images: [],
      description: [
        "Practiced higher-order functions (map, filter, reduce)",
        "Functional programming patterns in JavaScript",
      ],
      tags: ["JavaScript", "Functional Programming", "Array Methods"],
      duration: "6:04 hours",
      githubLink: "https://github.com/Softrefine-Internship/js-3-PrinceDev90",
      liveLink: null,
      category: "javascript",
    },
    {
      id: 33,
      name: "OOP & Design Patterns",
      images: [],
      description: [
        "Object-Oriented Programming patterns in JavaScript",
        "Classes, prototypes, and design pattern implementations",
      ],
      tags: ["JavaScript", "OOP", "Design Patterns"],
      duration: "8:30 hours",
      githubLink: null,
      liveLink: "https://prince-bavishi-js-test-4.netlify.app/",
      category: "javascript",
    },
    {
      id: 34,
      name: "ES6+ Features",
      images: [],
      description: [
        "Practiced modern ES6+ features (destructuring, spread, modules)",
        "Template literals, optional chaining, and nullish coalescing",
      ],
      tags: ["JavaScript", "ES6+", "Modules"],
      duration: "1:54 hours",
      githubLink: "https://github.com/Softrefine-Internship/js-5-PrinceDev90",
      liveLink: null,
      category: "javascript",
    },
    {
      id: 35,
      name: "Error Handling & Debugging",
      images: [],
      description: [
        "Error handling patterns (try/catch, custom errors)",
        "Debugging techniques and best practices",
      ],
      tags: ["JavaScript", "Error Handling", "Debugging"],
      duration: "1:30 hours",
      githubLink: "https://github.com/Softrefine-Internship/js-6-PrinceDev90",
      liveLink: null,
      category: "javascript",
    },
    {
      id: 36,
      name: "Advanced DOM & Animations",
      images: [],
      description: [
        "Complex DOM operations and CSS animations via JavaScript",
        "Intersection Observer, MutationObserver patterns",
      ],
      tags: ["JavaScript", "DOM", "Animations"],
      duration: "6:30 hours",
      githubLink: null,
      liveLink: "https://bavishi-prince-js-7.netlify.app/",
      category: "javascript",
    },
    {
      id: 37,
      name: "Weather App",
      images: [WeatherImage],
      description: [
        "Fetch weather data using OpenWeatherMap API",
        "Display temperature, humidity, and weather conditions",
      ],
      tags: ["JavaScript", "API", "Responsive Design"],
      duration: "1 day",
      githubLink: "https://github.com/PrinceDev90/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/weather-app-main/",
      category: "javascript",
    },
    {
      id: 38,
      name: "Currency Converter",
      images: [CurrencyImage],
      description: [
        "Real-time currency conversion using exchange rates API",
        "Dropdown selection for any currency pair",
      ],
      tags: ["JavaScript", "API", "DOM"],
      duration: "1 day",
      githubLink: "https://github.com/PrinceDev90/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/currency%20app/index.html",
      category: "javascript",
    },

    // === REACT PROJECTS ===
    {
      id: 1,
      name: "To-Do App",
      images: [todoMain, todoModel],
      description: [
        "Interactive task management with add, edit, and delete",
        "Task categorization into To Do, Doing, and Done columns",
        "Local storage persistence with dark/light mode",
      ],
      tags: ["React", "Tailwind CSS", "Context API"],
      duration: "2 days",
      githubLink: "https://github.com/Prince-Project-ai/REACT_PROJECTS",
      liveLink: "https://react-project-prince.netlify.app/",
      category: "react",
    },
    {
      id: 2,
      name: "Add To Cart",
      images: [cart1, cart2],
      description: [
        "Product listing with add to cart functionality",
        "Shopping cart with quantity adjustment",
        "State management using React hooks",
      ],
      tags: ["React", "Tailwind CSS", "Context API"],
      duration: "2 days",
      githubLink: "https://github.com/Prince-Project-ai/REACT_PROJECTS",
      liveLink: "https://react-project-prince.netlify.app/",
      category: "react",
    },
    {
      id: 3,
      name: "Online Picture Store",
      images: [onlinePic],
      description: [
        "Image search using Unsplash API",
        "Infinite scroll for loading more images",
        "Download functionality with responsive grid layout",
      ],
      tags: ["React", "Unsplash API", "Infinite Scroll"],
      duration: "2 days",
      githubLink: "https://github.com/Prince-Project-ai/REACT_PROJECTS",
      liveLink: "https://react-project-prince.netlify.app/",
      category: "react",
    },
    {
      id: 4,
      name: "Password Generator",
      images: [passGeneLight, passGeDark],
      description: [
        "Customizable password generation with length control",
        "Include numbers, symbols, uppercase options",
        "Copy to clipboard with dark/light mode",
      ],
      tags: ["React", "Tailwind CSS", "Custom Hooks"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/REACT_PROJECTS",
      liveLink: "https://react-project-prince.netlify.app/",
      category: "react",
    },

    // === FULL STACK ===
    {
      id: 11,
      name: "Online Real Estate Platform",
      images: [],
      description: [
        "Full-featured property listing and booking platform",
        "Built with MERN stack (MongoDB, Express, React, Node)",
        "Admin panel, authentication, and search features",
      ],
      tags: ["MERN", "MongoDB", "Node.js", "React", "Express"],
      duration: "Work in Progress",
      githubLink: "#",
      liveLink: "#",
      category: "fullstack",
      comingSoon: true,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { key: 'selected', label: 'Selected' },
    { key: 'angular', label: 'Angular' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'react', label: 'React' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'all', label: 'All' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.8 }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section id="projects" className="relative w-full py-20 px-4 overflow-hidden bg-transparent">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-0 sm:px-4 z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-primary text-sm font-medium mb-4">
            <Github size={16} className="mr-2" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            My Recent <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl text-center">
            From company products to personal practice — a showcase of real-world solutions I've built.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === key
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-dark-gray border border-border-design text-gray-300 hover:bg-gray-700 hover:border-blue-500 group'
                }`}
            >
              {label}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur" />
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeFilter}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="group relative bg-dark-gray border border-border-design rounded-xl overflow-hidden flex flex-col"
              >
                {/* Image / Placeholder */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gray-700 w-full flex items-center justify-center">
                    {project.images?.length ? (
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${project.comingSoon ? 'opacity-40' : ''}`}
                      />
                    ) : project.isCompanyProject ? (
                      <div className="flex flex-col items-center gap-2 text-gray-400">
                        <Briefcase size={32} className="text-primary" />
                        <span className="text-xs">Company Project</span>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">Preview Coming Soon</span>
                    )}
                    {project.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <div className="bg-black/60 px-4 py-2 rounded-lg border border-blue-500/30 flex items-center">
                          <Clock size={18} className="text-blue-400 mr-2 animate-pulse" />
                          <span className="text-white font-medium">Coming Soon</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex gap-3">
                      {!project.comingSoon && !project.isCompanyProject && (
                        <>
                          {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-500 transition-colors duration-200">
                              <ExternalLink size={18} />
                            </a>
                          )}
                          {project.githubLink && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-500 transition-colors duration-200">
                              <Github size={18} />
                            </a>
                          )}
                        </>
                      )}
                      {project.isCompanyProject && (
                        <span className="px-3 py-1.5 bg-primary/20 rounded-full text-primary text-xs font-medium">
                          Confidential — Company Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{project.duration}</span>
                  </div>

                  <ul className="text-gray-400 text-sm mb-4 list-disc list-inside space-y-1 flex-1">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {project.comingSoon && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Development Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Button */}
        <div className="mt-12 flex justify-center">
          <NavLink
            to="https://github.com/PrinceDev90"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 overflow-hidden rounded-full flex items-center font-medium text-sm"
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-80" />
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            <span className="relative text-white flex items-center">
              View More on GitHub
              <Github size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProjectsSection);
