
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">Kinaxs</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed">
            Empowering India's small businesses with instant, professional, and affordable digital presence. 
            No tech knowledge needed.
          </p>
          <div className="mt-8 flex space-x-4">
            <SocialIcon icon="f" />
            <SocialIcon icon="t" />
            <SocialIcon icon="i" />
            <SocialIcon icon="l" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><Link to="/product" className="hover:text-indigo-600 transition">How it Works</Link></li>
            <li><Link to="/pricing" className="hover:text-indigo-600 transition">Pricing Plans</Link></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Templates</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Subdomain Tool</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">© 2024 Kinaxs Technology Private Limited. Made in India.</p>
        <div className="flex items-center space-x-2">
           <img src="https://picsum.photos/seed/visa/40/25" alt="Payment Methods" className="h-6 opacity-50 grayscale hover:grayscale-0 transition" />
           <img src="https://picsum.photos/seed/mastercard/40/25" alt="Payment Methods" className="h-6 opacity-50 grayscale hover:grayscale-0 transition" />
           <img src="https://picsum.photos/seed/upi/40/25" alt="Payment Methods" className="h-6 opacity-50 grayscale hover:grayscale-0 transition" />
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition">
    <span className="font-bold uppercase text-xs">{icon}</span>
  </a>
);

export default Footer;
