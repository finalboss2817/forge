import React, { useState, useMemo } from 'react';
import { getBuildByBudget } from '../services/buildData';
import LeadModal from './LeadModal';

const RigArchitect: React.FC = () => {
  const [budget, setBudget] = useState(70000);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const recommendation = useMemo(() => getBuildByBudget(budget), [budget]);

  return (
    <section id="architect" className="max-w-7xl mx-auto px-6 py-32">
      <div className="border-l-4 border-red-600 pl-6 mb-16">
        <h2 className="font-display text-5xl font-black uppercase tracking-tighter">THE ARCHITECT</h2>
        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-2">v4.0 // Component Optimization Engine</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-0 border border-white/10">
        {/* Input */}
        <div className="lg:col-span-5 p-12 bg-zinc-950 border-r border-white/10">
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-widest">Budget Parameter</span>
              <span className="text-4xl font-display font-black text-white italic">₹{budget.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="10000" 
              max="200000" 
              step="5000"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600"
            />
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-white/5 bg-white/5">
              <h4 className="font-mono text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-2">Build Target</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{recommendation.summary}</p>
            </div>
            <div className="flex items-center space-x-4">
               <div className="w-3 h-3 bg-red-600 animate-pulse"></div>
               <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Engine Status: Optimal</span>
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-7 p-12 bg-black flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter italic">{recommendation.buildTitle}</h3>
              <span className="font-mono text-[10px] px-3 py-1 border border-red-500/50 text-red-500 uppercase font-bold mt-2 inline-block">PERF_INDEX: {recommendation.targetPerformance}</span>
            </div>
          </div>

          <div className="space-y-2 mb-12">
            {recommendation.parts.map((part, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 border border-white/5 hover:border-white/20 transition-all bg-zinc-900/20">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-red-600 font-black uppercase tracking-widest">{part.category}</span>
                  <span className="text-sm font-bold text-white uppercase">{part.name}</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">{part.priceEstimate}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsLeadModalOpen(true)}
            className="mt-auto w-full py-5 bg-white text-black font-black text-sm uppercase tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all"
          >
            TRANSMIT SPECS
          </button>
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