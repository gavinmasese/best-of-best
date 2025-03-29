import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleChat = () => setChatOpen(!chatOpen);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    const newMessages = [...chatMessages, { text: userInput, sender: 'user' }];
    setChatMessages(newMessages);
    setUserInput('');

    try {
      const response = await axios.post(
        'https://api.mistral.ai/chat',
        { message: userInput },
        { headers: { Authorization: 'Bearer YOUR_API_KEY' } }
      );
      setChatMessages([...newMessages, { text: response.data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`min-h-screen pt-24 flex items-center transition-colors duration-300 
        ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900'}`}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-8 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          Get in Touch
        </motion.h1>
        <motion.div
          className={`max-w-lg mx-auto p-8 rounded-2xl shadow-2xl transition-all duration-300 
            ${isDark ? 'bg-gray-800 text-white' : 'bg-white'}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text" name="name" value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition 
                  bg-transparent border-gray-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition 
                  bg-transparent border-gray-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg mb-2">Message</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition h-32 
                  bg-transparent border-gray-500"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg text-lg hover:bg-indigo-600 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Floating AI Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        💬
      </motion.button>
      
      {/* AI Chat Popup */}
      {chatOpen && (
        <motion.div
          className={`fixed bottom-16 right-8 w-80 p-4 rounded-lg shadow-lg border transition-all duration-300 
            ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-white border-gray-300'}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">AI Assistant</h2>
            <button onClick={toggleChat} className="text-gray-500">✖</button>
          </div>
          <div className="h-48 overflow-y-auto border p-2 mb-2 border-gray-600">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`mb-1 p-2 rounded-lg text-sm transition-all duration-300 
                ${msg.sender === 'user' ? 'bg-blue-500 text-white text-right' : 'bg-gray-500'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg bg-transparent border-gray-500"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
