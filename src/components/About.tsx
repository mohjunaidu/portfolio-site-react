import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SITE } from '../data/siteData';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          About
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 text-gray-300">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              I'm a Frontend Engineer with an MSc in Cybersecurity (University of Wolverhampton, 2023).
              I specialise in React and Angular frontends, secure API integrations with Laravel, and practical security tooling.
            </p>
            <motion.ul
              className="mt-4 space-y-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: '📍', text: SITE.location },
                { icon: '✉️', text: SITE.email },
                { icon: '📞', text: SITE.phone },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ x: 5, color: '#4C8BF5' }}
                  className="transition-colors"
                >
                  {item.icon} {item.text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white">Core Competencies</h3>
            <motion.ul
              className="mt-3 text-gray-300 space-y-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {[
                '• Frontend: Angular, React, TypeScript, Tailwind',
                '• Backend: Laravel, REST APIs',
                '• Security: vulnerability scanning, incident response, SIEM basics',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ x: 5, color: '#4C8BF5' }}
                  className="transition-colors"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

