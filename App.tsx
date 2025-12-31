
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import BoilerIssues from './components/BoilerIssues';
import Areas from './components/Areas';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Local SEO Trust Bar */}
        <div className="bg-slate-900 py-10 overflow-hidden border-y border-white/5">
          <div className="flex animate-scroll whitespace-nowrap gap-12 text-white/30 font-display font-bold text-xl uppercase tracking-[0.2em] items-center">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Fareham's Local Choice</span>
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>Gas Safe Registered PO14</span>
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>Emergency Breakdown PO15</span>
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                <span>60-Min Response PO16</span>
                <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <TrustSection />
        <Services />
        <BoilerIssues />
        <Areas />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      
      {/* AI Assistant - Localized for Fareham */}
      <ChatBot />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
