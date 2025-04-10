import React, { useState } from 'react';

const ProjectCategories = () => {
    const categories = ["JS", "React", "PHP", "MERN"];
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <section className="py-12 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                    Project Categories
                </h2>
                <div className="flex justify-center space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                                activeCategory === category
                                    ? "bg-blue-500 text-white border-blue-500"
                                    : "bg-slate-800 text-blue-400 border-blue-500 hover:bg-blue-500 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCategories;