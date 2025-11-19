import React from 'react';
import { motion } from 'framer-motion';
import { SITE } from '../data/siteData';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Hi, I'm{' '}
            <motion.span
              className="text-brand-500 inline-block"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background: 'linear-gradient(90deg, #4C8BF5, #60A5FA, #4C8BF5)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Muhammad Junaidu Ismail
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-300 max-w-2xl"
          >
            Frontend Engineer & MSc Cybersecurity — I build polished, secure web apps: React and Angular dashboards, Laravel APIs and security tooling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-brand-500 rounded text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(76, 139, 245, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              See projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-gray-700 rounded text-gray-200"
              whileHover={{ scale: 1.05, borderColor: '#4C8BF5', backgroundColor: 'rgba(76, 139, 245, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            className="w-64 h-64 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 2, borderColor: '#4C8BF5' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="text-center relative z-10">
              <div className="text-white font-semibold">Frontend • Security</div>
              <div className="text-gray-400 text-sm mt-2">React • Angular • Laravel • Python</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

