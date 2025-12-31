
import React from 'react';

const Hero: React.FC = () => {
  const phone = "07415120877";

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover"
          alt="Emergency boiler repair engineer fixing a breakdown in Fareham"
        />
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-bold shadow-lg animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              24/7 Emergency Response
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 backdrop-blur-md">
              Gas Safe Registered: PO14, PO15, PO16
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            No <span className="text-orange-500">Hot Water</span> or <br/>
            No <span className="text-orange-500">Heating</span> in Fareham?
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Local specialists in <strong>Emergency Boiler Breakdowns</strong>. 
            If you have no heating or hot water, Matt at MSSG Gas provides a rapid response across Fareham. 
            We get your boiler back online today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${phone}`}
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold px-8 py-5 rounded-xl shadow-2xl shadow-orange-600/40 transition-all text-center flex items-center justify-center gap-3 active:scale-95 group"
            >
              <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Emergency Call: {phone}
            </a>
            <a 
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white text-lg font-bold px-8 py-5 rounded-xl border border-white/30 transition-all text-center backdrop-blur-sm flex items-center justify-center gap-3"
            >
              Request a Callback
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {[
              { label: 'Local Coverage', val: 'Fareham & PO14' },
              { label: 'Fast Response', val: '60-90 Mins' },
              { label: 'Upfront Pricing', val: 'Fixed Quotes' },
              { label: 'Safety First', val: 'Gas Safe Pro' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-orange-500 text-lg font-bold">{stat.val}</div>
                <div className="text-slate-400 text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
