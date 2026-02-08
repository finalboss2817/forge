
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      try {
        const hash = window.location.hash.replace('#', '') as AppSection;
        if (Object.values(AppSection).includes(hash)) {
          setActiveSection(hash);
        }
      } catch (e) {
        console.error("Navigation error:", e);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderHome = () => (
    <>
      <div id="home"><Hero onCtaClick={() => window.location.hash = '#architect'} /></div>
      <RigArchitect />
      <ServiceSection />
      <Gallery />
      <DiagnosticMatrix />
    </>
  );

  const renderContent = () => {
    try {
      switch (activeSection) {
        case AppSection.HOME:
          return renderHome();
        case AppSection.ARCHITECT:
          return <RigArchitect />;
        case AppSection.DIAGNOSTICS:
          return <DiagnosticMatrix />;
        case AppSection.SERVICES:
          return <ServiceSection />;
        case AppSection.GALLERY:
          return <Gallery />;
        default:
          return renderHome();
      }
    } catch (e) {
      console.error("Content rendering error:", e);
      return <div className="p-20 text-center text-cyan-500 font-bold">System Reboot Required. Please refresh.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow pt-10">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
