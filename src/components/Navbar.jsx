import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinkStyle = (path) =>
    `relative px-3 py-2 hover:text-secondary transition-colors ${
      pathname === path 
        ? 'text-secondary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:rounded-full' 
        : 'text-white'
    }`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary dark:bg-dark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo11.png" alt="CrypticX Logo" className="h-20 w-20 md:h-24 md:w-24 object-scale-down" />
            <span className="text-xl md:text-2xl font-bold text-[#000080] dark:text-[#4169E1] tracking-wide hidden sm:block">
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
              className="p-2 rounded-full bg-gradient-to-r from-primary-light to-primary dark:from-dark-light dark:to-dark-lighter text-white transition-all duration-300 hover:shadow-lg hover:scale-110"
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
          <div className="md:hidden py-3 px-2 space-y-1 sm:px-3 border-t border-primary-light dark:border-dark-lighter">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/' 
                  ? 'bg-primary-light dark:bg-dark-light text-secondary font-semibold shadow-inner' 
                  : 'text-white hover:bg-primary-light dark:hover:bg-dark-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/services' 
                  ? 'bg-primary-light dark:bg-dark-light text-secondary font-semibold shadow-inner' 
                  : 'text-white hover:bg-primary-light dark:hover:bg-dark-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/trading" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/trading' 
                  ? 'bg-primary-light dark:bg-dark-light text-secondary font-semibold shadow-inner' 
                  : 'text-white hover:bg-primary-light dark:hover:bg-dark-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trading
            </Link>
            <Link 
              to="/academy" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/academy' 
                  ? 'bg-primary-light dark:bg-dark-light text-secondary font-semibold shadow-inner' 
                  : 'text-white hover:bg-primary-light dark:hover:bg-dark-light'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Academy
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                pathname === '/about' 
                  ? 'bg-primary-light dark:bg-dark-light text-secondary font-semibold shadow-inner' 
                  : 'text-white hover:bg-primary-light dark:hover:bg-dark-light'
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