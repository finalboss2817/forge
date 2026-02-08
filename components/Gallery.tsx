
import React from 'react';

const Gallery: React.FC = () => {
  const projects = [
    { title: 'Project NEON', category: 'High-End Gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800' },
    { title: 'Deep Learning Hub', category: 'Workstation', img: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800' },
    { title: 'Crystal Flow', category: 'Liquid Cooled', img: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800' },
    { title: 'Minimalist Ghost', category: 'SFF Build', img: 'https://images.unsplash.com/photo-1625842268584-8f3bf9ff16a0?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="archive" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">THE ARCHIVE</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm uppercase font-bold tracking-[0.2em]">Showcasing 10+ Years of Meena Technologies Heritage</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-slate-900 border border-white/5">
              <img 
                src={p.img} 
                alt={p.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2 block">{p.category}</span>
                <h3 className="text-3xl font-bold font-display">{p.title}</h3>
              </div>
              <div className="absolute top-8 right-8">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
            VIEW FULL CATALOGUE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
