import { useEffect, useRef, useState, Component, type ReactNode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Integration from './components/Integration';
import Process from './components/Process';
import Innovation from './components/Innovation';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Error Boundary
interface ErrorState { hasError: boolean; error?: Error }

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorState> {
  state: ErrorState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-base flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>
            </div>
            <h1 className="font-heading text-2xl font-bold text-white mb-3">Something went wrong</h1>
            <p className="text-text-secondary mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-light transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Loading complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      const loader = document.getElementById('app-loader');
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 500);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'integration', 'process', 'innovation', 'testimonials', 'faq', 'stats', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <ErrorBoundary>
      <div ref={mainRef} className="relative min-h-screen bg-base">
        {/* Skip to main content */}
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <ScrollProgress />
        <div className="spotlight fixed inset-0 z-0" />
        <Navbar activeSection={activeSection} />
        
        <main id="main-content">
          <Hero />
          <div className="section-divider" />
          <Services />
          <div className="section-divider" />
          <Integration />
          <div className="section-divider" />
          <Process />
          <div className="section-divider" />
          <Innovation />
          <div className="section-divider" />
          <Testimonials />
          <div className="section-divider" />
          <FAQ />
          <div className="section-divider" />
          <Stats />
          <div className="section-divider" />
          <Contact />
        </main>
        <Footer />
        <CookieConsent />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
