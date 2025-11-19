import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { SITE } from '../data/siteData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Configure EmailJS: replace SERVICE_ID, TEMPLATE_ID, USER_ID
      await emailjs.send('SERVICE_ID','TEMPLATE_ID', {
        from_name: name, from_email: email, message: msg
      }, 'USER_ID');
      setStatus('Message sent — thanks!');
      setName(''); setEmail(''); setMsg('');
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Try email: ' + SITE.email);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-950 to-gray-900" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          Contact
        </motion.h3>

        <motion.form
          onSubmit={send}
          className="mt-6 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.input
            placeholder="Your name"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
            value={name}
            onChange={e=>setName(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            placeholder="Your email"
            type="email"
            className="p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Message"
            rows={5}
            className="p-3 rounded bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
            value={msg}
            onChange={e=>setMsg(e.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex gap-3">
            <motion.button
              type="submit"
              className="px-5 py-2 bg-brand-500 rounded text-white"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(76, 139, 245, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Send message
            </motion.button>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 border border-gray-700 rounded text-gray-200"
              whileHover={{ scale: 1.05, borderColor: '#4C8BF5', backgroundColor: 'rgba(76, 139, 245, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>

          <motion.div
            className="text-sm text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: status ? 1 : 0 }}
          >
            {status}
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}

