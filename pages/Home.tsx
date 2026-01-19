
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-40 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Launch Your Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Website in Minutes
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10">
            No hosting. No tech. Just your business online instantly on a custom subdomain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/auth"
              className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition transform hover:-translate-y-1 shadow-lg shadow-indigo-200"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition"
            >
              View Pricing
            </Link>
          </div>
          
          <div className="mt-16 flex justify-center">
             <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 max-w-4xl w-full">
                <img src="https://picsum.photos/seed/kinaxs/1200/600" alt="Dashboard Preview" className="rounded-xl w-full h-auto" />
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-5xl font-extrabold mb-2">127+</p>
            <p className="text-indigo-200 text-lg">Active Clients in India</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">1,500+</p>
            <p className="text-indigo-200 text-lg">Websites Created</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold mb-2">99.9%</p>
            <p className="text-indigo-200 text-lg">Platform Uptime</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to grow</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Powerful features to help your small business compete with the giants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🌐" 
              title="Free Subdomain" 
              description="Get your-business.kinaxs.com immediately. No domain registration hassle."
            />
            <FeatureCard 
              icon="📱" 
              title="Mobile Responsive" 
              description="Your site looks perfect on phones, tablets, and desktops automatically."
            />
            <FeatureCard 
              icon="🛡️" 
              title="Secure Hosting" 
              description="Enterprise-grade security and SSL certificates included for every site."
            />
            <FeatureCard 
              icon="⚡" 
              title="Fast Loading" 
              description="Optimized for speed. Don't let your customers wait for slow pages."
            />
            <FeatureCard 
              icon="✏️" 
              title="Easy Updates" 
              description="Update your prices, images, and details in seconds via our simple dashboard."
            />
            <FeatureCard 
              icon="💬" 
              title="24/7 Support" 
              description="Our dedicated team is always available via text to help you grow."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition group">
    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
