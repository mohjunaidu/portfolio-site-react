import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Frontend Developer — Century Information Systems',
    period: 'Mar 2025 — Present • Abuja, Nigeria',
    points: [
      'Developed responsive UIs using Angular and Tailwind.',
      'Implemented secure auth flows and optimized performance.',
    ],
  },
  {
    title: 'IT Support Intern — PTDF',
    period: 'Mar 2024 — Jan 2025 • Abuja, Nigeria',
    points: ['Provided technical support and service monitoring.'],
  },
  {
    title: 'Teaching Assistant — NOW Education',
    period: 'Jun 2023 — Jan 2024 • United Kingdom',
    points: [
      'Assisted lesson delivery and assessed student performance.',
      'Supported diverse learning needs and professional development.',
    ],
  },
  {
    title: 'General IT Practitioner — NERDC',
    period: 'Feb 2022 — Sep 2022 • Abuja, Nigeria',
    points: [
      'Resolved hardware/software issues and maintained IT infrastructure.',
      'Performed installations, backups, and ensured network security.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Experience
        </motion.h3>

        <div className="mt-6 space-y-6 text-gray-300">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
              whileHover={{ 
                scale: 1.02, 
                x: 10,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                borderColor: '#4C8BF5'
              }}
              className="bg-gray-800 p-4 rounded border border-gray-700 transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              />
              <div className="font-semibold text-white group-hover:text-brand-500 transition-colors">
                {exp.title}
              </div>
              <div className="text-sm text-gray-400">{exp.period}</div>
              {exp.points.length > 1 ? (
                <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="mt-2 text-sm"
                >
                  {exp.points[0]}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

