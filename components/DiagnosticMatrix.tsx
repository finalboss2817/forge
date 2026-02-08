import React, { useState } from 'react';
import { commonIssues } from '../services/buildData';

const DiagnosticMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIssues = commonIssues.filter(i => 
    i.symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="diagnostics">
      <div className="container">
        <div className="matrix-header">
          <div>
            <h2 style={{ fontSize: '42px', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-2px' }}>
              FAILSAFE <span style={{ color: 'var(--accent)' }}>PROTOCOL</span>
            </h2>
            <p className="font-mono" style={{ color: 'var(--text-dim)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '10px' }}>
              Hardware Diagnostic Repository // Ver 4.0.1
            </p>
          </div>

          <div className="search-container">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="SEARCH_SYMPTOMS..."
              className="search-input"
            />
          </div>
        </div>

        <div className="matrix-grid">
          {filteredIssues.length > 0 ? (
            filteredIssues.map((issue, idx) => (
              <div key={idx} className="matrix-card">
                <div className="status-indicator">
                  <div className={`dot ${issue.difficulty === 'High' ? 'pulse' : ''}`}></div>
                  <span>Difficulty: {issue.difficulty}</span>
                </div>
                
                <h3 className="font-display" style={{ fontSize: '24px', margin: '0 0 25px 0', textTransform: 'uppercase', fontStyle: 'italic' }}>
                  {issue.symptom}
                </h3>
                
                <div style={{ 
                  background: '#150000', 
                  borderLeft: '2px solid var(--accent)', 
                  padding: '20px',
                  marginBottom: '30px'
                }}>
                  <p className="font-mono" style={{ margin: 0, fontSize: '12px', color: '#ffaaaa', lineHeight: '1.6' }}>
                    <strong style={{ color: 'white', display: 'block', marginBottom: '5px' }}>SOLUTION:</strong>
                    {issue.solution}
                  </p>
                </div>

                <button 
                  onClick={() => window.open('https://wa.me/919820567505', '_blank')}
                  className="font-mono"
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--text-dim)', 
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    padding: 0
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
                >
                  [ REQUEST_ENGINEER ]
                </button>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', padding: '100px 0', textAlign: 'center', color: 'var(--text-dim)' }}>
              <p className="font-mono" style={{ fontSize: '12px' }}>NO_DATA_MATCH_FOUND</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticMatrix;