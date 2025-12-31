
import React from 'react';
import { ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <ICONS.Gas className="w-6 h-6 text-orange-600" />
            <span className="text-xl font-bold font-display text-slate-900">
              MSSG<span className="text-orange-600">Gas</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-orange-600">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600">Terms of Service</a>
            <a href="#" className="hover:text-orange-600">Gas Safe Registry</a>
          </div>
          
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} MSSG-Gas Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
