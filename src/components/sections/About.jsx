import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import personalInfo from '../../data/personalInfo';
import skills from '../../data/skills';

/**
 * AnimatedCounter - Counts up to target value when in view.
 */
function AnimatedCounter({ target, label, suffix = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      ref={ref}
      className={`text-center p-6 rounded-2xl ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
      }`}
    >
      <motion.span
        className="text-4xl md:text-5xl font-bold gradient-text font-display block mb-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        {inView ? target : 0}{suffix}
      </motion.span>
      <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{label}</span>
    </motion.div>
  );
}

/**
 * About - Professional intro, stats counters, and animated tech stack grid.
 */
export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" subtitle="Get to know me and my tech stack" />

      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
        {/* Avatar / Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #00d4ff)',
                padding: '3px',
              }}
            >
              <div className={`w-full h-full rounded-3xl flex items-center justify-center text-7xl font-bold font-display ${
                isDark ? 'bg-surface-dark-2' : 'bg-surface-light'
              }`}>
                <span className="gradient-text">{personalInfo.name?.charAt(0) || 'V'}</span>
              </div>
            </div>
            {/* Decorative floating dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-500/30 blur-sm"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-accent-500/30 blur-sm"
            />
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl translate-y-3 lg:text-4xl font-bold font-display mb-6">
            Hello! I'm <span className="gradient-text">{personalInfo.name}</span>
          </h3>
          <p className={`text-base translate-y-3 md:text-lg mb-5 leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            {personalInfo.shortBio}
          </p>
          <p className={`text-base translate-y-3 md:text-lg mb-8 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
            {personalInfo.detailedBio}
          </p>
          <div className={`inline-flex translate-y-3 items-center w-15 gap-5 text-sm px-8 py-5 rounded-full ${
            isDark ? 'bg-white/5 text-white/60 border border-white/10' : 'bg-gray-100 text-gray-500 border border-gray-200'
          }`}>
            📍 {personalInfo.location}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid translate-y-8 grid-cols-2 md:grid-cols-3 gap-6 mb-28">
        <AnimatedCounter target={personalInfo.yearsOfExperience} suffix="+" label="Years Experience" />
        <AnimatedCounter target={personalInfo.projectsCompleted} suffix="+" label="Projects Completed" />
        <AnimatedCounter target={personalInfo.certificationsCount} suffix="+" label="Certifications" />
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className={`text-2xl lg:text-3xl font-bold font-display text-center mt-8 mb-14 ${isDark ? 'text-white/90' : 'text-gray-800'}`} style={{ transform: 'translateY(3rem)' }}>
          Technologies I Work With
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4 sm:gap-6 md:gap-8" style={{ transform: 'translateY(6.25rem)' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              className={`group flex flex-col items-center gap-3 p-3 md:p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                isDark
                  ? 'hover:bg-white/10 border border-transparent hover:border-white/10'
                  : 'hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-200'
              }`}
            >
              <skill.icon
                className="text-xl sm:text-4xl md:text-5xl h-7 w-7 sm:h-14 sm:w-14 md:h-20 md:w-20 transition-all duration-300"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = skill.color;
                  e.currentTarget.style.filter = `drop-shadow(0 0 8px ${skill.color}60)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
                  e.currentTarget.style.filter = 'none';
                }}
              />
              <span className={`text-xs text-center font-medium ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
