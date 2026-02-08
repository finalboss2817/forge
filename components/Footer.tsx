
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Updated with the user's specific Formspree ID
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
    <footer className="bg-slate-950 border-t border-white/5 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] shrink-0">
                <span className="text-slate-950 font-black text-3xl">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-4xl tracking-tighter uppercase leading-none mb-1">FORGE</span>
                <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-[0.3em] uppercase">MEENA TECHNOLOGIES</span>
              </div>
            </div>
            
            <p className="text-slate-300 max-w-sm mb-12 leading-relaxed text-base">
              Mumbai's elite PC assembly lab. <br/>
              <span className="text-white font-black text-lg">A Venture by Meena Technologies.</span><br/>
              Engineering high-frequency masterpieces since 2014.
            </p>

            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-cyan-500 uppercase tracking-[0.4em]">Hardware Network Inbound</h4>
              <form onSubmit={handleSubscribe} className="max-w-md relative group">
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Sync your email address..."
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all pr-36 text-white placeholder:text-slate-600"
                />
                <button 
                  disabled={status === 'loading'}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-cyan-500 text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'SENDING...' : status === 'success' ? 'SYNCED' : 'SUBSCRIBE'}
                </button>
                {status === 'success' && (
                  <p className="absolute -bottom-7 left-0 text-[10px] text-cyan-400 font-bold animate-pulse">Transmission successful to Meena Tech HQ.</p>
                )}
                {status === 'error' && (
                  <p className="absolute -bottom-7 left-0 text-[10px] text-red-400 font-bold">Signal lost. Please retry.</p>
                )}
              </form>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.3em] text-slate-500">Navigation</h4>
            <ul className="space-y-5 text-sm">
              <li><a href="#architect" className="text-slate-400 hover:text-cyan-400 font-bold transition-colors">Rig Architect</a></li>
              <li><a href="#archive" className="text-slate-400 hover:text-cyan-400 font-bold transition-colors">The Archive</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 font-bold transition-colors">Services Pipeline</a></li>
              <li><a href="#diagnostics" className="text-slate-400 hover:text-cyan-400 font-bold transition-colors">Diagnostic Matrix</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-[11px] uppercase tracking-[0.3em] text-slate-500">The HQ</h4>
            <ul className="space-y-6 text-sm text-slate-300">
              <li className="flex items-start space-x-3 group cursor-pointer" onClick={() => window.location.href="mailto:trivedimanish2803@gmail.com"}>
                <span className="text-cyan-500 mt-1">📧</span>
                <span className="group-hover:text-cyan-400 transition-colors font-bold">trivedimanish2803@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <span className="text-cyan-500 mt-1">📍</span>
                <span className="group-hover:text-white transition-colors font-bold">Kandivali East, Mumbai 400101</span>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer" onClick={() => window.open('https://wa.me/919820567505', '_blank')}>
                <span className="text-cyan-500 mt-1">📞</span>
                <span className="group-hover:text-cyan-400 transition-colors font-bold">+91 98205 67505</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-black tracking-[0.2em] uppercase text-center md:text-left gap-8">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <span className="text-slate-600">© 2024 FORGE CUSTOMS</span>
            <span className="hidden md:block text-slate-800">|</span>
            <span className="text-white bg-cyan-600 px-3 py-1 rounded">A VENTURE BY MEENA TECHNOLOGIES</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
