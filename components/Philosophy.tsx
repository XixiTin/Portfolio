
import React, { useState } from 'react';
import { PHILOSOPHY } from '../constants';
import { PhilosophyNode } from '../types';

const Philosophy: React.FC = () => {
  const [activeNode, setActiveNode] = useState<PhilosophyNode>(PHILOSOPHY[0]);

  return (
    <section id="philosophy" className="py-32 bg-stone-900 text-stone-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-stone-50 to-transparent opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-white">Design Philosophy</h2>
              <p className="text-stone-400 font-light text-lg">
                Click the principles to explore my foundational beliefs in instructional architecture.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              {PHILOSOPHY.map((node) => (
                <button
                  key={node.keyword}
                  onClick={() => setActiveNode(node)}
                  className={`group flex items-center p-6 rounded-2xl transition-all duration-500 text-left ${
                    activeNode.keyword === node.keyword 
                    ? 'bg-sage-600 text-white scale-105 shadow-2xl' 
                    : 'bg-stone-800/50 text-stone-500 hover:bg-stone-800'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mr-6 transition-all ${
                    activeNode.keyword === node.keyword ? 'bg-white/20' : 'bg-stone-700'
                  }`}>
                    {node.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Principle</div>
                    <div className="text-xl font-serif">{node.keyword}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-stone-800 rounded-[3rem] p-12 flex flex-col justify-center items-center text-center space-y-8 shadow-inner border border-stone-700/50">
                <div className="w-20 h-20 bg-sage-500/20 text-sage-400 rounded-full flex items-center justify-center scale-125 mb-4">
                  {activeNode.icon}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-white">
                  {activeNode.title}
                </h3>
                <p className="text-lg text-stone-400 font-light leading-relaxed max-w-sm">
                  {activeNode.description}
                </p>
             </div>
             {/* Decorative element */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-sage-600/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
