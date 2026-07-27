import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiUser, HiChat, HiPaperAirplane } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import personalInfo from '../../data/personalInfo';

// ─── EmailJS Credentials (Replace these with your own) ───
const EMAILJS_SERVICE_ID  = 'service_ji987j7';   // e.g. 'service_abc1234'
const EMAILJS_TEMPLATE_ID = 'template_i2a6mht';  // e.g. 'template_xyz5678'
const EMAILJS_PUBLIC_KEY   = 'Cy3x0RqdnXLW5HD7_';   // e.g. 'aBcDeFgHiJkLmN'

/**
 * Contact - Contact form with validation, EmailJS integration, and animated states.
 */
export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputClass = (field) =>
    `w-full px-6 py-5 rounded-xl text-lg md:text-xl outline-none transition-all duration-300 ${
      isDark
        ? 'bg-white/5 border text-white placeholder:text-white/30 focus:border-primary-500 focus:bg-white/8'
        : 'bg-gray-50 border text-gray-800 placeholder:text-gray-400 focus:border-primary-500 focus:bg-white'
    } ${errors[field]
      ? isDark ? 'border-red-500/50' : 'border-red-400'
      : isDark ? 'border-white/10' : 'border-gray-200'
    }`;

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Have a project in mind? Let's talk about it." />

      <div className="w-full max-w-full mx-auto">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className={`text-base md:text-lg font-medium mb-3 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                <HiUser className="inline mr-1" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="  Your name"
                className={inputClass('name')}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={`text-base md:text-lg font-medium mb-3 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                <HiMail className="inline mr-1" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="  you@example.com"
                className={inputClass('email')}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className={`text-base md:text-lg font-medium mb-3 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              <HiChat className="inline mr-1" /> Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="  Project inquiry"
              className={inputClass('subject')}
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label className={`text-base md:text-lg font-medium mb-3 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              ✉ Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="  Tell me about your project..."
              rows={8}
              className={`${inputClass('message')} resize-none`}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 md:py-5 rounded-3xl font-semibold text-2xl md:text-2xl text-white flex items-center justify-center gap-5 disabled:opacity-60 transition-all"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            <AnimatePresence mode="wait">
              {status === 'loading' ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-8 h-8 md:w-10 md:h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"
                />
              ) : status === 'success' ? (
                <motion.span key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                  ✓ Message Sent!
                </motion.span>
              ) : status === 'error' ? (
                <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  ✗ Something went wrong. Try again.
                </motion.span>
              ) : (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                  <HiPaperAirplane className="rotate-90" /> Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </form>

        {/* Email fallback */}
        <p className={`text-center text-sm md:text-base mt-8 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
          Or reach me directly at{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-primary-400 hover:underline">
            {personalInfo.email}
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
