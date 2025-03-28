import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
        >
          <p className="text-lg text-center">
            Innovative individual with proven success evaluating software requirements and designing innovative solutions.
            A problem solver who works well in teams or independently, always delivering results before deadlines.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } }}
        >
          <p><strong>Name:</strong> Gavin Masese</p>
          <p><strong>Location:</strong> Nairobi</p>
          <p><strong>Email:</strong> gavinmasese911@gmail.com</p>
          <p>
            <strong>Website:</strong>{' '}
            <a 
              href="https://masesegavin.netlify.app" 
              className="text-blue-500 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              masesegavin.netlify.app
            </a>
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.7, duration: 0.5 } }}
        >
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <p>
            HTML, CSS, JavaScript, Flutter, Firebase, Web Development, Technical Writing, UI/UX, Graphics Design, CRM, Technical Support
          </p>
        </motion.div>

        {/* Interests Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.9, duration: 0.5 } }}
        >
          <h2 className="text-2xl font-semibold mb-2">Interests</h2>
          <p>
            Engaging with other developers, UI/UX development, Networking, Reading novels, Gaming
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
