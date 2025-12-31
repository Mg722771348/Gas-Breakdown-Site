
import React from 'react';

const Contact: React.FC = () => {
  const phone = "07415120877";
  const email = "Matt.greentree@btinternet.com";

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Your Heating Back on <span className="text-orange-500">Track Today</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Don't spend another night in the cold. Contact MSSG Gas—Fareham’s first choice for emergency boiler repairs. 
              Our team usually responds within 2 hours during business hours.
            </p>
            
            <div className="space-y-8">
              <a href={`tel:${phone}`} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-600/30 flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-xl">{phone}</div>
                  <div className="text-slate-400 text-sm">24/7 Fareham Emergency Line (Call or Text)</div>
                </div>
              </a>
              <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-orange-600/20 border border-orange-600/30 flex items-center justify-center text-orange-500 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-xl">{email}</div>
                  <div className="text-slate-400 text-sm">Direct response for all enquiries</div>
                </div>
              </div>
              <div className="p-6 bg-orange-600/10 border border-orange-600/20 rounded-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-2">Service Areas</p>
                <p className="text-slate-300">Fareham, Whiteley, Botley, Hedge End, Bishops Waltham, Southampton, Portsmouth, Funtley.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Online Enquiry Form</h3>
            <form 
              action={`https://formsubmit.co/${email}`} 
              method="POST" 
              className="space-y-6"
            >
              {/* FormSubmit Honeypot (Anti-Spam) */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              {/* FormSubmit Template Customization */}
              <input type="hidden" name="_subject" value="New MSSG-Gas Web Enquiry" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-700 text-sm font-bold">Your Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 text-sm font-bold">Phone Number</label>
                  <input required name="phone" type="tel" placeholder="07123 456789" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 text-sm font-bold">Email Address (Optional)</label>
                <input name="email" type="email" placeholder="email@example.com" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400" />
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 text-sm font-bold">Postcode & Area</label>
                <input required name="postcode" type="text" placeholder="e.g. PO14 Fareham" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400" />
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 text-sm font-bold">Boiler Issue Details</label>
                <textarea required name="message" rows={4} placeholder="e.g. No hot water, Boiler making whistling noises..." className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-orange-500 text-slate-900 placeholder:text-slate-400"></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-orange-600/30 transition-all active:scale-[0.98] text-lg uppercase tracking-wider"
              >
                Send Enquiry to Matt
              </button>
              <p className="text-[11px] text-center text-slate-400 italic">
                Secure SSL Encrypted Submission. Matt will receive this as an email instantly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
