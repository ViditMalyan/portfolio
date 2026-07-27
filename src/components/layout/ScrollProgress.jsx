import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgress - Fixed top bar showing page scroll progress.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: 'linear-gradient(90deg, #6366f1, #a855f7, #00d4ff)',
      }}
    />
  );
}
