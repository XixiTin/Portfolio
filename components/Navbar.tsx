
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (view: 'home' | 'about') => void;
  activeView: 'home' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-warm-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center group transition-transform hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <Logo className="w-12 h-12 md:w-14 md:h-14" />
        </button>
        <div className="hidden md:flex space-x-4 text-sm font-medium tracking-wide uppercase">
          <button 
            onClick={() => onNavigate('home')} 
            className={`group relative px-5 py-2 rounded-full transition-all duration-300 overflow-hidden ${
              activeView === 'home' 
                ? 'text-white bg-sage-500 shadow-lg' 
                : 'text-stone-600 hover:text-stone-800 hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            <span className="relative z-10">Work</span>
            {activeView !== 'home' && (
              <div className="absolute inset-0 bg-sage-200 rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            )}
          </button>
          <button 
            onClick={() => onNavigate('about')} 
            className={`group relative px-5 py-2 rounded-full transition-all duration-300 overflow-hidden ${
              activeView === 'about' 
                ? 'text-white bg-sage-500 shadow-lg' 
                : 'text-stone-600 hover:text-stone-800 hover:shadow-lg hover:-translate-y-0.5'
            }`}
          >
            <span className="relative z-10">About</span>
            {activeView !== 'about' && (
              <div className="absolute inset-0 bg-sage-200 rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            )}
          </button>
          <a 
            href="#contact" 
            className="group relative px-5 py-2 rounded-full text-stone-600 hover:text-stone-800 transition-all duration-300 normal-case overflow-hidden hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="relative z-10">Connect</span>
            <div className="absolute inset-0 bg-sage-200 rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-stone-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
