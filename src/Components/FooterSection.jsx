import React from 'react';
import { Github, Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
    return (
        <footer className="relative w-full py-12 px-4 bg-dark-gray text-white overflow-hidden">
            {/* Glowing orbs */}
            <div className="absolute top-0 -left-20 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 -right-20 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>

            <div className="relative max-w-5xl mx-auto z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Prince Bavishi
                        </h3>
                        <p className="text-neutral/80 text-sm">
                            Frontend Developer building scalable web applications with Angular & modern technologies.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-primary" />
                                <span className="text-sm">+91 90160 91157</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                <a href="mailto:bavishiprince90@gmail.com" className="text-sm hover:text-primary transition-colors">
                                    bavishiprince90@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span className="text-sm">Rajkot, Gujarat, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-neutral/80">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                            </li>
                            <li>
                                <a href="#skill" className="hover:text-primary transition-colors">Skills</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/PrinceDev90"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                            >
                                <Github size={20} className="text-white group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/prince-bavishi-58638b250"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                            >
                                <svg className="w-5 h-5 text-white group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a
                                href="mailto:bavishiprince90@gmail.com"
                                className="group relative p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                            >
                                <Mail size={20} className="text-white group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                        <p className="text-neutral/60 text-xs mt-3">
                            Open to Frontend Developer opportunities
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-neutral/60">
                        &copy; {new Date().getFullYear()} Prince Bavishi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(FooterSection);