
import React from 'react';
import Logo from './Logo';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-warm-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="font-serif text-4xl md:text-6xl text-stone-900 leading-tight">
          Ready to build something <span className="italic">impactful</span> together?
        </h2>
        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
          Whether you have a specific project in mind or just want to chat about the future of learning, my door is always open.
        </p>
        
        <div className="pt-8">
          <a 
            href="mailto:xt2025@nyu.edu?subject=I'm%20interested%20in%20your%20work%20and%20want%20to%20connect."
            className="inline-block px-12 py-5 bg-sage-500 text-white rounded-full text-lg font-medium shadow-2xl shadow-sage-200 hover:bg-sage-600 hover:-translate-y-2 transition-all duration-300"
          >
            Say Hello
          </a>
        </div>

        <div className="flex justify-center space-x-12 pt-16 text-stone-400 font-medium tracking-widest text-xs uppercase">
          <a href="https://www.linkedin.com/in/xixi-tian/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 transition-colors">LinkedIn</a>
          <a href="https://drive.google.com/file/d/1I2Ye2qXUsG8LcOFCQQdSo4nDqKiGqbzQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 transition-colors">Resume PDF</a>
        </div>

        <div className="pt-24 opacity-40 flex flex-col items-center">
          <Logo className="w-12 h-12 mb-4" />
          <p className="text-[10px] uppercase tracking-widest mt-2">© {new Date().getFullYear()} Designed with learners in mind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
