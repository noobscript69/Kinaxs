
import React from 'react';
import { Link } from 'react-router-dom';

const Product: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How Kinaxs Works</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We've simplified the entire process of getting a business online. 
            Focus on your shop, let us handle the code.
          </p>
        </div>

        <div className="space-y-24">
          <Step 
            number="01"
            title="Choose Your Plan"
            description="Pick a subscription that fits your budget. We have plans tailored for freelancers, local shops, and growing startups in India."
            imgSrc="https://picsum.photos/seed/step1/800/500"
            reverse={false}
          />
          <Step 
            number="02"
            title="We Generate Your Website"
            description="Simply provide your business name, contact details, and images. Our automated engine builds a professional, high-performance site for you."
            imgSrc="https://picsum.photos/seed/step2/800/500"
            reverse={true}
          />
          <Step 
            number="03"
            title="Go Live Instantly"
            description="Your site is hosted on our lightning-fast servers. Customers can find you immediately at business-name.kinaxs.com."
            imgSrc="https://picsum.photos/seed/step3/800/500"
            reverse={false}
          />
        </div>

        <section className="mt-32 bg-indigo-50 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Subdomain Hosting?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Cost Efficient</h3>
              <p className="text-slate-600">Custom domains cost ₹800-₹1500 per year plus renewal fees. Subdomains are always free with your subscription.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Instant Setup</h3>
              <p className="text-slate-600">No waiting for DNS propagation. Your site is accessible worldwide the second we click 'Generate'.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Easy Branding</h3>
              <p className="text-slate-600">Short, professional URLs that are easy to print on business cards and share on WhatsApp.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Zero Maintenance</h3>
              <p className="text-slate-600">We handle the servers, the security patches, and the SSL renewals. You just run your business.</p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/auth" className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition">
              Launch Your Site Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const Step: React.FC<{ number: string; title: string; description: string; imgSrc: string; reverse: boolean }> = ({ number, title, description, imgSrc, reverse }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
    <div className="flex-1 space-y-6">
      <div className="text-indigo-600 font-extrabold text-2xl mb-2 tracking-widest uppercase">Step {number}</div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{title}</h2>
      <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
    </div>
    <div className="flex-1 w-full">
      <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <img src={imgSrc} alt={title} className="rounded-2xl w-full h-auto object-cover" />
      </div>
    </div>
  </div>
);

export default Product;
