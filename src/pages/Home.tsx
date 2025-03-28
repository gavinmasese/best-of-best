import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Tech Enthusiast',
    'Team Player'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm Gavin Masese
              </motion.h1>

              <div className="h-[32px] md:h-[42px] overflow-hidden mb-4">
                <motion.div
                  className="text-primary-600 dark:text-primary-400 text-2xl md:text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="animate-text-slide">
                    {roles.map((role) => (
                      <div key={role} className="h-[32px] md:h-[42px] flex items-center">
                        {role}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.p 
                className="text-gray-600 dark:text-gray-400 text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I create beautiful, functional, and user-friendly digital experiences. 
                With a passion for both design and development, I help businesses and 
                individuals bring their visions to life.
              </motion.p>

              <motion.div 
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="src\assets\Latest Gavin Masese.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                >
                  Download CV
                  <Download size={20} />
                </a>
              </motion.div>
            </div>

            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <img
                src="src\assets\mimi.png"
                alt="Profile"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}