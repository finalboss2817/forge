import React from 'react';

const services = [
  { title: 'ASSEMBLY', desc: 'Expert hardware integration and cable management.', icon: '⚡' },
  { title: 'REPAIR', desc: 'Advanced troubleshooting and part replacement.', icon: '🛠️' },
  { title: 'OPTIMIZE', desc: 'Thermal tuning and software benchmarks.', icon: '🎯' },
  { title: 'CONSULT', desc: 'Custom spec planning for your specific needs.', icon: '📋' }
];

const ServiceSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container">
        <h2 style={{ fontSize: '30px', fontWeight: 900, marginBottom: '50px', textAlign: 'center' }}>SERVICES</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {services.map((s, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', backgroundColor: 'var(--bg)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{s.icon}</div>
              <h4 style={{ margin: '0 0 10px 0', fontWeight: 900 }}>{s.title}</h4>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-dim)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;