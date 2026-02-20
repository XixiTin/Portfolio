
export type Category = 'Higher Ed' | 'K-12' | 'Adult Learning' | 'Training' | 'AI + Learning' | 'UX Design' | 'All';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: Category[];
  thumbnail: string;
  videoUrl?: string;
  videoTitle?: string;
  resourceLinks?: { label: string; url: string }[];
  context: string;
  challenge: string;
  challengeImage?: string;
  challengePainPoints?: { title: string; description: string }[];
  approach: string;
  duration?: string;
  role?: string;
  workflow?: string[];
  workflowImage?: string;
  journeyImage?: string;
  featureHighlightsImage?: string;
  workshopFlowImage?: string;
  contentOverviewImage?: string;
  contentOverviewTitle?: string;
  tools: string[];
  impact: string;
  reflection: string;
}

export interface PhilosophyNode {
  keyword: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
