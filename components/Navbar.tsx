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

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center font-black text-2xl italic">F</div>
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none">FORGE</span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-red-500 font-bold">BY MEENA TECHNOLOGIES</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                activeSection === item.id ? 'text-red-500' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#architect"
            className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
          >
            GET QUOTE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-3xl font-black uppercase tracking-tighter text-white hover:text-red-500"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#architect"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-4 bg-red-600 text-white font-black text-center uppercase tracking-widest"
          >
            START BUILD
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;