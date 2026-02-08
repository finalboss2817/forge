import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          <p style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', fontSize: '12px', marginBottom: '20px' }}>
            ENGINEERING DIVISION / 01
          </p>
          <h1 style={{ fontSize: 'clamp(50px, 10vw, 100px)', fontWeight: 900, lineHeight: 0.9, marginBottom: '40px', letterSpacing: '-3px' }}>
            PURE <br/> SILICON.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-dim)', marginBottom: '50px', maxWidth: '500px' }}>
            Bespoke PC hardware assembly and complex diagnostics by Meena Technologies specialists.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button onClick={onCtaClick} className="btn">Start Build</button>
            <a href="#archive" className="btn btn-outline">Archive</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;