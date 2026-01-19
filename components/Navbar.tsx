
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'How it Works', path: '/product' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const activeClass = "text-indigo-600 font-semibold";
  const inactiveClass = "text-slate-600 hover:text-indigo-600 transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">Kinaxs</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? activeClass : inactiveClass}
              >
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition">Dashboard</Link>
                <button 
                  onClick={() => setIsAuthenticated(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-200 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-md shadow-indigo-200"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base ${location.pathname === link.path ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          {!isAuthenticated ? (
            <Link
              to="/auth"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-indigo-600 text-white rounded-lg font-bold"
            >
              Sign In
            </Link>
          ) : (
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-slate-100 text-slate-700 rounded-lg font-bold"
            >
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
