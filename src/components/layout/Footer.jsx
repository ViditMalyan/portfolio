import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { FaReact, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import personalInfo from '../../data/personalInfo';

/**
 * Footer - Copyright, social icons, back-to-top button, and React badge.
 */
export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSocials = [
    { icon: FaGithub, url: 'https://github.com/viditmalyan', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/vidit-malyan', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/vidit003', label: 'Twitter' },
  ];

  return (
    <footer className={`relative min-h-[250px] flex items-center justify-center py-24 md:py-32 px-6 ${
      isDark ? 'bg-surface-dark-2/80 border-t border-white/5' : 'bg-gray-50 border-t border-gray-200'
    }`}>
      <div className="w-full gap-10 max-w-[1600px] mx-auto flex flex-col items-center">
        {/* Back to top */}
        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-4 rounded-full transition-all mb-20 ${
            isDark
              ? 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white border border-white/10'
              : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-800 shadow-md'
          }`}
          aria-label="Scroll to top"
        >
          <HiArrowUp size={30} />
        </motion.button>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-10 mb-10">
          {footerSocials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-xl transition-all duration-300 ${
                isDark
                  ? 'text-white/50 hover:text-white hover:bg-white/10'
                  : 'text-gray-400 hover:text-gray-800 hover:bg-gray-200'
              }`}
              aria-label={social.label}
            >
              <social.icon size={28} />
            </a>
          ))}
        </div>

        {/* Built with React badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono mb-5 ${
            isDark ? 'bg-white/5 text-white/40 border border-white/10' : 'bg-gray-100 text-gray-400 border border-gray-200'
          }`}
        >
          Built with <FaReact className="text-[#61DAFB] animate-spin-slow text-lg" /> React
        </motion.div>

        {/* Copyright */}
        <p className={`text-center pt-10 text-sm ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
