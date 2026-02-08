import React, { useState, useMemo } from 'react';
import { getBuildByBudget } from '../services/buildData';
import LeadModal from './LeadModal';

const RigArchitect: React.FC = () => {
  const [budget, setBudget] = useState(70000);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const recommendation = useMemo(() => getBuildByBudget(budget), [budget]);

  return (
    <section id="architect" className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Configuration Panel */}
        <div className="space-y-6">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="font-display text-3xl font-bold mb-2 uppercase">The Architect</h2>
            <p className="text-slate-400 mb-8">Adjust your budget to see optimized component recommendations.</p>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Budget Range</span>
                  <span className="text-2xl font-display font-bold text-cyan-500">₹{budget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="200000" 
                  step="5000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
                 <p className="text-xs text-slate-400 italic">
                    Prioritizing {budget < 60000 ? 'system stability' : 'maximum gaming performance'} for this budget tier.
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="glass-card rounded-2xl overflow-hidden flex flex-col border-cyan-500/20">
          <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-1 uppercase">{recommendation.buildTitle}</h3>
                <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold rounded border border-cyan-500/20">{recommendation.targetPerformance}</span>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-cyan-500">{recommendation.totalEstimate}</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {recommendation.parts.map((part, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-cyan-500 uppercase font-bold">{part.category}</span>
                    <span className="text-sm font-medium">{part.name}</span>
                  </div>
                  <span className="text-xs text-slate-500">{part.priceEstimate}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsLeadModalOpen(true)}
              className="mt-auto w-full py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-500 transition-colors uppercase tracking-widest text-sm"
            >
              Request Quote
            </button>
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