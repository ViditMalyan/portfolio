import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import projectsData from '../../data/projects';

/**
 * ProjectModal - Expanded project view with details, carousel, and links.
 */
function ProjectModal({ project, onClose }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Close on Escape key
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
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl ${
          isDark ? 'bg-surface-dark-2 border border-white/10' : 'bg-white border border-gray-200'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
            isDark ? 'hover:bg-white/10 text-white/70' : 'hover:bg-gray-100 text-gray-500'
          }`}
          aria-label="Close modal"
        >
          <HiX size={24} />
        </button>

        {/* Cover image area */}
        <div className="h-50 md:h-64 rounded-t-2xl relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${
              isDark ? '#1a1a2e, #2d1b69' : '#e0e7ff, #c7d2fe'
            })`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <HiCode className="text-6xl opacity-20" />
          </div>
          {/* Image carousel if screenshots exist */}
          {project.screenshots && project.screenshots.length > 0 && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="h-full"
            >
              {project.screenshots.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">{project.title}</h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  isDark ? 'bg-primary-500/20 text-primary-300' : 'bg-primary-100 text-primary-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className={`mb-6 leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            {project.detailedDescription}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold font-display mb-3">✨ Features</h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                  <span className="text-primary-400 mt-0.5">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold font-display mb-3">🧩 Challenges</h4>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
                    <span className="text-accent-400 mt-0.5">▸</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold font-display mb-3">🛠 Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-xs rounded-xl font-mono ${
                    isDark ? 'bg-white/5 text-white/70 border border-white/10' : 'bg-gray-100 text-gray-600 border border-gray-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
              >
                <HiExternalLink /> Live Demo
              </a>
            )}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isDark ? 'border border-white/20 text-white/70 hover:bg-white/5' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                📄 Docs
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * ProjectCard - Premium animated card with tilt effect on hover.
 */
function ProjectCard({ project, onClick, index }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <div className={`group h-full rounded-2xl overflow-hidden transition-all duration-500 ${
        isDark
          ? 'bg-white/5 border border-white/10 hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5'
          : 'bg-white border border-gray-200 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-200/30'
      }`}>
        {/* Cover image area */}
        <div className="h-56 md:h-64 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${
              ['#6366f1, #a855f7', '#a855f7, #ec4899', '#00d4ff, #6366f1', '#00ff88, #00d4ff', '#ff6b6b, #ffa07a', '#6366f1, #00d4ff'][index % 6]
            })`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-300">
            <HiCode className="text-5xl text-white" />
          </div>
          {/* Featured badge */}
          {project.featured && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
              Featured
            </span>
          )}
        </div>

        {/* Card content */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold font-display mb-3 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className={`text-sm md:text-base mb-4 line-clamp-2 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isDark ? 'bg-white/5 text-white/50' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`text-[10px] px-2 py-0.5 rounded-lg font-mono ${
                  isDark ? 'bg-primary-500/10 text-primary-300' : 'bg-primary-50 text-primary-600'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className={`text-[10px] px-2 py-0.5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Projects - Main projects section with card grid and detail modal.
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        title="Projects"
        subtitle="Explore my latest work and side projects"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
