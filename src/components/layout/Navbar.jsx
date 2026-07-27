import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Navbar - Floating glassmorphism navbar with scroll spy, theme toggle, and mobile menu.
 */
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((i) => i.id), 200);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const isDark = theme === 'dark';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[90] w-100 h-10 px-6 py-3 rounded-2xl flex items-center gap-5 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'glass-dark shadow-lg shadow-black/20'
              : 'glass-light shadow-lg shadow-black/5'
            : isDark
              ? 'bg-white/5 backdrop-blur-md border border-white/10'
              : 'bg-white/50 backdrop-blur-md border border-black/5'
        }`}
        style={{ maxWidth: 'calc(100vw - 2rem)' }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-display translate-x-2.5 font-bold text-xl mr-4 gradient-text"
          aria-label="Go to top"
        >
          V
        </button>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                activeId === id
                  ? isDark ? 'text-white' : 'text-primary-700'
                  : isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {activeId === id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)',
                    border: `1px solid ${isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          className={`ml-3 p-2 rounded-xl translate-x-6 transition-colors ${
            isDark ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-gray-200 text-primary-600'
          }`}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ml-2 p-2 rounded-xl transition-colors ${
            isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-gray-200 text-gray-800'
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div className={`absolute inset-0 ${isDark ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-lg`} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative flex flex-col items-center justify-center h-full gap-6"
            >
              {NAV_ITEMS.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(id)}
                  className={`text-2xl font-display font-semibold transition-colors ${
                    activeId === id
                      ? 'gradient-text'
                      : isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
