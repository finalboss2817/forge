
import React, { useState } from 'react';
import { getDiagnosticMatrix } from '../services/gemini';
import { DiagnosticResult } from '../types';

const DiagnosticMatrix: React.FC = () => {
  const [issue, setIssue] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<DiagnosticResult | null>(null);

  const handleDiagnose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issue.trim()) return;
    setLoading(true);
    try {
      const result = await getDiagnosticMatrix(issue);
      setReport(result);
    } catch (error) {
      console.error(error);
      alert("Diagnostic failure. Retry signal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostics" className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">DIAGNOSTIC <span className="text-cyan-500">MATRIX</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Instant expert analysis for hardware malfunctions, driver conflicts, or performance bottlenecks. Input your symptoms below.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleDiagnose} className="flex flex-col sm:flex-row gap-4 mb-12">
          <input
            type="text"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="e.g., PC boots but screen remains black, single long beep..."
            className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
          />
          <button
            disabled={loading}
            className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all disabled:opacity-50 shadow-[0_10px_30px_rgba(255,255,255,0.05)]"
          >
            {loading ? 'ANALYZING...' : 'RUN SCAN'}
          </button>
        </form>

        {report && (
          <div className="grid md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold font-display text-cyan-400 mb-4 uppercase">TECHNICIAN'S SUMMARY</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{report.problemSummary}</p>
                
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">POSSIBLE CAUSES</h4>
                <ul className="space-y-2">
                  {report.possibleCauses.map((cause, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <h3 className="text-xl font-bold font-display text-blue-400 mb-4 uppercase">RECOVERY PROTOCOL</h3>
                <div className="space-y-4">
                  {report.suggestedSteps.map((step, i) => (
                    <div key={i} className="flex space-x-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                        {i + 1}
                      </span>
                      <p className="text-sm text-slate-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                <span className="text-xs text-slate-500 block mb-2 uppercase font-bold tracking-widest">REPAIR DIFFICULTY</span>
                <span className={`text-2xl font-bold font-display ${
                  report.difficulty === 'Low' ? 'text-green-400' :
                  report.difficulty === 'Medium' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {report.difficulty.toUpperCase()}
                </span>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-2xl text-white shadow-xl">
                <h4 className="font-bold mb-2">Need Pro Help?</h4>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">Our senior technicians at <b>Meena Technologies</b> can handle this fix remotely or on-site.</p>
                <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-xs hover:bg-slate-100 transition-colors uppercase tracking-widest">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiagnosticMatrix;
