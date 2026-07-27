import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink, HiCalendar, HiBadgeCheck } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import certificationsData from '../../data/certifications';

/**
 * CertModal - Certificate preview modal.
 */
function CertModal({ cert, onClose }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-3xl p-8 ${
          isDark ? 'bg-surface-dark-2 border border-white/10' : 'bg-white border border-gray-200'
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isDark ? 'hover:bg-white/10 text-white/70' : 'hover:bg-gray-100 text-gray-500'
          }`}
          aria-label="Close"
        >
          <HiX size={20} />
        </button>

        {/* Certificate preview area */}
        <div className="h-48 rounded-2xl mb-6 flex items-center justify-center"
          style={{
            background: isDark
              ? 'linear-gradient(135deg, #1a1a2e, #2d1b69)'
              : 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
          }}
        >
          <HiBadgeCheck className="text-6xl text-primary-400 opacity-50" />
        </div>

        <h3 className="text-xl font-bold font-display mb-1">{cert.name}</h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
          {cert.organization} • {cert.completionDate}
        </p>

        <div className={`text-xs font-mono mb-4 px-3 py-2 rounded-xl ${
          isDark ? 'bg-white/5 text-white/50' : 'bg-gray-50 text-gray-500'
        }`}>
          Credential ID: {cert.credentialId}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((s) => (
            <span key={s} className={`text-xs px-3 py-1 rounded-full ${
              isDark ? 'bg-primary-500/20 text-primary-300' : 'bg-primary-100 text-primary-700'
            }`}>
              {s}
            </span>
          ))}
        </div>

        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            <HiExternalLink /> Verify Certificate
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

/**
 * Certifications - Elegant certificate cards with preview modal.
 */
export default function Certifications() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <SectionWrapper id="certifications">
      <SectionTitle title="Certifications" subtitle="Courses and certifications I've completed" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedCert(cert)}
            className={`cursor-pointer group rounded-2xl overflow-hidden transition-all duration-300 ${
              isDark
                ? 'bg-white/5 border border-white/10 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5'
                : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg'
            }`}
          >
            {/* Card header with gradient */}
            <div className="h-32 relative flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${
                  ['#6366f1, #a855f7', '#a855f7, #ec4899', '#00d4ff, #6366f1'][index % 3]
                })`,
              }}
            >
              <HiBadgeCheck className="text-4xl text-white/50 group-hover:text-white/70 transition-all" />
            </div>

            <div className="p-6">
              <h4 className="font-bold font-display mb-2 text-base md:text-lg group-hover:text-primary-400 transition-colors">
                {cert.name}
              </h4>
              <p className={`text-xs mb-3 ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
                {cert.organization}
              </p>
              <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                <HiCalendar className="text-sm" />
                {cert.completionDate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  );
}
