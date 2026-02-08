
import React from 'react';

const services = [
  {
    id: 'assembly',
    title: 'Custom Assembly',
    desc: 'From budget warriors to overkill workstations. We handle the torque, cable combs, and thermal paste.',
    icon: '⚡',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    waMsg: "Hi Forge Customs! I'm interested in a Custom PC Assembly service. Can you provide more details on the process and pricing?"
  },
  {
    id: 'repair',
    title: 'Precision Repair',
    desc: 'Micro-soldering, capacitor replacement, and component-level diagnostics for dead hardware.',
    icon: '🛠️',
    gradient: 'from-purple-500/20 to-pink-500/20',
    waMsg: "Hi Forge Customs! I have a hardware issue and need Precision Repair. How can I schedule a diagnostic for my system?"
  },
  {
    id: 'software',
    title: 'Software Forge',
    desc: 'OS optimization, custom debloating, driver orchestration, and benchmark tuning for max FPS.',
    icon: '💿',
    gradient: 'from-orange-500/20 to-yellow-500/20',
    waMsg: "Hi Forge Customs! I'm looking for Software optimization/debloating to improve my PC's performance and FPS. Can you help?"
  },
  {
    id: 'cooling',
    title: 'Watercooling',
    desc: 'Custom hard-line loops, distro plates, and industrial-grade pumps for sub-zero style.',
    icon: '💧',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    waMsg: "Hi Forge Customs! I'm interested in a custom Hard-line Watercooling loop. Do you have a portfolio or price list for this?"
  }
];

const ServiceSection: React.FC = () => {
  const handleInquiry = (msg: string) => {
    const phoneNumber = "919820567505";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase tracking-tighter">SERVICES <span className="text-cyan-500">PIPELINE</span></h2>
            <p className="text-slate-400 font-medium">Professional hardware solutions by <span className="text-cyan-400 font-bold">Meena Technologies</span>. No generic fixes, only optimized silicon results.</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-12 h-1.5 bg-cyan-500 rounded-full"></div>
            <div className="w-6 h-1.5 bg-slate-800 rounded-full"></div>
            <div className="w-6 h-1.5 bg-slate-800 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              onClick={() => handleInquiry(service.waMsg)}
              className={`group cursor-pointer p-8 rounded-[2.5rem] bg-gradient-to-br ${service.gradient} border border-white/5 hover:border-cyan-500/40 transition-all hover:-translate-y-2 relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
              <h3 className="text-2xl font-black mb-4 font-display group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">{service.desc}</p>
              
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em]">INITIATE INQUIRY</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
