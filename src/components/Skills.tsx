import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SKILLS } from '../data/siteData';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-12" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Skills
        </motion.h3>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          {SKILLS.map((s, index) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
              className="p-4 bg-gray-800 rounded border border-gray-700 hover:border-brand-500 transition-colors"
            >
              <div className="font-semibold flex justify-between items-center">
                <span>{s.name}</span>
                <span className="text-brand-500 text-sm">{s.level}%</span>
              </div>
              <div className="mt-2 h-2 bg-gray-700 rounded overflow-hidden">
                <motion.div
                  className="h-2 bg-brand-500 rounded"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${s.level}%` } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

