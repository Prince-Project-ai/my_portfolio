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
                            MERN Stack Developer crafting innovative web solutions
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
                                <span className="text-sm">Amreli, Gujarat, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-neutral/80">
                            <li>
                                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
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
                                href="https://github.com/Prince-Project-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                            >
                                <Github size={20} className="text-white group-hover:text-primary transition-colors" />
                            </a>
                            <a
                                href="mailto:bavishiprince90@gmail.com"
                                className="group relative p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
                            >
                                <Mail size={20} className="text-white group-hover:text-primary transition-colors" />
                            </a>
                        </div>
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