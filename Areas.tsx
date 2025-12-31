
import React from 'react';

const Areas: React.FC = () => {
  const regions = [
    { name: 'Fareham (PO14, PO15, PO16)', detail: 'Our primary base. Fast response for Fareham Town, Titchfield, and Portchester.' },
    { name: 'Whiteley & Knowle Village', detail: 'Fast response for modern eco-boilers in newer developments.' },
    { name: 'Stubbington & Hill Head', detail: 'Coastal-specialist heating care for properties near the shore.' },
    { name: 'Titchfield & Wickham', detail: 'Reliable repairs for rural, historic, and village properties.' },
  ];

  const subAreas = ['Whiteley', 'Botley', 'Fareham', 'Knowle Village', 'Portsmouth', 'Southampton', 'Hedge End', 'Bishops Waltham', 'Funtley'];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Serving Every Corner of Fareham</h2>
          <p className="text-slate-600 text-lg">
            We don’t just serve the high street. Our vans are regularly seen across the whole borough, 
            ensuring no home is left without heating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-orange-50 hover:border-orange-100 transition-colors">
              <h3 className="font-bold text-lg mb-2 text-slate-900">{region.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{region.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-slate-900 text-white text-center">
          <p className="text-lg font-semibold mb-6 uppercase tracking-widest text-orange-500">Service Coverage Areas:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {subAreas.map((area) => (
              <span key={area} className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-bold">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
