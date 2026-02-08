import React from 'react';
import { AppSection } from '../types';

interface NavbarProps {
  activeSection: AppSection;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-height)',
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: 'var(--accent)', padding: '5px 12px', fontWeight: 900, fontSize: '20px' }}>F</div>
          <span style={{ fontWeight: 900, fontSize: '22px', letterSpacing: '-1px' }}>FORGE</span>
        </a>

        <div style={{ display: 'flex', gap: '30px' }}>
          {['architect', 'services', 'archive', 'diagnostics'].map((id) => (
            <a 
              key={id} 
              href={`#${id}`} 
              style={{
                textDecoration: 'none',
                color: activeSection === id ? 'var(--accent)' : 'var(--text-dim)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;