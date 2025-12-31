
import React from 'react';

const BoilerIssues: React.FC = () => {
  const issues = [
    { name: 'Low Boiler Pressure', reason: 'Often caused by leaks or recent radiator bleeding.' },
    { name: 'No Pilot Light', reason: 'Common in older boilers found in Fareham’s traditional terrace homes.' },
    { name: 'Frozen Condensate Pipes', reason: 'A frequent winter issue for modern boilers in Whiteley and Knowle Village.' },
    { name: 'Kettling/Whistling Noises', reason: 'Usually a sign of lime-scale build-up (common in Hampshire’s hard water area).' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100" stroke="orange" fill="transparent" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Common Boiler Issues We Fix in PO14 & PO15</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Is your boiler displaying an error code or making a strange noise? We frequently help 
              Fareham residents with issues caused by local environmental factors like hard water 
              and aging pipework.
            </p>
            <div className="space-y-6">
              {issues.map((issue, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{issue.name}</h4>
                    <p className="text-slate-400 text-sm">{issue.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2070" 
              className="rounded-3xl shadow-2xl border border-white/10"
              alt="Repairing a boiler in Fareham"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm uppercase tracking-wider font-semibold">First-Time Fix Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoilerIssues;
