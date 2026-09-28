import { useEffect, useState, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Integration from './components/Integration';
import Innovation from './components/Innovation';
import About from './components/About';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load Hero (contains Three.js/R3F - heavy)
const Hero = lazy(() => import('./components/Hero'));

function App() {
  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Hide loader
    const loader = document.getElementById('app-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
      }, 500);
    }

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-base min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={
          <div className="h-screen w-full bg-base flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-white/10 border-t-accent rounded-full animate-spin" />
          </div>
        }>
          <Hero />
        </Suspense>
        <Services />
        <Projects />
        <Integration />
        <Innovation />
        <About />
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
