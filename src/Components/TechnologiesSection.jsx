import React from 'react';

const technologies = [
    { name: "React", logo: "https://via.placeholder.com/50?text=React" },
    { name: "Next.js", logo: "https://via.placeholder.com/50?text=Next.js" },
    { name: "TailwindCSS", logo: "https://via.placeholder.com/50?text=Tailwind" },
    { name: "Javascript", logo: "https://via.placeholder.com/50?text=JS" },
    { name: "Typescript", logo: "https://via.placeholder.com/50?text=TS" },
    { name: "Node.js", logo: "https://via.placeholder.com/50?text=Node" },
    { name: "Express.js", logo: "https://via.placeholder.com/50?text=Express" },
    { name: "Git", logo: "https://via.placeholder.com/50?text=Git" },
    // Add more technologies as needed
];

const TechnologiesSection = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Technologies I Use
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="h-12 w-12 object-contain"
                            />
                            <span className="mt-2 text-sm font-medium text-gray-700">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;
