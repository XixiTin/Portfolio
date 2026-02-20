
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-50">
      {/* Interactive Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(103, 134, 103, 0.08), transparent 80%)`
        }}
      ></div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-sage-100 rounded-full blur-3xl opacity-40 float"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-stone-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-8 fade-in">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/50 border border-stone-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-stone-500">
            <span className="w-1 h-1 bg-sage-500 rounded-full animate-pulse"></span>
            <span>INSTRUCTIONAL DESIGN</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl leading-[1.05] text-stone-900 font-light">
            I build <span className="italic font-medium text-sage-600">learning</span><br />with clarity and care.
          </h1>
          <p className="text-lg md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl">
            Grounded in human-centered design and learning science, I create AI-enhanced, research-informed learning experiences that empower people to navigate complexity and grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-sage-500 text-white rounded-full transition-all text-center font-medium shadow-lg shadow-sage-200 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-sage-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-white text-stone-800 border border-stone-200 rounded-full transition-all text-center font-medium hover:border-stone-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-stone-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
