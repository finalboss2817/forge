
import React, { useState } from 'react';
import { getBuildSuggestion } from '../services/gemini';
import { BuildRecommendation } from '../types';
import LeadModal from './LeadModal';

const RigArchitect: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<BuildRecommendation | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setLoading(true);
    setRecommendation(null);
    try {
      const result = await getBuildSuggestion(prompt);
      setRecommendation(result);
    } catch (error: any) {
      console.error("Architect Error:", error);
      const errorMsg = error?.message || "";
      if (errorMsg.includes("API key must be set") || errorMsg.includes("403") || errorMsg.includes("entity was not found")) {
        if (window.aistudio?.openSelectKey) {
          alert("Meena Tech Forge requires a linked API key. Please select your project in the next dialog.");
          await window.aistudio.openSelectKey();
        } else {
          alert("API Key is missing. Please ensure process.env.API_KEY is configured.");
        }
      } else {
        alert("Neural link interrupted. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="architect" className="max-w-7xl mx-auto px-4 py-20 relative">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Input Terminal */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-10 rounded-[3rem] border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <h2 className="font-display text-4xl font-bold mb-6 tracking-tight">SILICON <span className="text-cyan-400">ARCHITECT</span></h2>
            <p className="text-slate-400 mb-10 leading-relaxed">Submit your performance parameters. Our AI will forge a part-perfect matrix for your specific workflow.</p>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Tell us about your goals (e.g. 1440p gaming at 144Hz, heavy rendering, budget ₹1.5L)"
                  className="w-full h-48 bg-slate-950/50 border border-white/5 rounded-[2rem] p-8 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none placeholder:text-slate-600"
                />
                <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-[10px] font-bold text-slate-600 uppercase">
                  <span>Neural Context: Active</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              </div>

              <button
                disabled={loading}
                className="w-full py-5 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 shadow-[0_20px_40px_rgba(6,182,212,0.15)]"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-slate-950" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>INITIALIZING...</span>
                  </>
                ) : (
                  <span>EXECUTE COMPILATION</span>
                )}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Latency', val: '0.4ms' },
              { label: 'Success', val: '99.8%' },
              { label: 'Uptime', val: '24/7' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl text-center border-white/5">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">{stat.label}</div>
                <div className="font-display font-bold text-cyan-500">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Output Terminal */}
        <div className="lg:col-span-7 h-full">
          <div className={`h-full min-h-[600px] glass-card rounded-[3rem] border-white/5 relative overflow-hidden flex flex-col transition-all duration-700 ${recommendation ? 'border-cyan-500/20' : ''}`}>
            
            {loading && (
              <div className="absolute inset-0 z-20 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center flex-col space-y-6">
                <div className="relative w-24 h-24">
                   <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping"></div>
                   <div className="absolute inset-2 border-2 border-cyan-500 rounded-full animate-spin"></div>
                </div>
                <p className="font-display font-bold text-cyan-400 tracking-[0.3em] uppercase">Forging Architecture</p>
              </div>
            )}

            {recommendation ? (
              <div className="p-10 flex flex-col h-full animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-8">
                  <div>
                    <h3 className="font-display text-4xl font-bold text-white mb-2">{recommendation.buildTitle}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded-full border border-cyan-500/20">{recommendation.targetPerformance}</span>
                      <span className="text-slate-500 text-xs">• Mumbai Fulfillment</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Estimated Cost</div>
                    <div className="text-3xl font-bold font-display text-cyan-400">{recommendation.totalEstimate}</div>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-10 italic text-sm">"{recommendation.summary}"</p>

                <div className="grid sm:grid-cols-2 gap-6 flex-grow overflow-y-auto pr-2 custom-scrollbar max-h-[400px]">
                  {recommendation.parts.map((part, idx) => (
                    <div key={idx} className="glass-card p-5 rounded-2xl border-white/5 hover:border-cyan-500/20 transition-all group">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[9px] font-black text-cyan-500/60 uppercase tracking-widest">{part.category}</span>
                          <span className="text-[10px] text-slate-500">{part.priceEstimate}</span>
                       </div>
                       <div className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors mb-1">{part.name}</div>
                       <div className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">{part.reasoning}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <button 
                    onClick={() => setIsLeadModalOpen(true)}
                    className="w-full py-6 bg-white text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 transition-all hover:scale-[1.01] flex items-center justify-center space-x-3 shadow-[0_15px_40px_rgba(255,255,255,0.1)]"
                  >
                    <span className="text-lg">REQUEST ASSEMBLY QUOTE</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="m-auto text-center p-12 space-y-8 flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full border-4 border-dashed border-white/10 animate-[spin_10s_linear_infinite] flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-4xl">⚙️</div>
                 </div>
                 <div className="space-y-2">
                   <h4 className="font-display text-xl font-bold text-slate-500">SYSTEM IDLE</h4>
                   <p className="text-slate-600 text-sm max-w-xs">Awaiting performance parameters to initiate the silicon forge sequence.</p>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <LeadModal 
        isOpen={isLeadModalOpen} 
        onClose={() => setIsLeadModalOpen(false)} 
        build={recommendation}
      />
    </section>
  );
};

export default RigArchitect;
