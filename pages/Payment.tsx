
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // BACKEND INTEGRATION POINT: 
    // Integrate Razorpay or Stripe here.
    // Call backend to create order, then trigger the Payment SDK.
    
    setTimeout(() => {
      setLoading(false);
      alert("Payment Successful! Your website is being generated.");
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="py-20 px-4 min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Complete Your Subscription</h1>
        
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 bg-indigo-600 text-white text-center">
            <h2 className="text-xl font-bold mb-1">Growth Plan</h2>
            <p className="text-indigo-100">Most popular for local businesses</p>
          </div>
          
          <div className="p-8">
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600">Monthly Subscription</span>
                <span className="font-bold">₹499.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600">Setup Fee</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600">GST (18%)</span>
                <span className="font-bold">₹89.82</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold">Total Amount</span>
                <span className="text-3xl font-extrabold text-indigo-600">₹588.82</span>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl mb-8">
              <h3 className="font-bold mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure Payment
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Clicking the button below will securely process your payment via Razorpay. 
                We do not store your card details on our servers.
              </p>
            </div>

            <button 
              onClick={handlePayment}
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition flex items-center justify-center ${loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100'}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Pay ₹588.82 Now'}
            </button>
            
            <p className="mt-6 text-center text-xs text-slate-400 uppercase tracking-widest">
              Powered by Razorpay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
