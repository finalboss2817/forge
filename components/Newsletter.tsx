import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="newsletter-box">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' }}>
              Sub-Level Communications
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: 900, margin: '20px 0', textTransform: 'uppercase', letterSpacing: '-2px' }}>
              JOIN THE <span style={{ color: 'var(--accent)' }}>FORGE</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: '40px', fontSize: '15px' }}>
              Get monthly hardware field reports, inventory alerts, and exclusive configuration builds.
            </p>

            {status === 'success' ? (
              <div style={{ padding: '20px', background: '#102010', border: '1px solid #204020', color: '#44ff44', fontFamily: 'JetBrains Mono' }}>
                [ SYSTEM_ALERT ]: SIGNAL RECEIVED. WELCOME TO THE NETWORK.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="ENCRYPTED_EMAIL@HOST.COM"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ flexGrow: 1, minWidth: '250px' }}
                  required
                />
                <button type="submit" className="btn" disabled={status === 'loading'} style={{ minWidth: '180px' }}>
                  {status === 'loading' ? 'TRANSMITTING...' : 'SUBSCRIBE'}
                </button>
              </form>
            )}
            
            <p className="font-mono" style={{ fontSize: '9px', color: '#333', marginTop: '30px', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Secure Channel 128-bit // No Spam Guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;