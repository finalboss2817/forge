
import React, { useState, useMemo } from 'react';
import { getBuildByBudget } from '../services/buildData';
import LeadModal from './LeadModal';

const RigArchitect: React.FC = () => {
  const [budget, setBudget] = useState(50000);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const recommendation = useMemo(() => getBuildByBudget(budget), [budget]);

  return (
    <section id="architect" className="max-w-7xl mx-auto px-4 py-20 relative">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Input Terminal */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-10 rounded-[3rem] border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <h2 className="font-display text-4xl font-bold mb-6 tracking-tight uppercase">THE <span className="text-cyan-400">ARCHITECT</span></h2>
            <p className="text-slate-400 mb-10 leading-relaxed">Select your investment range. Our hardware matrix instantly adjusts components for maximum efficiency.</p>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Budget Limit</span>
                  <span className="text-3xl font-display font-black text-cyan-400">₹{budget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="200000" 
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-600">
                  <span>₹10,000</span>
                  <span>₹2,00,000</span>
                </div>
              </div>

              <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                 <div className="flex items-center space-x-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">Architectural Insight</span>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed italic">
                    "At this bracket, we prioritize {budget < 60000 ? 'core processing stability' : 'GPU throughput'} to ensure zero bottlenecks in 2024 workflows."
                 </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Precision', val: '100%' },
              { label: 'Latency', val: '0ms' },
              { label: 'Local', val: 'OFFLINE' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl text-center border-white/5 hover:border-cyan-500/30 transition-all">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">{stat.label}</div>
                <div className="font-display font-bold text-cyan-500">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Output Terminal */}
        <div className="lg:col-span-7 h-full">
          <div className="h-full min-h-[600px] glass-card rounded-[3rem] border-cyan-500/10 relative overflow-hidden flex flex-col transform perspective-[1000px] hover:rotateY-[-2deg] transition-all duration-500">
            
            <div className="p-10 flex flex-col h-full animate-in fade-in slide-in-from-right-10 duration-500">
              <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-8">
                <div>
                  <h3 className="font-display text-4xl font-bold text-white mb-2 uppercase tracking-tighter">{recommendation.buildTitle}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded-full border border-cyan-500/20">{recommendation.targetPerformance}</span>
                    <span className="text-slate-500 text-xs">• Instant Validation</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">Target Total</div>
                  <div className="text-3xl font-bold font-display text-cyan-400">{recommendation.totalEstimate}</div>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-10 italic text-sm">"{recommendation.summary}"</p>

              <div className="grid sm:grid-cols-2 gap-6 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                {recommendation.parts.map((part, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-2xl border-white/5 hover:bg-white/5 hover:border-cyan-500/30 transition-all group">
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
                  className="w-full py-6 bg-white text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 transition-all hover:scale-[1.01] flex items-center justify-center space-x-3 shadow-[0_15px_40px_rgba(255,255,255,0.1)] group"
                >
                  <span className="text-lg">REQUEST ASSEMBLY QUOTE</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
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
