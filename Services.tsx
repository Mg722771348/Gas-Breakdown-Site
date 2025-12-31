
import React from 'react';
import { ICONS } from '../constants';

const services = [
  {
    title: 'Emergency Boiler Breakdown',
    desc: 'Rapid fault diagnosis and breakdown repair for all major brands in Fareham.',
    icon: ICONS.Emergency,
    color: 'bg-red-500'
  },
  {
    title: 'No Hot Water / No Heating',
    desc: 'Immediate fix for failed pumps, thermostats, and immersion heaters.',
    icon: ICONS.Repair,
    color: 'bg-orange-600'
  },
  {
    title: 'Emergency Gas Leaks',
    desc: 'Rapid response if you smell gas or suspect a leak in your Fareham property.',
    icon: ICONS.Safety,
    color: 'bg-slate-900'
  },
  {
    title: 'Annual Boiler Servicing',
    desc: 'Prevent a boiler breakdown with a professional local Fareham health check.',
    icon: ICONS.Gas,
    color: 'bg-green-600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4">Fareham Boiler Breakdown Services</h2>
          <p className="text-slate-600 text-lg">
            We specialise in fixing "No hot water" and "No heating" calls quickly. 
            As local experts, we get your boiler back online the same day in most cases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-600/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-slate-200`}>
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {s.desc}
              </p>
              <a href="#contact" className="text-orange-600 font-bold inline-flex items-center gap-2 group/link">
                Fix My Boiler 
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
