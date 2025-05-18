import React from 'react';
import { Cpu } from 'lucide-react';

const AboutMeSection = () => {
    return (
        <section id='about' className="relative w-full pt-10 px-4 overflow-hidden">
            {/* Glowing orbs */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>

            <div className="relative max-w-5xl mx-auto px-4 z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-15">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <Cpu size={16} className="mr-2" />
                        <span>About Me</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 text-center">
                        Get to Know <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
                    </h2>

                    <p className="text-lg text-neutral/80 max-w-2xl text-center">
                        A glimpse into my journey as a developer and what drives me to create innovative solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Profile Column */}
                    <div className="bg-dark-gray rounded-xl p-6 border border-border-design order-0 lg:order-1 lg:col-span-1">
                        <h3 className="text-2xl font-bold text-white text-center mb-4">Prince Bavishi</h3>
                        <p className="text-primary text-center font-medium mb-6">MERN Stack Developer</p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/20 p-2 rounded-md">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm text-muted">Phone</h4>
                                    <p className="text-white">+91 90160 91157</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-secondary/20 p-2 rounded-md">
                                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm text-muted">Email</h4>
                                    <p className="text-white break-all">bavishiprince90@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-accent/20 p-2 rounded-md">
                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm text-muted">Location</h4>
                                    <p className="text-white">Amreli, Gujarat, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="bg-blue/20 p-2 rounded-md">
                                    <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm text-muted">GitHub</h4>
                                    <p className="text-white">Prince-Project-ai</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border-design">
                            <h4 className="text-lg font-bold text-white mb-4">Education</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-muted">06/2022 - 03/2025</p>
                                    <h5 className="text-white font-medium">Bachelor of Computer Application (BCA)</h5>
                                    <p className="text-neutral/80">Saurashtra University - Rajkot</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted">06/2021 - 03/2022</p>
                                    <h5 className="text-white font-medium">Higher Secondary School</h5>
                                    <p className="text-neutral/80">Dipak Highschool - Amreli</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="order-1 lg:order-2 lg:col-span-2 space-y-8">
                        <div className="bg-dark-gray rounded-xl p-6 border border-border-design">
                            <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
                            <p className="text-neutral/90 leading-relaxed mb-4">
                                I'm Prince Bavishi, a passionate MERN Stack Developer with a strong foundation in building
                                responsive and scalable web applications. As a problem solver and creative thinker,
                                I strive to create clean, efficient code while continuously improving my skills in the ever-evolving
                                world of web development.
                            </p>
                            <p className="text-neutral/90 leading-relaxed mb-4">
                                Currently pursuing my Bachelor's in Computer Application, I'm committed to enhancing my technical expertise
                                while working on real-world projects that solve practical problems. I specialize in building
                                end-to-end applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js) along with
                                modern UI frameworks like Tailwind CSS.
                            </p>
                            <p className="text-neutral/90 leading-relaxed">
                                I'm excited about opportunities that challenge me to grow as a developer and allow me to contribute
                                to innovative solutions in a dynamic development environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AboutMeSection);