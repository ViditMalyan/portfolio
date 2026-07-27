import { motion } from 'framer-motion';
import { HiCalendar, HiExternalLink } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import personalInfo from '../../data/personalInfo';

/**
 * Scheduler - Meeting scheduler with Calendly embed or fallback info card.
 */
export default function Scheduler() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const hasCalendly = personalInfo.calendlyUrl && personalInfo.calendlyUrl.length > 0;

  return (
    <SectionWrapper id="scheduler">
      <SectionTitle title="Schedule a Meeting" subtitle="Let's connect and discuss your ideas" />

      <div className="w-full max-w-full mx-auto">
        {hasCalendly ? (
          /* Calendly Embed */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl overflow-hidden ${
              isDark ? 'border border-white/10' : 'border border-gray-200'
            }`}
          >
            <iframe
              src={personalInfo.calendlyUrl}
              width="100%"
              height="800"
              frameBorder="0"
              title="Schedule a meeting"
              loading="lazy"
              className="w-full"
            />
          </motion.div>
        ) : (
          /* Fallback - Info card */
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 25 }}
            viewport={{ once: true }}
            className={`text-center h-150 p-20 md:p-32 rounded-[3rem] ${
              isDark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center justify-center translate-y-5 w-32 h-32 md:w-40 md:h-40 rounded-full mb-10"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
              }}
            >
              <HiCalendar className="text-6xl md:text-7xl text-white" />
            </motion.div>

            <h3 className="text-4xl md:text-7xl translate-y-30 font-bold font-display mb-8 leading-tight">
              Let's Find a <span className="gradient-text">Time to Chat</span>
            </h3>
            <p className={`text-xl md:text-2xl mb-14 translate-y-40 max-w-full mx-auto leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center pt-5 justify-center gap-8">
              <a
                href={`mailto:${personalInfo.email}?subject=Meeting Request`}
                className="px-10 py-6 md:px-14 md:py-8 translate-y-65 rounded-full font-medium text-xl md:text-2xl text-white flex items-center gap-3 transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
              >
                <HiCalendar /> Request a Meeting
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`px-10 py-6 md:px-14 md:py-8 translate-y-65 rounded-full font-medium text-xl md:text-2xl flex items-center gap-3 transition-all ${
                  isDark
                    ? 'border border-white/20 text-white/70 hover:bg-white/5'
                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <HiExternalLink /> Email Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
