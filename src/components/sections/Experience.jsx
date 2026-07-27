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

      <div className="relative mb-10 w-full">
        {/* Vertical line */}
        {/* <div className={`absolute left-10 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-0.5 ${
          isDark ? 'bg-white/10' : 'bg-gray-200'
        }`} /> */}

        {experienceData.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative mb-16 md:w-1/2 pl-14 md:pl-0 ${
                isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              {/* <div
                className={`absolute left-2.5 md:left-auto ${
                  isLeft ? 'md:-right-[9px]' : 'md:-left-[9px]'
                } top-1.5 w-4 h-4 rounded-full border-4 z-10 ${
                  isDark ? 'bg-surface-dark border-primary-500' : 'bg-white border-primary-500'
                }`}
                style={{ boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)' }}
              /> */}

              <div className={`rounded-3xl md:translate-x-72 translate-y-10 h-160 w-280 p-10 md:p-12 transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-primary-500/20'
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              }`}>
                <div className={`inline-block px-3 py-1 translate-y-3 rounded-full text-xs font-medium mb-3 ${
                  isDark ? 'bg-primary-500/20 text-primary-300' : 'bg-primary-100 text-primary-700'
                }`}>
                  {exp.type}
                </div>

                <h4 className="text-2xl md:text-4xl lg:text-5xl translate-y-5 font-bold font-display">{exp.role}</h4>
                <p className={`text-xl md:text-2xl translate-y-5 mb-2 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                  {exp.company}
                </p>
                <p className={`text-base md:text-lg mb-6 translate-y-5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                  {exp.duration} • {exp.location}
                </p>

                <ul className={`space-y-2 mb-4 ${isLeft ? 'md:text-left' : ''} translate-y-10`}>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className={`text-base md:text-lg flex items-start gap-3 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                      <span className="text-primary-400 mt-1 shrink-0">▸</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-start' : ''}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[12px] md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-xl translate-y-20 translate-x-7 font-mono ${
                        isDark ? 'bg-white/5 text-white/60' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
