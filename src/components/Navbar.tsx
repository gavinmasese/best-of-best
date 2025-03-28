import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img 
              src="\assets\logoj.svg" 
              alt="Logo" 
              className="h-8 w-auto" 
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive ? 'text-primary-600 dark:text-primary-400' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                    isActive ? 'text-primary-600 dark:text-primary-400' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
