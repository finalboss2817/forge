import React from 'react';

const Gallery: React.FC = () => {
  const projects = [
    { title: 'Project NEON', category: 'High-End Gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800' },
    { title: 'Deep Learning Hub', category: 'Workstation', img: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800' },
    { title: 'Crystal Flow', category: 'Liquid Cooled', img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800' },
    { title: 'Minimalist Ghost', category: 'SFF Build', img: 'https://images.unsplash.com/photo-1625842268584-8f3bf9ff16a0?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="archive" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-2px', marginBottom: '10px' }}>THE ARCHIVE</h2>
          <p className="font-mono" style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '4px' }}>Proven Hardware Excellence</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ 
              position: 'relative', 
              aspectRatio: '16/10', 
              overflow: 'hidden', 
              background: '#000',
              border: '1px solid var(--border)'
            }}>
              <img 
                src={p.img} 
                alt={p.title}
                style={{ width: '100%', height: '100%', objectCover: 'cover', opacity: 0.5 }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '40px',
                background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)'
              }}>
                <span className="font-mono" style={{ color: 'var(--accent)', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>{p.category}</span>
                <h3 className="font-display" style={{ fontSize: '28px', margin: 0, color: 'white' }}>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;