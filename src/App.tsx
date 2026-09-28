import { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Integration from './components/Integration';
import Innovation from './components/Innovation';
import About from './components/About';
import Process from './components/Process';
import Industries from './components/Industries';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Hero = lazy(() => import('./components/Hero'));

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loader = document.getElementById('app-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
      }, 400);
    }

    // Intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text relative">
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="h-screen w-full bg-bg flex items-center justify-center">
            <div className="w-8 h-8 border border-white/20 border-t-white/70 rounded-full animate-spin" />
          </div>
        }>
          <Hero />
        </Suspense>
        <Services />
        <Projects />
        <Integration />
        <Innovation />
        <About />
        <Process />
        <Industries />
        <Team />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
