
import React, { useRef } from 'react';

const MILESTONES = [
  {
    year: '2015',
    title: 'Foundation in Language & Communication',
    description: 'Graduated with Bachelor of Literature in English (Translation & Interpretation) and built a foundation in cross-cultural communication and precise language use that later informed learner-centered design.',
    icon: '📚',
    color: 'bg-stone-100'
  },
  {
    year: '2015–2017',
    title: 'English Teacher',
    description: 'Taught English with a focus on IELTS preparation, helping learners build language skills and confidence for academic and professional goals.',
    icon: '🍎',
    color: 'bg-sage-100'
  },
  {
    year: '2017–2019',
    title: 'Instructional Leadership & Curriculum Design',
    description: 'Served as Instructional Lead and shifted focus toward curriculum design: leading teams, developing SOPs and resource libraries, and delivering customized IELTS programs for partner schools.',
    icon: '🏛️',
    color: 'bg-warm-100'
  },
  {
    year: '2019–2023',
    title: 'Career Pause & Reflection',
    description: 'Experienced a career gap due to family relocation to the U.S. During and after the pandemic, observed the growing importance of technology for education, which motivated the pivot toward learning technology and design.',
    icon: '🌍',
    color: 'bg-stone-200'
  },
  {
    year: '2023–2025',
    title: 'Graduate Studies & Higher Ed Internship',
    description: 'Strengthened practice in instructional design, UX design, learning analytics, and educational technology through MA program in Learning Technology and Experience Design at NYU Steinhardt and the internship as educational technologist at NYU Silver.',
    icon: '🎓',
    color: 'bg-sage-200'
  },
  {
    year: '2025–Now',
    title: 'Instructional Designer in Practice',
    description: 'Joined We Independent as Learning Designer, leading multiple workstreams including Start & Grow, Volunteer Orientation, and Onboarding Manual for DVHs. Deepened understanding of accessibility and inclusive design in real-world contexts.',
    icon: '🌱',
    color: 'bg-stone-900 text-white'
  }
];

const CARD_GAP = 32; // gap-8 = 2rem

const Journey: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector('.journey-card');
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 350;
      const scrollAmount = cardWidth + CARD_GAP;
      const scrollTo = direction === 'left'
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="journey" className="py-32 bg-warm-50 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">The Path</div>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Career Evolution</h2>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="horizontal-scroll-container no-scrollbar pb-10 overflow-x-auto gap-8 min-w-0"
        >
          {MILESTONES.map((m, idx) => (
            <div 
              key={idx} 
              className="journey-card horizontal-scroll-item flex-shrink-0"
            >
              <div className={`p-10 rounded-[2.5rem] h-full flex flex-col justify-between space-y-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-stone-100 ${m.color}`}>
                <div className="flex justify-between items-start">
                  <span className="font-serif text-4xl italic opacity-40">{m.year}</span>
                  <span className="text-3xl">{m.icon}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-medium">{m.title}</h3>
                  <p className="text-stone-500 font-light leading-relaxed">{m.description}</p>
                </div>
                <div className="pt-4 flex items-center text-[10px] uppercase tracking-widest font-bold opacity-30">
                  <span className="w-full h-px bg-current mr-4"></span>
                  Milestone
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
