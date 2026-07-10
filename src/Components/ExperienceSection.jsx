import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer (Angular)",
      company: "Softrefine Technology Pvt. Ltd.",
      location: "Rajkot, Gujarat",
      period: "May 2025 – Present",
      description:
        "Contributing to the development of Talent Recruit, an AI-powered end-to-end recruitment and Applicant Tracking System (ATS) platform.",
      responsibilities: [
        "Managed and enhanced key product modules including the Offer Module, Settings Module, and Reports Module by implementing new features and improving existing functionality.",
        "Integrated the Shine Job Platform API to enable seamless job posting and recruitment workflow integration.",
        "Investigated, reproduced, and resolved complex production issues, including defects not initially identified during QA testing, improving overall application stability.",
        "Optimized the Offer Module by identifying and eliminating unnecessary API requests, reducing redundant network calls and improving module performance by approximately 40%.",
        "Collaborated with backend developers to integrate RESTful APIs and ensure efficient data flow between frontend and backend services.",
        "Developed reusable Angular components and maintained clean, modular, and scalable code following frontend best practices.",
      ],
      technologies: ["Angular", "TypeScript", "Angular Material", "REST APIs", "Azure DevOps", "Git"],
    },
  ];

  return (
    <section id="experience" className="relative w-full pt-20 px-4 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-15">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase size={16} className="mr-2" />
            <span>Work Experience</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 text-center">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-lg text-neutral/80 max-w-2xl text-center">
            My journey building scalable web applications in professional environments
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-dark shadow-lg shadow-primary/30"></div>

              {/* Experience Card */}
              <div className="bg-dark-gray rounded-xl p-6 border border-border-design hover:border-primary/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="inline-flex items-center text-sm text-muted">
                      <Calendar size={14} className="mr-1.5" />
                      {exp.period}
                    </div>
                    <div className="inline-flex items-center text-sm text-muted">
                      <MapPin size={14} className="mr-1.5" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral/80 mb-4 leading-relaxed">{exp.description}</p>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-neutral/80 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ExperienceSection);
