
import React, { useState } from 'react';
import { commonIssues } from '../services/buildData';

const DiagnosticMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = commonIssues.filter(i => 
    i.symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="diagnostics" className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">HARDWARE <span className="text-cyan-500">ORACLE</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Instant expert documentation for hardware malfunctions and performance bottlenecks. No AI required, just pure engineering data.</p>
      </div>

      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search symptoms (e.g. black screen, blue screen)..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-cyan-500 font-bold text-xs uppercase tracking-widest">Live Search</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredIssues.length > 0 ? filteredIssues.map((issue, idx) => (
          <div key={idx} className="glass-card p-8 rounded-3xl border-white/5 hover:border-cyan-500/20 transition-all group hover:scale-[1.01]">
            <div className="flex justify-between items-start mb-6">
              <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                issue.difficulty === 'Low' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                issue.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                Difficulty: {issue.difficulty}
              </span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">🛠️</div>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">{issue.symptom}</h3>
            <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5 mb-6">
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                <span className="text-cyan-500 font-bold">Solution:</span> {issue.solution}
              </p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/919820567505', '_blank')}
              className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors"
            >
              Consult Senior Tech →
            </button>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center glass-card rounded-3xl">
             <p className="text-slate-500 font-bold uppercase tracking-widest">No matching symptoms in local database. Contact support.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiagnosticMatrix;
