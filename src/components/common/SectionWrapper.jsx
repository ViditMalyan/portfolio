import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * SectionWrapper - Wraps each section with scroll-triggered reveal animation.
 */
export default function SectionWrapper({ children, id, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`section-padding max-w-full mx-auto w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

/**
 * SectionTitle - Consistent section header with gradient accent.
 */
export function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl lg:text-7xl -translate-y-8 font-bold font-display gradient-text inline-block mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl pb-3 -translate-y-4 opacity-70 max-w-full mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
