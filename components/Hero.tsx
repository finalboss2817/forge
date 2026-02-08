import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-2 rounded-lg bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-6 tracking-widest uppercase">
            Official Meena Technologies Venture
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl font-black leading-none tracking-tighter mb-6">
            FORGE <br/>
            <span className="text-cyan-500">LIMITLESS.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
            Professional PC building and hardware solutions engineered for performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-5 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-white transition-colors uppercase tracking-widest text-sm"
            >
              Start Build
            </button>
            <a href="#archive" className="w-full sm:w-auto px-10 py-5 border border-white/20 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors text-center">
              View Archive
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 glass-card p-8">
            <div className="h-full w-full bg-gradient-to-br from-cyan-900/20 to-slate-900 rounded-2xl flex flex-col items-center justify-center space-y-4">
              <div className="text-6xl">⚡</div>
              <div className="text-center">
                <div className="font-display font-black text-2xl mb-1">PREMIUM HARDWARE</div>
                <div className="text-slate-500 text-xs tracking-widest uppercase">Verified by Meena Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;