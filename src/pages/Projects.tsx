import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Memorify',
    description: 'I collaborated with a friend to create a much more complex notes app where you coul share your memories and add media.',
    image: '/assets/memorify.png',
  },
  {
    id: 2,
    title: 'Finance Website',
    description: 'Developed a website for Bullione Africa which is an investment company. This included frontend and backend',
    image: '/assets/Bullione.png',
  },
  {
    id: 3,
    title: 'Smoke Monitoring System',
    description: 'An Arduino-based system that detects smoke levels and triggers alerts for safety.',
    image: '/assets/smoke-detector-arduino-circuit.jpg',
  },
  {
    id: 4,
    title: 'University Watch',
    description: 'As my final year project, I created a social media app for universities for faster relaying of information',
    image: '/assets/university_watch.png',
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
