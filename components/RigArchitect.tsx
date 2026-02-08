import React, { useState, useMemo } from 'react';
import { getBuildByBudget } from '../services/buildData';
import LeadModal from './LeadModal';

const RigArchitect: React.FC = () => {
  const [budget, setBudget] = useState(70000);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  const recommendation = useMemo(() => getBuildByBudget(budget), [budget]);

  return (
    <section id="architect">
      <div className="container">
        <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '30px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-2px' }}>
            THE <span style={{ color: 'var(--accent)' }}>ARCHITECT</span>
          </h2>
          <p className="font-mono" style={{ color: 'var(--text-dim)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '10px' }}>
            Configuration Engine v2.0 // Real-time Estimation
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div className="card" style={{ padding: '40px' }}>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px' }}>
                <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-dim)' }}>BUDGET_CAP</span>
                <span style={{ fontSize: '32px', fontWeight: 900, color: 'var(--accent)', fontStyle: 'italic' }}>₹{budget.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="200000" 
                step="5000"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
              />
            </div>
            <div className="font-mono" style={{ fontSize: '13px', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              {recommendation.summary}
            </div>
          </div>

          <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '40px' }}>
            <h3 className="font-display" style={{ marginTop: 0, marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '15px', fontSize: '24px', textTransform: 'uppercase' }}>
              {recommendation.buildTitle}
            </h3>
            <div style={{ flexGrow: 1, marginBottom: '30px' }}>
              {recommendation.parts.map((p, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #1a1a1a' }}>
                  <div>
                    <div className="font-mono" style={{ fontSize: '9px', fontWeight: 900, color: 'var(--accent)', letterSpacing: '1px' }}>{p.category}</div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'white' }}>{p.name}</div>
                  </div>
                  <div className="font-mono" style={{ fontSize: '12px', color: 'var(--text-dim)' }}>{p.priceEstimate}</div>
                </div>
              ))}
            </div>
            <button onClick={() => setIsLeadModalOpen(true)} className="btn" style={{ width: '100%' }}>Transmit Inquiry</button>
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