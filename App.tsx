import React, { useState, useEffect } from 'react';
import { AppSection } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RigArchitect from './components/RigArchitect';
import DiagnosticMatrix from './components/DiagnosticMatrix';
import ServiceSection from './components/ServiceSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppSection;
      if (Object.values(AppSection).includes(hash)) {
        setActiveSection(hash);
      } else if (!hash || hash === 'home') {
        setActiveSection(AppSection.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow pt-20">
        <div id="home">
          <Hero onCtaClick={() => window.location.hash = '#architect'} />
        </div>
        
        <div id="architect">
          <RigArchitect />
        </div>

        <div id="services">
          <ServiceSection />
        </div>

        <div id="archive">
          <Gallery />
        </div>

        <div id="diagnostics">
          <DiagnosticMatrix />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;