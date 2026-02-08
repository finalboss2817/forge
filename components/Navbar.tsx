
import React from 'react';
import { AppSection } from '../types';

interface NavbarProps {
  activeSection: AppSection;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Architect', id: 'architect' },
    { label: 'Archive', id: 'gallery' },
    { label: 'Services', id: 'services' },
    { label: 'Diagnostics', id: 'diagnostics' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="glass-card rounded-2xl border-white/10 px-6 h-16 flex items-center justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
        <a href="#home" className="flex items-center space-x-4 group min-w-fit">
          <div className="w-11 h-11 bg-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0">
            <span className="text-slate-950 font-black text-2xl">F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-2xl tracking-tighter">FORGE</span>
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">By Meena Technologies</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id === 'gallery' ? 'archive' : item.id}`}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-cyan-400 ${
                activeSection === (item.id === 'gallery' ? 'archive' : item.id) ? 'text-cyan-400' : 'text-slate-400'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#architect"
            className="px-6 py-2.5 bg-cyan-500 text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          >
            START BUILD
          </a>
        </div>

        <button className="md:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl">
          <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
