import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-6 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 text-gray-400 text-sm flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05, color: '#4C8BF5' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          © {new Date().getFullYear()} Muhammad Junaidu Ismail
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Built with React • Tailwind
        </motion.div>
      </div>
    </motion.footer>
  );
}

