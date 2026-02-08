
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
    // Business Phone Number: 9820567505
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative glass-card border-cyan-500/20 w-full max-w-md rounded-3xl p-8 animate-in fade-in zoom-in duration-300 shadow-[0_0_100px_rgba(6,182,212,0.15)]">
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-display text-2xl font-bold">FINALIZE QUOTE</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <p className="text-slate-400 text-sm mb-8">Your specifications are locked. One of our master builders in Mumbai will finalize the quote with you on WhatsApp.</p>
        
        <div className="space-y-6 mb-8">
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-2">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              placeholder="e.g. Manish Trivedi"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] block mb-2">Delivery Urgency</label>
            <select 
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 appearance-none"
            >
              <option>ASAP (Urgent Build)</option>
              <option>Within a week</option>
              <option>Planning phase (15+ days)</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleWhatsAppRedirect}
          disabled={!name}
          className="w-full py-5 bg-cyan-500 text-slate-950 font-bold rounded-2xl hover:bg-cyan-400 hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 disabled:opacity-50 shadow-[0_10px_30px_rgba(6,182,212,0.3)]"
        >
          <span>PROCEED TO WHATSAPP</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LeadModal;
