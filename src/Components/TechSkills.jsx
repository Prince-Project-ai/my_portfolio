import React from 'react';
import {
  Code2,
  Cpu,
  ArrowRight,
} from 'lucide-react';

import Html5 from "../assets/html5.svg";
import Css3 from "../assets/css3.svg";
import Js from "../assets/javascript.svg";
import Reacts from "../assets/react2.svg";
import Jquery from "../assets/jquery-icon.svg";
import Tailwind from "../assets/tailwindcss.svg";
import Bootstrap from "../assets/bootstrap5.svg";
import Php from "../assets/php.svg";
import Nodejs from "../assets/darkgreen.svg";
import Express from "../assets/white_express.svg";
import Mongodb from "../assets/darkgreen_mongo.svg";
import MySQL from "../assets/mysql.svg";
import Git from "../assets/Git-Logo-2Color.svg";
import Npm from "../assets/npm.svg";
import Ajax from "../assets/AJAX.svg";
import Github from "../assets/white_github.svg";
import Postman from "../assets/postman.svg";
import Shadcn from "../assets/white_shadcn.svg";
import Vscode from "../assets/visual_studio_code.svg";
import Jwt from "../assets/jwt.svg";
import Netlify from "../assets/netlify.png";
import Canva from "../assets/canva_icon.svg";
import PhotoShop from "../assets/adobe_photoshop.svg";


const TechSkills = () => {
  // Technology data
  const technologies = [
    { name: "HTML5", icon: Html5 },
    { name: "CSS3", icon: Css3 },
    { name: "JavaScript", icon: Js },
    { name: "React.js", icon: Reacts },
    { name: "jQuery", icon: Jquery },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Bootstrap 5", icon: Bootstrap },
    { name: "PHP", icon: Php },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "MongoDB", icon: Mongodb },
    { name: "MySQL", icon: MySQL },
    { name: "Git", icon: Git },
    { name: "Postman", icon: Postman },
    { name: "GitHub", icon: Github }, // Use lucide-react Github icon or import an SVG
    { name: "npm", icon: Npm },
    { name: "AJAX", icon: Ajax },
    { name: "shadcn", icon: Shadcn }, // No icon provided
    { name: "VS Code", icon: Vscode }, // No icon provided
    { name: "JWTToken", icon: Jwt }, // No icon provided
    { name: "Netlify", icon: Netlify }, // No icon provided
    { name: "Canva", icon: Canva }, // No icon provided
    { name: "Photoshop", icon: PhotoShop }, // No icon provided
  ];

  // Remove duplicates (if any)
  const uniqueTechnologies = Array.from(
    new Map(technologies.map((tech) => [tech.name, tech])).values()
  );

  return (
    <section id='skill' className="relative w-full pt-20 px-4 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-15">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Cpu size={16} className="mr-2" />
            <span>Technical Skillset</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 text-center">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Master
            </span>
          </h2>

          <p className="text-lg text-neutral/80 max-w-2xl text-center">
            The foundation of my development arsenal that I've refined over years of building real-world solutions
          </p>
        </div>

        {/* Skills Container */}
        <div className="flex flex-wrap gap-3 justify-center">
          {uniqueTechnologies.map((tech) => (
            <div key={tech.name} className="group relative">
              <div className="relative flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/5">
                {/* Tech icon with 3D effect */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -bottom-1 left-1 w-8 h-8 rounded-full bg-black/30 blur-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center relative z-10">
                    {tech.icon ? (
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                    ) : (
                      <Code2 size={20} className="text-white" /> // Fallback icon
                    )}
                  </div>
                </div>
                {/* Tech name */}
                <span className="font-light font-mono text-white text-sm whitespace-nowrap">
                  {tech.name}
                </span>
                {/* Hover light effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              </div>
            </div>
          ))}
        </div>

        {/* "Explore More" button */}
        <div className="mt-12 flex justify-center">
          <button className="group relative px-6 py-3 overflow-hidden rounded-full flex items-center font-medium text-sm">
            <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:opacity-80"></div>
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
            <span className="relative text-white flex items-center">
              Explore My Projects
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TechSkills);