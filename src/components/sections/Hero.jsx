import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import personalInfo from '../../data/personalInfo';

/**
 * Hero - Landing section with animated intro, typing effect, floating shapes, and CTA buttons.
 */
export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0, 212, 255, 0.04) 0%, transparent 50%)',
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-xl"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            background: `linear-gradient(135deg, ${
              ['#6366f1', '#a855f7', '#00d4ff', '#ff00ea', '#00ff88'][i]
            }, transparent)`,
            left: `${10 + i * 18}%`,
            top: `${15 + ((i * 17) % 60)}%`,
          }}
          animate={{
            y: [0, -30 + i * 10, 0],
            x: [0, 15 - i * 5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-sm md:text-base font-mono tracking-widest uppercase mb-6 ${
            isDark ? 'text-primary-400' : 'text-primary-600'
          }`}
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl translate-y-3 mt-8 md:text-7xl lg:text-8xl font-bold font-display mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Designation with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-xl translate-y-5 mt-6 md:text-2xl lg:text-3xl font-medium mb-8 ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}
        >
          <TypeAnimation
            sequence={[
              personalInfo.designation,
              2000,
              'Problem Solver',
              2000,
              'Open Source Enthusiast',
              2000,
              'Tech Explorer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-display"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-base translate-y-5 mt-8 md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed ${
            isDark ? 'text-white/50' : 'text-gray-500'
          }`}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10"
        >
          {/* Resume Download */}
          <motion.a
            href={`${import.meta.env.BASE_URL}ViditMalyan.pdf`}
            download="ViditMalyan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group translate-y-10 relative px-8 py-4 w-auto rounded-2xl font-semibold text-white overflow-hidden flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiDownload className="text-lg" />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          {/* Contact Button */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 w-auto translate-y-10 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 ${
              isDark
                ? 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                : 'border border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400'
            }`}
          >
            <HiMail className="text-lg" />
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity } }}
          className="absolute translate-y-50 bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5 ${
            isDark ? 'border-white/20' : 'border-gray-400'
          }`}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
