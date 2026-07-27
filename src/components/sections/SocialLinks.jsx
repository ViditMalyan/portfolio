import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper, { SectionTitle } from '../common/SectionWrapper';
import socialLinksData from '../../data/socialLinks';

/**
 * SocialLinks - Grid of animated social platform icons with tooltips and platform colors.
 */
export default function SocialLinks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SectionWrapper id="social">
      <SectionTitle title="Connect With Me" subtitle="Find me across the web" />

      <div className="flex flex-wrap justify-center gap-12 mt-8 max-w-full mx-auto">
        {socialLinksData.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{
              scale: 1.2,
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
            className={`group relative flex items-center justify-center w-25 h-25 md:w-20 md:h-20 rounded-2xl transition-all duration-300 ${
              isDark
                ? 'bg-white/5 border border-white/10 hover:border-white/20'
                : 'bg-white border border-gray-200 hover:shadow-lg'
            }`}
            style={{
              '--hover-color': isDark ? social.darkColor : social.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = isDark ? social.darkColor : social.color;
              e.currentTarget.style.boxShadow = `0 0 20px ${(isDark ? social.darkColor : social.color)}30`;
              e.currentTarget.querySelector('svg').style.color = isDark ? social.darkColor : social.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
              e.currentTarget.querySelector('svg').style.color = '';
            }}
            aria-label={`Visit ${social.name}`}
          >
            <social.icon
              className={`text-2xl md:text-3xl transition-colors duration-300 ${
                isDark ? 'text-white/60' : 'text-gray-500'
              }`}
            />
            {/* Tooltip */}
            <span className={`absolute -bottom-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
              isDark ? 'bg-white/10 text-white/80 backdrop-blur-sm' : 'bg-gray-800 text-white'
            }`}>
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
