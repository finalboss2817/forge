
import React, { useState } from 'react';
import { AppSection } from '../types';

interface NavbarProps {
  activeSection: AppSection;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Architect', id: 'architect' },
    { label: 'Archive', id: 'archive' },
    { label: 'Services', id: 'services' },
    { label: 'Diagnostics', id: 'diagnostics' },
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    // Standard link behavior with offset adjustment if needed can be handled here
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-6xl px-4">
        <div className="glass-card rounded-2xl border-white/20 px-6 h-18 flex items-center justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative z-[101]">
          <a href="#home" className="flex items-center space-x-5 group min-w-fit py-2" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_30px_rgba(6,182,212,0.6)] shrink-0">
              <span className="text-slate-950 font-black text-2xl md:text-3xl">F</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-xl md:text-3xl tracking-tighter uppercase">FORGE</span>
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] meena-gradient glow-text">By Meena Technologies</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:text-cyan-400 hover:glow-text ${
                  activeSection === item.id ? 'text-cyan-400 glow-text' : 'text-slate-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#architect"
              className="px-8 py-3 bg-cyan-500 text-slate-950 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              START BUILD
            </a>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 transition-colors hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-[-1] transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />
          
          <div className="relative h-full flex flex-col justify-center px-8 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-6">Navigation Deck</p>
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left font-display text-4xl font-black uppercase tracking-tighter transition-all hover:translate-x-4 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-white'
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <a 
                href="#architect"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center w-full py-6 bg-cyan-500 text-slate-950 font-black rounded-2xl text-sm uppercase tracking-widest shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
              >
                INITIALIZE BUILD
              </a>
              <div className="mt-8 flex justify-between items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <span>Est. 2014</span>
                <span className="text-cyan-500">Meena Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
