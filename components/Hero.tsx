import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-[2px] w-12 bg-red-600"></div>
            <span className="font-mono text-xs font-bold text-red-500 uppercase tracking-[0.3em]">Hardware Division // 01</span>
          </div>
          
          <h1 className="font-display text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-8 uppercase">
            RAW <br/>
            <span className="text-white">POWER.</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl mb-12 max-w-lg font-medium leading-relaxed">
            Meena Technologies presents Forge Customs. High-precision hardware engineering for those who demand absolute system dominance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="px-12 py-5 bg-red-600 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              CONSTRUCT RIG
            </button>
            <a href="#archive" className="px-12 py-5 border border-white/20 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-white/5 text-center transition-all">
              DATA ARCHIVE
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="aspect-square border border-white/10 bg-zinc-900/50 p-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 hazard-strip opacity-20"></div>
             <div className="h-full w-full border border-white/5 flex flex-col items-center justify-center space-y-4">
                <span className="font-mono text-[100px] leading-none text-white/5 font-black">4090</span>
                <div className="text-center">
                   <p className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest">System Architecture</p>
                   <p className="font-display font-black text-2xl text-white uppercase italic tracking-tighter">Verified Integrity</p>
                </div>
             </div>
             <div className="absolute bottom-4 left-4 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
                Lat: 19.2045 | Lng: 72.8522
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;