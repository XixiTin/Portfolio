
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import CaseStudyModal from './components/CaseStudyModal';
import { Project } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Intersection Observer for Reveal Animations
  useEffect(() => {
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [currentView]);

  return (
    <div className="relative antialiased bg-warm-50 min-h-screen">
      <Navbar onNavigate={(view) => setCurrentView(view)} activeView={currentView} />
      
      <main className="transition-opacity duration-500">
        {currentView === 'home' ? (
          <>
            <Hero />
            <Projects onSelect={(p) => setSelectedProject(p)} />
            <Philosophy />
            <div className="reveal"><Contact /></div>
          </>
        ) : (
          <div className="pt-20">
            <About />
            <Contact />
          </div>
        )}
      </main>

      {/* Case Study Overlay */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-700 ease-in-out ${selectedProject ? 'translate-y-0' : 'translate-y-full'}`}>
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>

      {/* Soft overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-sm z-[90]"></div>
      )}
    </div>
  );
};

export default App;
