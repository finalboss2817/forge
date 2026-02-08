
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-32 px-4">
      {/* Background Large Text for Branding */}
      <div className="absolute top-1/2 left-0 w-full text-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[25vw] leading-none whitespace-nowrap">MEENA TECH</span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left order-2 lg:order-1">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-cyan-950/40 border-2 border-cyan-400 text-cyan-200 text-xs font-black mb-10 animate-float shadow-[0_0_40px_rgba(34,211,238,0.3)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
            <span className="tracking-[0.4em] uppercase glow-text">OFFICIAL VENTURE BY MEENA TECHNOLOGIES</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-10">
            FORGE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">LIMITLESS.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-100 mb-12 leading-relaxed max-w-xl font-bold">
            Premier hardware engineering <br/> 
            <span className="meena-gradient text-3xl md:text-4xl block mt-2">By Meena Technologies.</span>
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onCtaClick}
              className="group relative px-12 py-7 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
            >
              <div className="relative z-10 flex items-center space-x-3">
                <span className="tracking-widest uppercase text-sm">Initialize Architect</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
            <a href="#archive" className="px-12 py-7 border-2 border-white/40 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center space-x-3 backdrop-blur-sm">
              <span>View Archive</span>
            </a>
          </div>
        </div>

        {/* 3D Visual Elements */}
        <div className="relative order-1 lg:order-2 perspective-[2000px] flex justify-center items-center py-10 lg:py-0">
          <div className="relative w-full max-w-[350px] lg:max-w-none aspect-square animate-float scale-75 sm:scale-90 lg:scale-100">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 sm:w-80 sm:h-96 glass-card rounded-[2.5rem] p-6 border-cyan-400/50 transform rotateX(15deg) rotateY(-20deg) shadow-[0_0_60px_rgba(34,211,238,0.25)] overflow-hidden">
              <div className="h-32 sm:h-40 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 flex items-center justify-center relative overflow-hidden">
                 <div className="text-4xl relative z-10">⚡</div>
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
              <div className="h-4 w-3/4 bg-white/10 rounded-full mb-3" />
              <div className="h-4 w-1/2 bg-white/10 rounded-full mb-8" />
              <div className="grid grid-cols-3 gap-2">
                {[1,2,3].map(i => <div key={i} className="h-8 bg-white/5 rounded-lg border border-white/5" />)}
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.6em] whitespace-nowrap glow-text">MEENA TECH MASTERPIECE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
