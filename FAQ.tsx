
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'How quickly can you get to Fareham?',
      a: 'In most emergency cases, we aim to be at your door within 60-90 minutes of your call. We prioritise vulnerable households and total heating failures.'
    },
    {
      q: 'Do you charge a call-out fee?',
      a: 'We offer competitive diagnostic rates. We will always tell you the cost of the repair before any work begins, so there are no surprises.'
    },
    {
      q: 'Are you Gas Safe Registered?',
      a: 'Yes. You should never allow an unregistered engineer to work on your gas appliances. You can check our credentials on the Gas Safe Register using our registration number.'
    },
    {
      q: 'Do you carry spare parts?',
      a: 'Our vans are stocked with common generic parts for boilers. In most cases, once we have diagnosed a fault, we can source the part on a next day basis. (This is dependant on age and make of boiler).'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
