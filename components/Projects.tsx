
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Category, Project } from '../types';
import { assetUrl } from '../utils/assetUrl';

interface ProjectCardProps {
  project: Project;
  onClick: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
      onClick={() => onClick(project)}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={assetUrl(project.thumbnail)} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
          {project.categories.map(cat => (
            <span key={cat} className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest text-stone-800 rounded-full shadow-sm">
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h3 className="font-serif text-2xl text-stone-900 group-hover:text-sage-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-stone-500 font-light line-clamp-2">
          {project.subtitle}
        </p>
        <div className="flex items-center text-sage-600 text-sm font-medium pt-2">
          Read more
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

function getSortDate(project: Project): number {
  const d = project.duration;
  if (!d) return 0;
  const ongoingMatch = d.match(/Ongoing since (\d{4})\.(\d{1,2})/);
  if (ongoingMatch) {
    return parseInt(ongoingMatch[1] + ongoingMatch[2].padStart(2, '0'), 10);
  }
  const rangeMatch = d.match(/(\d{4})\.(\d{1,2})\s*-\s*(\d{4})\.(\d{1,2})/);
  if (rangeMatch) {
    return parseInt(rangeMatch[3] + rangeMatch[4].padStart(2, '0'), 10);
  }
  const singleMatch = d.match(/(\d{4})\.(\d{1,2})/);
  if (singleMatch) {
    return parseInt(singleMatch[1] + singleMatch[2].padStart(2, '0'), 10);
  }
  return 0;
}

const Projects: React.FC<{ onSelect: (p: Project) => void }> = ({ onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const categories: Category[] = ['All', 'Higher Ed', 'K-12', 'Adult Learning', 'Training', 'AI + Learning', 'UX Design'];

  const filteredProjects = (activeCategory === 'All' 
    ? [...PROJECTS] 
    : PROJECTS.filter(p => p.categories.includes(activeCategory))
  ).sort((a, b) => getSortDate(b) - getSortDate(a));

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Featured Work</h2>
            <p className="text-stone-500 font-light max-w-md">
              A selection of projects where I solved complex learning challenges with thoughtful design.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative px-5 py-2 rounded-full text-xs font-medium transition-all overflow-hidden ${
                  activeCategory === cat 
                    ? cat === 'All'
                      ? 'text-white shadow-lg'
                      : 'bg-stone-900 text-white shadow-lg'
                    : 'bg-white text-stone-500 border border-stone-100 hover:border-stone-300 hover:shadow-lg hover:-translate-y-0.5'
                }`}
                style={activeCategory === cat && cat === 'All' ? { backgroundColor: '#6F866B' } : {}}
              >
                <span className="relative z-10">{cat}</span>
                {activeCategory !== cat && (
                  <div className="absolute inset-0 bg-sage-200 rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} onClick={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
