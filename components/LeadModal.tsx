import React, { useState } from 'react';
import { BuildRecommendation } from '../types';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  build: BuildRecommendation | null;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, build }) => {
  const [name, setName] = useState('');
  const [urgency, setUrgency] = useState('Within a week');

  if (!isOpen || !build) return null;

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919820567505"; 
    const message = encodeURIComponent(
      `🔥 *NEW BUILD INQUIRY* 🔥\n\n` +
      `👤 *Client:* ${name}\n` +
      `📅 *Timeline:* ${urgency}\n\n` +
      `🖥️ *Build:* ${build.buildTitle}\n` +
      `💰 *Quote:* ${build.totalEstimate}\n\n` +
      `📋 *Key Components:*\n` +
      build.parts.map(p => `- ${p.category}: ${p.name}`).join('\n') +
      `\n\nI'm interested in starting this assembly. Please advise on next steps!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
          <h3 className="font-display" style={{ fontSize: '28px', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
            FINALIZE <span style={{ color: 'var(--accent)' }}>QUOTE</span>
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '24px' }}>&times;</button>
        </div>
        
        <p style={{ color: 'var(--text-dim)', fontSize: '13px', marginBottom: '40px' }}>
          Specifications locked. One of our engineers will finalize logistics with you via secure WhatsApp channel.
        </p>
        
        <div className="form-group">
          <label>Full Identity</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Manish Trivedi"
          />
        </div>

        <div className="form-group">
          <label>Deployment Timeline</label>
          <select 
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
          >
            <option>ASAP (Urgent Build)</option>
            <option>Within a week</option>
            <option>Planning phase (15+ days)</option>
          </select>
        </div>

        <button 
          onClick={handleWhatsAppRedirect}
          disabled={!name}
          className="btn"
          style={{ width: '100%', padding: '20px' }}
        >
          PROCEED TO WHATSAPP
        </button>
      </div>
    </div>
  );
};

export default LeadModal;