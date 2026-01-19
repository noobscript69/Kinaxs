
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome, Rahul!</h1>
            <p className="text-slate-600">Everything looks great with your website today.</p>
          </div>
          <div className="flex space-x-3">
             <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 transition">
               Settings
             </button>
             <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition">
               Support
             </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Status Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Website Status Card */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold">Live Website</h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-widest">Active</span>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-64 aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                   <img src="https://picsum.photos/seed/sitepreview/400/225" alt="Site Preview" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase">Website URL</label>
                    <p className="text-lg font-bold text-indigo-600 truncate">rahul-electronics.kinaxs.com</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase">Last Updated</label>
                    <p className="text-slate-700">June 12, 2024 (2 days ago)</p>
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <button className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition">View Site</button>
                    <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition">Edit Content</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard label="Total Visits" value="1,240" delta="+12%" />
              <StatCard label="Leads Generated" value="18" delta="+5%" />
              <StatCard label="Avg. Load Time" value="1.2s" delta="Normal" />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
             {/* Plan Details Card */}
             <div className="bg-indigo-900 text-white p-8 rounded-[2rem] shadow-xl">
               <h3 className="text-lg font-bold mb-4">Subscription Details</h3>
               <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-indigo-300">Plan</span>
                   <span className="font-bold">Growth Monthly</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-indigo-300">Next Billing</span>
                   <span className="font-bold">July 10, 2024</span>
                 </div>
                 <div className="pt-4 border-t border-indigo-800 flex justify-between items-center">
                   <span className="text-xl font-extrabold">₹499/mo</span>
                   <button className="px-4 py-2 bg-indigo-500/50 hover:bg-indigo-500 rounded-lg text-xs font-bold transition">Manage</button>
                 </div>
               </div>
               <button className="w-full mt-6 py-3 bg-white text-indigo-900 rounded-xl font-bold text-sm hover:bg-indigo-50 transition">
                 Upgrade Plan
               </button>
             </div>

             {/* Recent Activity */}
             <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                <h3 className="font-bold mb-6">Action Required</h3>
                <div className="space-y-6">
                   <ActionItem icon="🖼️" text="Upload shop banner image" status="Pending" />
                   <ActionItem icon="📍" text="Confirm Google Maps pin" status="Action" />
                   <ActionItem icon="✅" text="Verify business phone" status="Done" />
                </div>
                <button className="w-full mt-8 py-3 bg-slate-50 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-100 transition">
                  Request Changes
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; delta: string }> = ({ label, value, delta }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <p className="text-xs font-bold text-slate-400 uppercase mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <p className="text-2xl font-extrabold text-slate-900">{value}</p>
      <span className={`text-xs font-bold px-2 py-1 rounded-lg ${delta.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
        {delta}
      </span>
    </div>
  </div>
);

const ActionItem: React.FC<{ icon: string; text: string; status: string }> = ({ icon, text, status }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center">
      <span className="text-xl mr-3">{icon}</span>
      <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition">{text}</span>
    </div>
    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${status === 'Done' ? 'bg-slate-100 text-slate-400' : status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700'}`}>
      {status}
    </span>
  </div>
);

export default Dashboard;
