
import React from 'react';
import Journey from './Journey';

const About: React.FC = () => {
  return (
    <>
    <section id="about-page" className="py-24 bg-warm-50 overflow-hidden">
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <div className="space-y-12 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="font-serif text-5xl md:text-7xl leading-tight text-stone-900 font-light">
              I'm an <span className="italic font-medium">instructional designer</span> who turns complexity into<br /><span className="bg-sage-600 text-white pl-0 pr-2 py-1 hover:bg-transparent hover:text-sage-600 transition-colors duration-300 cursor-default">clear, actionable learning.</span>
            </h1>
            
            <div className="space-y-8 text-lg md:text-xl text-stone-600 leading-relaxed font-light">
              <p>
                I used to teach English and IELTS, then led curriculum design at an education company. When I moved to the U.S., the pandemic made me rethink how people learn. I went back to school at NYU Steinhardt for learning design and now work at We Independent, where I build things like volunteer onboarding, entrepreneurship courses for women, and guides for dependent visa holders.
              </p>
              <p>
                I care about learners who don't always get good support. Caregivers, first-year students, faculty trying to use AI, volunteers, women starting businesses. I try to make things simple, useful, and accessible so more people can actually use them.
              </p>
              <p className="font-serif italic text-2xl text-stone-800">
                I craft learning experiences that matter.
              </p>
            </div>
        </div>
      </div>
    </section>
    <Journey />
    </>
  );
};

export default About;
