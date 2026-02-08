import React from 'react';

const services = [
  {
    title: 'CUSTOM ASSEMBLY',
    desc: 'High-torque integration for gaming, workstation, and extreme rigs.',
    icon: '01',
    waMsg: "Inquiry: Custom PC Assembly details required."
  },
  {
    title: 'PRECISION REPAIR',
    desc: 'Component-level micro-soldering and complex diagnostic resolution.',
    icon: '02',
    waMsg: "Inquiry: Hardware Repair diagnostic requested."
  },
  {
    title: 'SOFTWARE FORGE',
    desc: 'OS optimization, bios tuning, and verified benchmark stress-testing.',
    icon: '03',
    waMsg: "Inquiry: Software Optimization service details."
  },
  {
    title: 'WATERCOOLING',
    desc: 'Industrial-grade hard-line liquid loops for thermal management.',
    icon: '04',
    waMsg: "Inquiry: Liquid Cooling portfolio requested."
  }
];

const ServiceSection: React.FC = () => {
  const handleInquiry = (msg: string) => {
    const phoneNumber = "919820567505";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-32 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-display text-5xl font-black uppercase tracking-tighter text-white">CORE <span className="text-red-600">CAPABILITIES</span></h2>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-2">Hardware Operations // Deployment Pipeline</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {services.map((service, idx) => (
            <div 
              key={idx}
              onClick={() => handleInquiry(service.waMsg)}
              className="group cursor-pointer p-10 bg-black hover:bg-red-600 transition-all border-r border-white/10 last:border-r-0"
            >
              <div className="font-mono text-4xl font-black text-white/10 group-hover:text-black/20 mb-12 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-display font-black text-white mb-4 uppercase tracking-tighter italic group-hover:text-black transition-colors">{service.title}</h3>
              <p className="font-mono text-xs text-zinc-500 group-hover:text-white/80 transition-colors leading-relaxed mb-8">{service.desc}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-black/20">
                <span className="font-mono text-[9px] font-black text-red-600 group-hover:text-white uppercase tracking-widest">DEPLOY</span>
                <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;