import { lazy, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ScrollProgress from './components/layout/ScrollProgress';
import LoadingScreen from './components/layout/LoadingScreen';
import CustomCursor from './components/layout/CustomCursor';
import ParticleBackground from './components/ui/ParticleBackground';
import Footer from './components/layout/Footer';
import personalInfo from './data/personalInfo';
import './index.css';

/* Lazy-load heavier sections for performance */
const About = lazy(() => import('./components/sections/About'));
const SocialLinks = lazy(() => import('./components/sections/SocialLinks'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Scheduler = lazy(() => import('./components/sections/Scheduler'));

/**
 * App - Root component. Assembles all sections into a single-page portfolio.
 */
function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        {/* SEO */}
        <Helmet>
          <title>{personalInfo.name} — {personalInfo.designation}</title>
          <meta name="description" content={personalInfo.tagline} />
          <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.designation}`} />
          <meta property="og:description" content={personalInfo.tagline} />
        </Helmet>

        {/* Loading screen */}
        <LoadingScreen />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Particle background */}
        <ParticleBackground />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>
          <Hero />

          <Suspense fallback={<SectionLoading />}>
            <About />
            <SocialLinks />
            <Projects />
            <Experience />
            {/* <Certifications /> */}
            <Contact />
            <Scheduler />
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </HelmetProvider>
  );
}

/* Simple loading fallback for lazy-loaded sections */
function SectionLoading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
    </div>
  );
}

export default App;
