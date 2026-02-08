import React, { useState } from 'react';
import { commonIssues } from '../services/buildData';

const DiagnosticMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = commonIssues.filter(i => 
    i.symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="diagnostics" className="max-w-7xl mx-auto px-6 py-32 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-display text-5xl font-black uppercase tracking-tighter">FAILSAFE <span className="text-red-600">PROTOCOL</span></h2>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-2">Hardware Error Database // Local Host</p>
        </div>
        <div className="w-full md:w-96 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="INPUT SYMPTOM_DATA..."
            className="w-full bg-zinc-900 border border-white/10 px-6 py-4 text-white font-mono text-sm focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 animate-pulse"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
        {filteredIssues.length > 0 ? filteredIssues.map((issue, idx) => (
          <div key={idx} className="bg-black p-10 hover:bg-zinc-900 transition-all group">
            <div className="flex justify-between items-start mb-8">
              <span className={`font-mono text-[9px] px-3 py-1 font-black uppercase tracking-widest border ${
                issue.difficulty === 'Low' ? 'border-zinc-800 text-zinc-500' :
                issue.difficulty === 'Medium' ? 'border-red-900/50 text-red-700' :
                'border-red-600 text-red-600'
              }`}>
                DIFF: {issue.difficulty}
              </span>
              <span className="font-mono text-xs text-zinc-800">#ERR_{idx + 100}</span>
            </div>
            <h3 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tighter italic">{issue.symptom}</h3>
            <div className="p-6 bg-zinc-900 border-l-2 border-red-600 mb-8">
              <p className="font-mono text-xs text-zinc-400 leading-relaxed">
                <span className="text-white font-bold block mb-1">REMEDIATION:</span> {issue.solution}
              </p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/919820567505', '_blank')}
              className="font-mono text-[10px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-red-500 transition-colors"
            >
              [ CONNECT_ENGINEER ]
            </button>
          </div>
        )) : (
          <div className="col-span-full py-32 text-center bg-black">
             <p className="font-mono text-xs text-zinc-700 uppercase tracking-widest">ERROR: No match in hardware repository.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiagnosticMatrix;