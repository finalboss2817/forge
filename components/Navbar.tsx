
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
      <div className="glass-card rounded-2xl border-white/20 px-6 h-18 flex items-center justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
        <a href="#home" className="flex items-center space-x-5 group min-w-fit py-2">
          <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_30px_rgba(6,182,212,0.6)] shrink-0">
            <span className="text-slate-950 font-black text-3xl">F</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-3xl tracking-tighter">FORGE</span>
            <span className="text-[11px] font-black uppercase tracking-[0.15em] meena-gradient glow-text">By Meena Technologies</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id === 'gallery' ? 'archive' : item.id}`}
              className={`text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:text-cyan-400 hover:glow-text ${
                activeSection === (item.id === 'gallery' ? 'archive' : item.id) ? 'text-cyan-400 glow-text' : 'text-slate-400'
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

        <button className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
