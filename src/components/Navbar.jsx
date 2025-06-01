import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinkStyle = (path) =>
    `relative px-3 py-2 transition-colors ${
      pathname === path 
        ? 'text-secondary-dark dark:text-secondary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:rounded-full' 
        : 'text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-light'
    }`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white dark:bg-dark py-4 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-0'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <img 
                src="/logo11.png" 
                alt="CrypticX Logo" 
                className={`h-20 w-20 md:h-24 md:w-24 object-scale-down transition-all duration-300 ${
                  scrolled ? 'h-16 w-16 md:h-20 md:w-20' : ''
                }`} 
              />
            </div>
            <span className={`text-xl md:text-2xl font-bold text-[#4169E1] tracking-wide hidden sm:block transition-all duration-300 ${
              scrolled ? 'text-lg md:text-xl' : ''
            }`}>
              CrypticX
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            <Link to="/" className={navLinkStyle('/')}>Home</Link>
            <Link to="/services" className={navLinkStyle('/services')}>Services</Link>
            <Link to="/trading" className={navLinkStyle('/trading')}>Trading</Link>
            <Link to="/academy" className={navLinkStyle('/academy')}>Academy</Link>
            <Link to="/about" className={navLinkStyle('/about')}>About</Link>
          </div>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-400 text-xl transform hover:rotate-45 transition-transform duration-300" />
              ) : (
                <FaMoon className="text-blue-200 text-xl transform hover:rotate-12 transition-transform duration-300" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-light dark:hover:bg-dark-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 px-2 space-y-1 sm:px-3 bg-white dark:bg-dark border-t border-gray-200 dark:border-dark-lighter">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/' 
                  ? 'text-secondary dark:text-secondary font-semibold' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/services' 
                  ? 'text-secondary dark:text-secondary font-semibold' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/trading" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/trading' 
                  ? 'text-secondary dark:text-secondary font-semibold' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trading
            </Link>
            <Link 
              to="/academy" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/academy' 
                  ? 'text-secondary dark:text-secondary font-semibold' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Academy
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/about' 
                  ? 'text-secondary dark:text-secondary font-semibold' 
                  : 'text-gray-700 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}