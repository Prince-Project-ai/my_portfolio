import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className='header max-w-5xl px-4 top-2'>
      <div className="sub_header w-full mx-auto border-2 border-border-design py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue to-secondary bg-clip-text text-transparent">
              Prince Bavishi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-4 md:flex items-center">
            <a
              href="#"
              className="text-neutral hover:text-accent font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-neutral hover:text-accent font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              Projects
            </a>
            <a
              href="#skill"
              className="text-neutral hover:text-accent font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-neutral hover:text-accent  font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              About
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center">
            {/* Contact button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-blue hover:opacity-80 shadow-md hover:shadow-lg transition-all"
            >
              Contact Me
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg bg-blue text-white hover:bg-accent focus:outline-none  transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-[10px]  border-t-none  border-border-design shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <a
              href="#"
              className="block px-3 py-2 rounded-lg text-neutral hover:bg-muted hover:text-accent font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-lg text-neutral hover:bg-muted hover:text-accent font-medium transition-colors"
            >
              Projects
            </a>
            <a
              href="#skill"
              className="block px-3 py-2 rounded-lg text-neutral hover:bg-muted hover:text-accent font-medium transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-lg text-neutral hover:bg-muted hover:text-accent font-medium transition-colors"
            >
              About
            </a>
            <div className="pt-2 pb-3">
              <a
                href="#contact"
                className="block w-full px-4 py-2 rounded-lg text-center text-white bg-blue hover:bg-accent font-medium shadow-md hover:shadow-lg transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);