import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import experienceData from '../../data/experience';

/**
 * Experience - Animated vertical timeline with scroll-triggered entries.
 */
export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SectionWrapper id="experience">
      <SectionTitle title="Experience" subtitle="My professional journey so far" />

      <div className="relative w-full flex flex-col gap-15">
        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <div className={`relative rounded-2xl overflow-hidden p-8 md:p-10 max-w-4xl mx-auto transition-all duration-300 ${
              isDark
                ? 'bg-white/5 border border-white/10 hover:border-primary-500/20'
                : 'bg-white border border-gray-200 hover:shadow-lg'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-block px-3 py-1 translate-x-2 rounded-full text-xs font-medium ${
                  isDark ? 'bg-primary-500/20 text-primary-300' : 'bg-primary-100 text-primary-700'
                }`}>
                  {exp.type}
                </div>
              </div>

              <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold font-display mb-2">{exp.role}</h4>
              <p className={`text-xl md:text-2xl mb-1 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                {exp.company}
              </p>
              <p className={`text-base md:text-lg mb-6 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                {exp.duration} • {exp.location}
              </p>

              <ul className="space-y-2 mb-6 text-left">
                {exp.responsibilities.map((r, i) => (
                  <li key={i} className={`text-base md:text-lg flex items-start gap-3 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    <span className="text-primary-400 mt-1 shrink-0">▸</span>
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs md:text-sm translate-x-4 px-3 md:px-4 py-1 md:py-1.5 rounded-xl font-mono ${
                      isDark ? 'bg-white/5 text-white/60' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}