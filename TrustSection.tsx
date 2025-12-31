
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Why Fareham Homeowners Trust MSSG Gas
          </h2>
          <p className="text-lg text-slate-600 text-center mb-16 leading-relaxed">
            When your heating fails, you need a local expert who knows the area and can get to you fast. 
            We’ve built our reputation across Hampshire by being transparent, professional, and incredibly fast.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'Rapid Local Response',
                desc: 'Based locally, we cover all of Fareham including Wallington, Funtley, and Portchester. We aim to be with you in under 90 minutes.'
              },
              {
                title: 'Gas Safe Registered',
                desc: 'Your safety is our priority. All our engineers are fully certified and carry their ID cards for your peace of mind.'
              },
              {
                title: 'No Hidden Fees',
                desc: 'We provide clear, upfront pricing before we start any repair work. No nasty surprises on your final bill.'
              },
              {
                title: 'All Brands Covered',
                desc: 'From Worcester Bosch and Vaillant to Ideal and Baxi, we carry common spare parts to fix most issues on the first visit.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 group hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 font-bold text-xl">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
