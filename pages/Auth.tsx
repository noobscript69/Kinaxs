
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  setIsAuthenticated: (val: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // BACKEND INTEGRATION POINT: 
    // Connect to your auth API (Firebase, Supabase, or Custom Node.js/Python backend)
    // console.log("Login attempt with form data");
    
    // MOCK AUTH SUCCESS
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-slate-50">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-slate-600">
            {isLogin ? "Manage your business's online presence." : "Launch your first website in minutes."}
          </p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" 
                  placeholder="Rahul Sharma"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" 
                placeholder="rahul@example.com"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                {isLogin && <button type="button" className="text-xs font-semibold text-indigo-600 hover:underline">Forgot password?</button>}
              </div>
              <input 
                type="password" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-bold text-indigo-600 hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
