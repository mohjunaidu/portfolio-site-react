import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../data/siteData';
import { FiGithub } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xl font-semibold">
            {SITE.name.split(' ')[0]}
            <span className="text-brand-500"> J</span>
          </div>
          <div className="hidden md:flex gap-6 text-gray-300">
            {['about', 'projects', 'experience', 'contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="hover:text-white relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center gap-4">
          <motion.a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-brand-500 rounded text-white"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(76, 139, 245, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

