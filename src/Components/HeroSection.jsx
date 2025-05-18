import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center bg-transparent overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,transparent,black)] opacity-90"></div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-gray to-dark opacity-80"></div>

      {/* Animated SVG Objects */}
      {/* Squiggly Line 1 - Top Left */}
      <motion.svg
        className="absolute top-20 left-10 md:left-20 opacity-20 z-0"
        width="120"
        height="180"
        viewBox="0 0 120 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 0.5,
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 1 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }}
      >
        <motion.path
          d="M20,10 Q40,5 30,20 T40,30 Q70,10 50,40 T60,60 Q90,40 70,70 T80,90 Q110,70 90,100"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        />
      </motion.svg>

      {/* Abstract Geometric Shape - Bottom Right */}
      <motion.svg
        className="absolute bottom-20 right-10 md:right-20 opacity-20 z-0"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: 0.5,
          rotate: [0, 10, 0],
        }}
        transition={{
          scale: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          opacity: { duration: 1 },
          rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" },
        }}
      >
        <motion.polygon
          points="75,20 100,40 120,80 90,120 50,120 20,80 40,40"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          initial={{ strokeDasharray: 500, strokeDashoffset: 500 }}
          animate={{ strokeDashoffset: [500, 0, 500] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.circle
          cx="75"
          cy="75"
          r="30"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 4, delay: 2, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.svg>

      {/* Floating Dots Pattern - Top Right */}
      <motion.svg
        className="absolute top-40 right-10 md:right-40 opacity-15 z-0"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={40 + (i % 5) * 30}
            cy={40 + Math.floor(i / 5) * 30}
            r="3"
            fill="#3B82F6"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              r: [3, 4, 3]
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </motion.svg>

      {/* Curved Path - Bottom Left */}
      <motion.svg
        className="absolute bottom-10 left-10 md:left-40 opacity-20 z-0"
        width="180"
        height="120"
        viewBox="0 0 180 120"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          x: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          x: { repeat: Infinity, duration: 7, ease: "easeInOut" },
        }}
      >
        <motion.path
          d="M10,60 C30,10 60,100 90,60 S150,10 170,60"
          stroke="#EC4899"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
        />
      </motion.svg>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="space-y-6 ">
            {/* Introduction */}
            <div className="flex justify-center">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium dark-tag text-blue">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
                </span>
                Available for new projects
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight text-center">
              Full-Stack Developer
              <span className="bg-gradient-to-r from-blue to-secondary bg-clip-text text-transparent block leading-14 font-display">&</span>{' '}
              <span className="bg-gradient-to-r from-blue to-secondary bg-clip-text text-transparent">
                MERN Specialist
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral leading-relaxed tracking-wide text-center">
              I build modern web applications with React, Node.js, Express, and MongoDB.
              Passionate about creating intuitive user experiences with clean, efficient code.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg text-white font-medium bg-blue hover:opacity-70 shadow-lg shadow-blue/20 hover:shadow-xl hover:shadow-blue/30 outline-none transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-dark transition-all duration-300"
              >
                Let’s Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-end text-muted mb-3">Connect with me:</p>
              <div className="flex justify-end gap-3">
                <NavLink
                  to="https://github.com/Prince-Project-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 rounded-2xl flex items-center justify-center bg-dark-gray text-muted hover:text-blue hover:bg-muted transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </NavLink>
                <NavLink
                  to="www.linkedin.com/in/prince-bavishi-58638b250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 rounded-2xl flex items-center justify-center bg-dark-gray text-muted hover:text-blue hover:bg-muted transition-colors"
                >
                  <Linkedin size={22} />
                </NavLink>
                <NavLink
                  to="mailto:bavishiprince90@gmail.com"
                  className="size-12 rounded-2xl flex items-center justify-center bg-dark-gray text-muted hover:text-blue hover:bg-muted transition-colors"
                >
                  <Mail size={22} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);