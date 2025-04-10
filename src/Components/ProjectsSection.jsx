import React, { useState } from 'react';
import { ExternalLink, Github, Clock, AlertCircle } from 'lucide-react';
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
  const [activeFilter, setActiveFilter] = useState('all');

  const generateProgress = () => Math.floor(Math.random() * 40) + 50;

  const projects = [
    {
      id: 1,
      name: "To-Do App",
      images: [todoMain, todoModel],
      description: [
        "Interactive task management with add, edit, and delete functionality",
        "Task categorization into To Do, Doing, and Done columns",
        "Local storage for persistent task data",
        "Responsive design with dark/light mode toggle",
      ],
      tags: ["React", "Tailwind CSS", "context API"],
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
        "Responsive design for all screen sizes",
        "State management using React hooks",
      ],
      tags: ["React", "Tailwind CSS", "Context API", "Responsive Design"],
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
        "Download functionality for images",
        "Responsive grid layout",
      ],
      tags: ["React", "Unsplash API", "Infinite Scroll", "Responsive Design"],
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
        "Option to include numbers, symbols, and uppercase letters",
        "Copy to clipboard functionality",
        "Dark/light mode toggle",
      ],
      tags: ["React", "Tailwind CSS", "Clipboard API", "Custom Hooks"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/REACT_PROJECTS",
      liveLink: "https://react-project-prince.netlify.app/",
      category: "react",
    },
    {
      id: 5,
      name: "Cart Project",
      images: [CartImage],
      description: [
        "Built using vanilla JavaScript with local storage support",
        "Add, remove, and update product quantities",
        "Total price calculation included",
      ],
      tags: ["JavaScript", "DOM", "Local Storage"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/cart-system/",
      category: "javascript",
    },
    {
      id: 6,
      name: "Currency Converter",
      images: [CurrencyImage],
      description: [
        "Real-time currency conversion using an exchange rates API",
        "Dropdown selection for any currency pair",
        "Light and user-friendly UI",
      ],
      tags: ["JavaScript", "API", "DOM"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/currency%20app/index.html",
      category: "javascript",
    },
    {
      id: 7,
      name: "Fan Project",
      images: [FanImage],
      description: [
        "Control fan speed and direction using buttons",
        "CSS animations powered by JavaScript interactions",
      ],
      tags: ["JavaScript", "CSS Animation"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/fan/",
      category: "javascript",
    },
    {
      id: 8,
      name: "Rock Paper Scissors",
      images: [RockPaperImage],
      description: [
        "Classic game with simple UI and score tracking",
        "Built using JavaScript and event listeners",
      ],
      tags: ["JavaScript", "Game Logic"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/rock_paper_scissors/app",
      category: "javascript",
    },
    {
      id: 9,
      name: "Tic Tac Toe",
      images: [TicTacToeImage],
      description: [
        "Two-player board game with win detection logic",
        "Simple responsive UI built in vanilla JS",
      ],
      tags: ["JavaScript", "Game Logic", "Responsive UI"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/tic_tac_toe/",
      category: "javascript",
    },
    {
      id: 10,
      name: "Weather App",
      images: [WeatherImage],
      description: [
        "Fetch weather data using OpenWeatherMap API",
        "Display temperature, humidity, and weather conditions",
        "Responsive design with clean layout",
      ],
      tags: ["JavaScript", "API", "Responsive Design"],
      duration: "1 day",
      githubLink: "https://github.com/Prince-Project-ai/JAVASCRIPT_PROJECT",
      liveLink: "https://javascript-projects-prince.netlify.app/projects/weather-app-main/",
      category: "javascript",
    },
    {
      id: 11,
      name: "Online Real Estate Platform",
      images: [],
      description: [
        "Full-featured property listing and booking platform",
        "Built with the MERN stack (MongoDB, Express, React, Node)",
        "Admin panel, authentication, and search features",
      ],
      tags: ["MERN", "Full Stack", "MongoDB", "Node.js", "React"],
      duration: "Work in Progress",
      githubLink: "#",
      liveLink: "#",
      category: "full stack",
      comingSoon: true,
    },
    {
      id: 12,
      name: "Web Design for Client",
      images: [],
      description: [
        "Corporate business website for Sheetal Corporation",
        "Custom layout, modern design, and SEO optimized",
        "Responsive and cross-device compatible",
      ],
      tags: ["HTML", "CSS", "Client Project", "Responsive Design"],
      duration: "3 days",
      githubLink: "#",
      liveLink: "https://www.sheetalcorporation.com/",
      category: "web design",
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'react', label: 'React' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'full stack', label: 'Full Stack' },
    { key: 'web design', label: 'Web Designing' }
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="relative w-full py-20 px-4 overflow-hidden bg-transparent">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-primary text-sm font-medium mb-4">
            <Github size={16} className="mr-2" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            My Recent <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl text-center">
            A collection of solutions I've built, showcasing my expertise in modern web development.
          </p>
        </div>

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeFilter} // This key change will force re-render when filter changes
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const progress = generateProgress();

              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="group relative bg-dark-gray border border-border-design rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gray-700 w-full flex items-center justify-center">
                      {project.images?.length ? (
                        <img
                          src={project.images[0]}
                          alt={project.name}
                          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${project.comingSoon ? 'opacity-40' : ''
                            }`}
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">No Image Available</span>
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

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <div className="flex gap-3">
                        {!project.comingSoon ? (
                          <>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-500 transition-colors duration-200">
                              <ExternalLink size={18} />
                            </a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/90 rounded-full text-white hover:bg-blue-500 transition-colors duration-200">
                              <Github size={18} />
                            </a>
                          </>
                        ) : (
                          <span className="p-2 bg-gray-800/90 rounded-full text-blue-400">
                            <AlertCircle size={18} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <span className="text-xs text-gray-400">{project.duration}</span>
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
                          <span>{progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
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
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <NavLink
            to="https://github.com/Prince-Project-ai"
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

export default ProjectsSection;