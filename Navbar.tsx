
import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const phone = "07415120877";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ICONS.Gas className={`w-8 h-8 ${isScrolled ? 'text-orange-600' : 'text-white'}`} />
          <span className={`text-2xl font-bold font-display ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            MSSG<span className="text-orange-600">Gas</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          {['Home', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-orange-500 transition-colors font-bold ${
                isScrolled ? 'text-slate-600' : 'text-slate-100'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href={`tel:${phone}`}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full shadow-lg shadow-orange-600/20 transition-all active:scale-95 flex items-center gap-2 font-bold"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
