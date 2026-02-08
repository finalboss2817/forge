
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32 px-4">
      {/* Background Large Text for Branding */}
      <div className="absolute top-1/2 left-0 w-full text-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <span className="font-display font-black text-[25vw] leading-none whitespace-nowrap">MEENA TECH</span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-cyan-950/40 border-2 border-cyan-400/50 text-cyan-200 text-[10px] md:text-xs font-black mb-8 md:mb-10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
            <span className="tracking-[0.3em] uppercase glow-text">OFFICIAL VENTURE BY MEENA TECHNOLOGIES</span>
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8 md:mb-10">
            FORGE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">LIMITLESS.</span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-slate-100 mb-10 md:mb-12 leading-tight max-w-xl mx-auto lg:mx-0 font-bold">
            Premier hardware engineering <br/> 
            <span className="meena-gradient inline-block mt-2">By Meena Technologies.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto group relative px-10 py-6 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
            >
              <div className="relative z-10 flex items-center justify-center space-x-3">
                <span className="tracking-widest uppercase text-xs md:text-sm">Initialize Architect</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
            <a href="#archive" className="w-full sm:w-auto px-10 py-6 border-2 border-white/20 rounded-2xl font-black text-xs md:text-sm tracking-widest uppercase hover:bg-white/10 transition-colors flex items-center justify-center space-x-3 backdrop-blur-sm">
              <span>View Archive</span>
            </a>
          </div>
        </div>

        {/* Improved 3D Visual Elements */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center py-6 lg:py-0 perspective-hero">
          <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-square animate-float">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 md:w-80 md:h-96 glass-card rounded-[2.5rem] p-6 border-cyan-400/40 shadow-[0_0_80px_rgba(34,211,238,0.15)] 
              transform rotateX(8deg) rotateY(-12deg) md:rotateX(15deg) md:rotateY(-20deg) scale-110 md:scale-100 hover:rotateX(0deg) hover:rotateY(0deg) transition-all duration-700 ease-out">
              
              <div className="h-32 md:h-40 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 flex items-center justify-center relative overflow-hidden group/card">
                 <div className="text-4xl md:text-5xl relative z-10 transform group-hover/card:scale-125 transition-transform duration-500">⚡</div>
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                 {/* Shiny Reflection Effect */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="space-y-4">
                <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                <div className="h-4 w-1/2 bg-white/10 rounded-full mb-6" />
                
                <div className="grid grid-cols-3 gap-2 py-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-8 bg-white/5 rounded-lg border border-white/5 flex items-center justify-center">
                       <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap glow-text opacity-80">
                MEENA TECH MASTERPIECE
              </div>
            </div>
            
            {/* Background Glow for Mobile Punch */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] md:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
