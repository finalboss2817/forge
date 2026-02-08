
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const FORMSPREE_ID = "xzdabwzz"; 

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          message: "New subscriber for Forge Customs Newsletter",
          _subject: "Forge Customs: New Hardware Network Lead"
        })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-5 mb-10">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.6)] shrink-0">
                <span className="text-slate-950 font-black text-4xl">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-5xl tracking-tighter uppercase leading-none mb-2">FORGE</span>
                <span className="text-base font-black meena-gradient tracking-[0.3em] uppercase glow-text">MEENA TECHNOLOGIES</span>
              </div>
            </div>
            
            <p className="text-slate-200 max-w-sm mb-12 leading-relaxed text-lg font-medium italic">
              "We don't assemble computers. We engineer high-performance silicon legacies."
              <span className="block mt-4 not-italic font-black text-white text-xl">— A Venture by Meena Technologies.</span>
            </p>

            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-cyan-500 uppercase tracking-[0.5em]">JOIN THE HARDWARE NETWORK</h4>
              <form onSubmit={handleSubscribe} className="max-w-md relative group">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your elite contact address..."
                  className="w-full bg-slate-900 border-2 border-white/10 rounded-2xl px-6 py-5 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all pr-40 text-white placeholder:text-slate-600"
                />
                <button 
                  disabled={status === 'loading'}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-cyan-500 text-slate-950 font-black text-[11px] uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-xl"
                >
                  {status === 'loading' ? 'LINKING...' : status === 'success' ? 'LINKED' : 'SUBSCRIBE'}
                </button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-10 text-[12px] uppercase tracking-[0.4em] text-slate-500 border-b border-white/10 pb-4">NAV DECK</h4>
            <ul className="space-y-6 text-base">
              <li><a href="#architect" className="text-slate-400 hover:text-cyan-400 font-black transition-colors flex items-center"><span>RIG ARCHITECT</span></a></li>
              <li><a href="#archive" className="text-slate-400 hover:text-cyan-400 font-black transition-colors flex items-center"><span>THE ARCHIVE</span></a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 font-black transition-colors flex items-center"><span>SERVICES</span></a></li>
              <li><a href="#diagnostics" className="text-slate-400 hover:text-cyan-400 font-black transition-colors flex items-center"><span>DIAGNOSTICS</span></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-10 text-[12px] uppercase tracking-[0.4em] text-slate-500 border-b border-white/10 pb-4">LAB COMMS</h4>
            <ul className="space-y-8 text-base text-slate-300">
              <li className="flex items-start space-x-4 group cursor-pointer" onClick={() => window.location.href="mailto:trivedimanish2803@gmail.com"}>
                <span className="text-2xl">📧</span>
                <span className="group-hover:text-cyan-400 transition-colors font-black border-b border-cyan-500/20">trivedimanish2803@gmail.com</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <span className="text-2xl">📍</span>
                <span className="group-hover:text-white transition-colors font-black">Kandivali East, Mumbai 400101</span>
              </li>
              <li className="flex items-start space-x-4 group cursor-pointer" onClick={() => window.open('https://wa.me/919820567505', '_blank')}>
                <span className="text-2xl">📞</span>
                <span className="group-hover:text-cyan-400 transition-colors font-black text-xl tracking-tighter">+91 98205 67505</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Highlighted Branding Strip */}
        <div className="pt-12 border-t-2 border-cyan-500/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="bg-cyan-500/10 border-2 border-cyan-500/50 px-8 py-3 rounded-full flex items-center space-x-4">
             <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
             <span className="text-white font-black text-sm tracking-[0.2em]">OFFICIAL VENTURE BY MEENA TECHNOLOGIES</span>
          </div>
          <div className="flex space-x-12 text-[11px] font-black tracking-widest uppercase text-slate-500">
            <span className="text-slate-700">EST. 2014</span>
            <span className="text-slate-700">MUMBAI HQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
