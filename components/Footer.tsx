import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div>
          <h4 style={{ fontWeight: 900, margin: '0 0 20px 0' }}>FORGE CUSTOMS</h4>
          <p style={{ color: 'var(--text-dim)', fontSize: '13px', maxWidth: '300px' }}>
            A premium venture by Meena Technologies. Engineering high-performance legacies since 2014.
          </p>
        </div>
        <div>
          <h5 style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 900, marginBottom: '20px' }}>CONTACT</h5>
          <div style={{ fontSize: '14px', lineHeight: 2 }}>
            trivedimanish2803@gmail.com<br/>
            +91 98205 67505<br/>
            Mumbai, MH
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;