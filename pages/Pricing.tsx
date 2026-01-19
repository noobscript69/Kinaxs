
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Honest Pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees, cancel anytime.
          </p>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
             <span className="text-sm font-semibold text-slate-900">Monthly Billing</span>
             <div className="w-12 h-6 bg-indigo-600 rounded-full relative p-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full"></div>
             </div>
             <span className="text-sm font-semibold text-slate-400">Annual (Coming Soon)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <PricingCard 
            title="Starter"
            price="299"
            description="Perfect for solo entrepreneurs and hobbyists."
            features={[
              "Free kinaxs.com subdomain",
              "1 Professional page",
              "Basic mobile responsive design",
              "Standard SSL Security",
              "24/7 Email support"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard 
            title="Growth"
            price="499"
            description="Best for small shops and local service businesses."
            features={[
              "Everything in Starter",
              "3 Professional pages",
              "Custom branding & colors",
              "Priority chat support",
              "WhatsApp integration",
              "Business Email (1 alias)"
            ]}
            cta="Subscribe Now"
            popular={true}
          />
          <PricingCard 
            title="Business"
            price="999"
            description="For established brands looking to scale."
            features={[
              "Everything in Growth",
              "Unlimited pages",
              "Custom domain support",
              "Advanced SEO tools",
              "Inventory manager (Beta)",
              "Direct Phone support"
            ]}
            cta="Subscribe Now"
            popular={false}
          />
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-[2.5rem] border border-slate-100">
           <h3 className="text-2xl font-bold mb-4">Have more than 5 businesses?</h3>
           <p className="text-slate-600 mb-8">Get in touch for custom bulk pricing and white-label options.</p>
           <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition">
             Contact Sales
           </button>
        </div>
      </div>
    </div>
  );
};

const PricingCard: React.FC<{ 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  cta: string;
  popular: boolean;
}> = ({ title, price, description, features, cta, popular }) => (
  <div className={`relative flex flex-col p-8 rounded-3xl transition-all h-full ${popular ? 'bg-indigo-600 text-white scale-105 shadow-2xl shadow-indigo-200 z-10' : 'bg-white text-slate-900 border border-slate-200'}`}>
    {popular && (
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-violet-400 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`text-sm ${popular ? 'text-indigo-100' : 'text-slate-500'}`}>{description}</p>
    </div>

    <div className="mb-8">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">₹</span>
        <span className="text-5xl font-extrabold ml-1">{price}</span>
        <span className={`text-sm ml-2 ${popular ? 'text-indigo-100' : 'text-slate-500'}`}>/ month</span>
      </div>
    </div>

    <ul className="space-y-4 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start text-sm">
          <svg className={`h-5 w-5 mr-3 flex-shrink-0 ${popular ? 'text-indigo-300' : 'text-indigo-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>

    <Link
      to="/auth"
      className={`block w-full text-center py-4 rounded-xl font-bold transition ${popular ? 'bg-white text-indigo-600 hover:bg-indigo-50' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
    >
      {cta}
    </Link>
  </div>
);

export default Pricing;
