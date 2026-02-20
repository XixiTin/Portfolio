
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { assetUrl } from '../utils/assetUrl';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [workflowImageExpanded, setWorkflowImageExpanded] = useState(false);
  const [journeyImageExpanded, setJourneyImageExpanded] = useState(false);
  const [challengeImageExpanded, setChallengeImageExpanded] = useState(false);
  const [featureHighlightsExpanded, setFeatureHighlightsExpanded] = useState(false);
  const [workshopFlowExpanded, setWorkshopFlowExpanded] = useState(false);
  const [contentOverviewExpanded, setContentOverviewExpanded] = useState(false);
  const [expandedPainPoint, setExpandedPainPoint] = useState<number | null>(null);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  useEffect(() => {
    if (!workflowImageExpanded && !journeyImageExpanded && !challengeImageExpanded && !featureHighlightsExpanded && !workshopFlowExpanded && !contentOverviewExpanded) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setWorkflowImageExpanded(false);
        setJourneyImageExpanded(false);
        setChallengeImageExpanded(false);
        setFeatureHighlightsExpanded(false);
        setWorkshopFlowExpanded(false);
        setContentOverviewExpanded(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [workflowImageExpanded, journeyImageExpanded, challengeImageExpanded, featureHighlightsExpanded, workshopFlowExpanded, contentOverviewExpanded]);

  useEffect(() => {
    setExpandedPainPoint(null);
    setActiveTimelineStep(0);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      {/* Sticky Header: Back to Portfolio (left) + Close (right) */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md flex justify-between items-center px-6 py-4 border-b border-stone-100 shadow-sm">
        <button 
          onClick={onClose}
          className="px-5 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Back to Portfolio
        </button>
        <div className="font-serif text-lg italic text-stone-500 hidden sm:block">{project.categories.join(', ')} / Project</div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        <header className="space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-stone-900">
            {project.title}
          </h1>
          <p className="text-2xl text-stone-500 font-light leading-relaxed">
            {project.subtitle}
          </p>
          {project.duration && (
            <p className="text-stone-500 text-sm font-medium">
              {project.duration}
            </p>
          )}
          {project.role && (
            <p className="text-stone-500 text-sm font-medium">
              {project.role}
            </p>
          )}
          <div className="group aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100">
            <img 
              src={assetUrl(project.thumbnail)} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer" 
            />
          </div>
        </header>

        {(project.videoUrl || project.contentOverviewImage) && (
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">
                {project.videoUrl ? (project.videoTitle || 'Demo') : (project.contentOverviewTitle || 'Manual Content Overview')}
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden border border-stone-100 shadow-xl bg-stone-100">
                {project.videoUrl ? (
                  project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                    <iframe
                      title={`${project.title} ${project.videoTitle || 'demo'}`}
                      src={project.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : project.videoUrl.includes('vimeo.com') ? (
                    <iframe
                      title={`${project.title} ${project.videoTitle || 'demo'}`}
                      src={project.videoUrl.replace('vimeo.com/', 'player.vimeo.com/video/')}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video src={project.videoUrl} controls className="w-full h-full object-contain" />
                  )
                ) : project.contentOverviewImage ? (
                  <button
                    type="button"
                    onClick={() => setContentOverviewExpanded(true)}
                    className="w-full h-full flex items-center justify-center cursor-zoom-in hover:opacity-95 transition-opacity"
                  >
                    <img
                      src={assetUrl(project.contentOverviewImage)}
                      alt={project.contentOverviewTitle || 'Content overview'}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ) : null}
              </div>
              {project.contentOverviewImage && (
                <p className="text-center text-sm text-stone-400">Click to enlarge</p>
              )}
              {project.contentOverviewImage && contentOverviewExpanded && (
                <div
                  className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
                  onClick={() => setContentOverviewExpanded(false)}
                  role="button"
                  tabIndex={0}
                  aria-label="Close enlarged content overview"
                >
                  <img
                    src={assetUrl(project.contentOverviewImage)}
                    alt={`${project.contentOverviewTitle || 'Content overview'} (enlarged)`}
                    className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
            <aside className="space-y-6">
              {project.resourceLinks && project.resourceLinks.length > 0 && (
                <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider">Project Resource Links</h4>
                  <ul className="space-y-2">
                    {project.resourceLinks.map((link, i) => (
                      <li key={i}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 hover:underline text-sm font-medium">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider">Tools Used</h4>
                <ul className="space-y-2">
                  {project.tools.map(tool => (
                    <li key={tool} className="flex items-center text-stone-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-sage-400 rounded-full mr-2"></span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-16">
            <section className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">Overview</h3>
              <p className="text-xl text-stone-700 leading-relaxed font-light">{project.context}</p>
            </section>

            <section className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">The Challenge</h3>
              <p className="text-xl text-stone-700 leading-relaxed font-light">{project.challenge}</p>
              {project.challengeImage && (
                <>
                  <button
                    type="button"
                    onClick={() => setChallengeImageExpanded(true)}
                    className="w-full rounded-2xl overflow-hidden border border-stone-100 shadow-lg bg-stone-50 cursor-zoom-in hover:border-sage-200 hover:shadow-xl transition-all text-left"
                  >
                    <img src={assetUrl(project.challengeImage)} alt="Challenge illustration" className="w-full h-auto object-contain" />
                    <p className="text-center text-sm text-stone-400 py-2">Click to enlarge</p>
                  </button>
                  {challengeImageExpanded && (
                    <div
                      className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
                      onClick={() => setChallengeImageExpanded(false)}
                      role="button"
                      tabIndex={0}
                      aria-label="Close enlarged challenge image"
                    >
                      <img
                        src={assetUrl(project.challengeImage)}
                        alt="Challenge illustration (enlarged)"
                        className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                  )}
                </>
              )}
              {project.challengePainPoints && project.challengePainPoints.length > 0 && (
                <div className="space-y-3 pt-4">
                  {project.challengePainPoints.map((point, i) => (
                    <div key={i} className="border border-stone-100 rounded-2xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setExpandedPainPoint(expandedPainPoint === i ? null : i)}
                        className="w-full px-6 py-4 bg-stone-50 flex items-center justify-between text-left hover:bg-stone-100 transition-colors"
                      >
                        <span className="font-medium text-stone-800">
                          Pain Point {i + 1}: {point.title}
                        </span>
                        <span className="flex-shrink-0 ml-2 text-stone-400">
                          {expandedPainPoint === i ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </span>
                      </button>
                      {expandedPainPoint === i && (
                        <div className="px-6 py-4 bg-white border-t border-stone-100">
                          <p className="text-stone-600 text-sm leading-relaxed font-light">{point.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">Design Approach</h3>
              <div className="text-xl text-stone-700 leading-relaxed font-light whitespace-pre-line">{project.approach}</div>
            </section>

            {(project.workflowImage || (project.workflow && project.workflow.length > 0)) && (
              <section className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">
                  {project.workflowImage ? 'System Workflow' : 'Process Timeline'}
                </h3>
                {project.workflowImage ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setWorkflowImageExpanded(true)}
                      className="w-full rounded-2xl overflow-hidden border border-stone-100 shadow-lg bg-stone-50 cursor-zoom-in hover:border-sage-200 hover:shadow-xl transition-all text-left"
                    >
                      <img 
                        src={assetUrl(project.workflowImage)} 
                        alt="System workflow diagram" 
                        className="w-full h-auto object-contain"
                      />
                      <p className="text-center text-sm text-stone-400 py-2">Click to enlarge</p>
                    </button>
                    {workflowImageExpanded && (
                      <div
                        className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
                        onClick={() => setWorkflowImageExpanded(false)}
                        role="button"
                        tabIndex={0}
                        aria-label="Close enlarged image"
                      >
                        <img 
                          src={assetUrl(project.workflowImage)} 
                          alt="System workflow diagram (enlarged)" 
                          className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                          onClick={() => setWorkflowImageExpanded(false)}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {project.workflow!.map((step, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setActiveTimelineStep(index)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                            activeTimelineStep === index
                              ? 'bg-sage-600 text-white border-sage-600 shadow-sm'
                              : 'bg-white text-stone-700 border-stone-200 hover:border-sage-400 hover:text-sage-700'
                          }`}
                        >
                          {`Phase ${index + 1}`}
                        </button>
                      ))}
                    </div>
                    <div className="relative mt-4 pl-4 border-l-2 border-sage-200">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sage-500" />
                      <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-sage-700 uppercase">
                          {project.workflow![activeTimelineStep].split(':')[0]}
                        </p>
                        <p className="text-xl text-stone-700 leading-relaxed font-light">
                          {project.workflow![activeTimelineStep].split(':').slice(1).join(':').trim()}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            )}

            {project.featureHighlightsImage && (
              <section className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">Feature Highlights</h3>
                <button
                  type="button"
                  onClick={() => setFeatureHighlightsExpanded(true)}
                  className="w-full rounded-2xl overflow-hidden border border-stone-100 shadow-lg bg-stone-50 cursor-zoom-in hover:border-sage-200 hover:shadow-xl transition-all text-left"
                >
                  <img
                    src={assetUrl(project.featureHighlightsImage)}
                    alt="Feature highlights"
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-center text-sm text-stone-400 py-2">Click to enlarge</p>
                </button>
                {featureHighlightsExpanded && (
                  <div
                    className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setFeatureHighlightsExpanded(false)}
                    role="button"
                    tabIndex={0}
                    aria-label="Close enlarged feature highlights"
                  >
                    <img
                      src={assetUrl(project.featureHighlightsImage)}
                      alt="Feature highlights (enlarged)"
                      className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                )}
              </section>
            )}

            {project.id === 'project-3' && project.journeyImage && (
              <section className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">Week-by-Week Learning Journey</h3>
                <button
                  type="button"
                  onClick={() => setJourneyImageExpanded(true)}
                  className="w-full rounded-2xl overflow-hidden border border-stone-100 shadow-lg bg-stone-50 cursor-zoom-in hover:border-sage-200 hover:shadow-xl transition-all text-left"
                >
                  <img
                    src={assetUrl(project.journeyImage)}
                    alt="Sleep Better weekly learning journey map"
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-center text-sm text-stone-400 py-2">Click to enlarge</p>
                </button>
                {journeyImageExpanded && (
                  <div
                    className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setJourneyImageExpanded(false)}
                    role="button"
                    tabIndex={0}
                    aria-label="Close enlarged journey image"
                  >
                    <img
                      src={assetUrl(project.journeyImage)}
                      alt="Sleep Better weekly learning journey map (enlarged)"
                      className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                )}
              </section>
            )}

            {project.workshopFlowImage && (
              <section className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-sage-600">Workshop Flow</h3>
                <button
                  type="button"
                  onClick={() => setWorkshopFlowExpanded(true)}
                  className="w-full rounded-2xl overflow-hidden border border-stone-100 shadow-lg bg-stone-50 cursor-zoom-in hover:border-sage-200 hover:shadow-xl transition-all text-left"
                >
                  <img
                    src={assetUrl(project.workshopFlowImage)}
                    alt="Workshop flow"
                    className="w-full h-auto object-contain"
                  />
                  <p className="text-center text-sm text-stone-400 py-2">Click to enlarge</p>
                </button>
                {workshopFlowExpanded && (
                  <div
                    className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setWorkshopFlowExpanded(false)}
                    role="button"
                    tabIndex={0}
                    aria-label="Close enlarged workshop flow"
                  >
                    <img
                      src={assetUrl(project.workshopFlowImage)}
                      alt="Workshop flow (enlarged)"
                      className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                )}
              </section>
            )}
          </div>

          <aside className="space-y-12">
            {!(project.videoUrl || project.contentOverviewImage) && (
              <>
                {project.resourceLinks && project.resourceLinks.length > 0 && (
                  <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider">Project Resource Links</h4>
                    <ul className="space-y-2">
                      {project.resourceLinks.map((link, i) => (
                        <li key={i}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-700 hover:underline text-sm font-medium">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider">Tools Used</h4>
                  <ul className="space-y-2">
                    {project.tools.map(tool => (
                      <li key={tool} className="flex items-center text-stone-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-sage-400 rounded-full mr-2"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {project.impact && (
              <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider">Outcome & Impact</h4>
                <p className="text-stone-700 font-light leading-relaxed whitespace-pre-line">{project.impact}</p>
              </div>
            )}
          </aside>
        </div>

        {project.reflection && (
          <section className="py-16 border-t border-stone-100 italic space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400 not-italic">Reflection</h3>
            <p className="text-2xl font-serif text-stone-800 leading-relaxed whitespace-pre-line">
              “{project.reflection}”
            </p>
          </section>
        )}

        <footer className="pt-10 pb-20" />
      </article>
    </div>
  );
};

export default CaseStudyModal;
