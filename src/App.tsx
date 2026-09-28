import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Integration from './components/Integration';
import Process from './components/Process';
import Innovation from './components/Innovation';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'integration', 'process', 'innovation', 'stats', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections.reverse()) {
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
    window.addEventListener('mousemove', handleMouseMove);
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
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-base">
      <ScrollProgress />
      <div className="spotlight fixed inset-0 pointer-events-none z-0" />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <Integration />
        <Process />
        <Innovation />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
