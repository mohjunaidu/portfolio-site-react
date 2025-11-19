import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS } from '../data/siteData';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-16 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Projects
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-2"
        >
          A curated selection of my recent work.
        </motion.p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(76, 139, 245, 0.2)',
                borderColor: '#4C8BF5'
              }}
              className="bg-gray-800 p-5 rounded-lg border border-gray-700 transition-all duration-300 group cursor-pointer"
            >
              <h4 className="font-semibold text-white group-hover:text-brand-500 transition-colors">
                {p.title}
              </h4>
              <p className="text-gray-300 mt-2">{p.desc}</p>
              <motion.div
                className="mt-4"
                whileHover={{ x: 5 }}
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-500 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  View repo
                  <FiExternalLink className="inline" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

