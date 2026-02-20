
import React from 'react';
import { Project, PhilosophyNode } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'PrepMaster',
    subtitle: 'An AI-Driven Pre-Class Support System for Graduate Students.',
    categories: ['Higher Ed', 'Adult Learning', 'AI + Learning'],
    thumbnail: 'assets/prepmaster-thumbnail.png',
    videoUrl: 'https://youtu.be/oNf4LrVzJTY',
    context: 'PrepMaster is a conversational AI application designed to help graduate students self-assess their understanding and gain confidence in key concepts before class. It addresses varying knowledge backgrounds and limited pre-class support through tailored AI-driven preparation.',
    challenge: 'Graduate students often face challenges due to varying knowledge backgrounds, making it difficult to grasp key concepts essential for active participation in class activities.',
    challengePainPoints: [
      { title: 'Knowledge Gaps', description: 'Students may lack foundational understanding of course material, leading to difficulty engaging in class discussions.' },
      { title: 'Pre-Class Anxiety', description: 'Uncertainty about their preparedness causes stress and reduces participation in classroom learning.' },
      { title: 'Limited Pre-Class Support', description: 'Existing resources are often generic and fail to address individual learning needs effectively.' }
    ],
    approach: 'Design Principles:\n• Backward Design\n• User-Centered Design\n\nThe system leverages AI Agents, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) to provide tailored support and identify knowledge gaps.',
    duration: '2024.9 - 2024.12',
    role: 'Project Lead + Programmer',
    workflowImage: 'assets/prepmaster-workflow.png',
    tools: ['Visual Studio Code', 'Github', 'Python', 'Langchain', 'Crew AI', 'Chainlit', 'LLMs', 'RAG', 'Prompt Engineering'],
    impact: 'The project did not reach full production. Delivered: a clear system architecture, a working RAG-based pipeline, and stakeholder-validated learning workflow. Technical complexity in agent orchestration and prompt stability limited further progress.',
    reflection: 'PrepMaster taught me that effective AI design begins with clarity of the learning problem, not the technology itself. Building this system deepened my understanding of agentic workflows and structured prompt design and showed me that meaningful intelligence emerges from intentional orchestration, not just powerful models.'
  },
  {
    id: 'project-2',
    title: 'EBP Pathway',
    subtitle: 'An AI-Powered Learning Platform for Caregivers of Children with Autism.',
    categories: ['AI + Learning', 'Adult Learning', 'UX Design'],
    thumbnail: 'assets/ebp-pathway-thumbnail.png',
    context: 'EBP Pathway is a learning platform that provides personalized and structured learning materials for caregivers of autistic children, including texts, videos, checklists, and practical strategies, on evidence-based practices (EBPs), which are scientifically proven methods to support the learning and development of autistic children. The platform features an AI assistant to provide personalized learning experience.',
    challenge: 'Caregivers of autistic children face significant challenges and gaps in knowledge, skills, communication, and resources for more effective teaching and learning experience and better development of their children.',
    challengePainPoints: [
      { title: 'Limited Empirical & Personalized Resources', description: 'Caregivers had limited professional support and access to EBPs, and struggled with creating and managing personalized education.' },
      { title: 'Limited Time & Effort', description: 'Caregivers need to balance family responsibilities with children\'s learning and development.' },
      { title: 'Diverse Needs', description: 'Caregivers need to address behavioral, social, and emotional challenges in diverse situations.' }
    ],
    approach: 'Design Principles:\n• Universal Design for Learning\n• User-Centered Design\n• Human-Centered Artificial Intelligence',
    duration: '2024.9 - 2025.5',
    role: 'Personal thesis project',
    workflow: [
      'Phase 1 — Research & Analyse: Researched caregiver needs and challenges through literature review and user interviews. Identified gaps in access to evidence-based practices and defined learning objectives for personalized EBP education.',
      'Phase 2 — Design & Develop: Applied UDL, UCD, and Human-Centered AI principles to design the platform structure. Developed content modules (texts, videos, checklists), integrated an AI assistant for personalized support, and built a Figma prototype.',
      'Phase 3 — Evaluate & Refine: Conducted usability testing with caregivers and refined the prototype based on feedback. Iterated on the AI assistant interaction and content flow to improve learner experience.'
    ],
    tools: ['Figma', 'Canva', 'User Research'],
    videoUrl: 'https://youtu.be/LCqBr8wWzQw',
    videoTitle: 'Project presentation',
    resourceLinks: [
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/NyWG5StXgrl3r4HWg5MCov/EBP-pathway--Copy-?node-id=76-2299&t=BuUMMYjQTP6dQR9X-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A2299&show-proto-sidebar=1' },
      { label: 'Project Site', url: 'https://sites.google.com/nyu.edu/xixi-tian-thesis/home' },
      { label: 'Platform Onboarding Video', url: 'https://www.youtube.com/watch?v=Obo3Pi0lWZ8' }
    ],
    impact: 'The platform delivers personalized learning content tailored to caregivers\' needs, AI assistance for multi-modality learning and smart note-taking, and progress tracking for knowledge and application of learned EBPs.',
    reflection: 'This project taught me to bridge technical design with caregiver realities. From the caregiver side, I learned how limited time, diverse child needs, and lack of professional support shape what “accessible” really means. From the technical side, I explored how AI can extend, not replace, human support: smart note-taking, multimodal learning, and adaptive content that flexes to each family’s context.'
  },
  {
    id: 'project-3',
    title: 'Sleep Better',
    subtitle: 'A Learning Experience for Young Adults',
    categories: ['Adult Learning', 'UX Design'],
    thumbnail: 'assets/sleep-better-thumbnail.png',
    context: '"Sleep Better" is an interactive learning experience designed to address the growing challenge of poor sleep quality among young adults aged 18 to 34. By combining personalized learning strategies with accessible resources, this project aims to empower users with knowledge and techniques to enhance their sleep health.',
    challenge: 'Amid heightened stress levels and increased smartphone usage, young adults are struggling to achieve high-quality sleep. This impacts their physical and mental well-being, emphasizing the need for effective educational tools and resources.',
    challengePainPoints: [
      { title: 'Lack of Awareness', description: 'Many individuals lack foundational knowledge about the science and importance of sleep.' },
      { title: 'Unhealthy Habits', description: 'Poor sleep hygiene practices, coupled with modern lifestyle challenges, hinder quality rest.' },
      { title: 'Limited Support', description: 'A lack of accessible resources and personalized strategies prevents effective sleep management.' }
    ],
    approach: 'Design Approaches:\n• ADDIE Model\n• Bloom\'s Taxonomy\n• Universal Design for Learning (UDL)',
    duration: '2024.2 - 2024.5',
    role: 'Research lead',
    workflow: [
      'Phase 1 — Research & Analyse: Conducted interviews, surveys, and desk research to identify knowledge, habits, and motivational gaps. Leveraged Bloom\'s Taxonomy to define clear goals and objectives.',
      'Phase 2 — Design & Develop: Brainstormed and evaluated multiple ideas, ultimately creating an interactive online course with gamification and multimedia learning principles.',
      'Phase 3 — Evaluate & Refine: Developed a high-fidelity prototype using Figma. Conducted usability tests and formative evaluations to gather feedback and refine the product.'
    ],
    journeyImage: 'assets/sleep-better-journey.png',
    tools: ['Figma', 'Google Workspace', 'User Research', 'User Journey Map', 'Mixed Research Methods'],
    videoUrl: 'https://www.youtube.com/watch?v=d5pzFwtIWFE',
    videoTitle: 'Demo',
    impact: 'Designed a 4-week learning experience to close knowledge gaps and encourage healthier sleep habits. Built a high-fidelity, gamified mobile prototype, and early evaluations showed higher awareness and stronger willingness to adopt better sleep routines.',
    reflection: 'This project strengthened my ability to run end-to-end, research-driven learning design. I led mixed-methods research (desk research, interviews, surveys, SME consultations) to translate learner insights into clear objectives, activities, and assessments. Applying and adapting models like ADDIE and Bloom\'s Taxonomy in an informal, mobile learning context taught me how to balance learner needs, stakeholder expectations, and practical constraints to make evidence-based design decisions.',
    resourceLinks: [
      { label: 'Project Website', url: 'https://sites.google.com/view/sleep-team/home' },
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/GIjJJVRFcoAWeFKfv9Uo5a/Online-Course-Mobile-Application--Community-?type=design&node-id=299-316&t=XMSKFK1mtTyMx00Z-1&scaling=scale-down&page-id=15%3A2&starting-point-node-id=17%3A1654&show-proto-sidebar=1' }
    ]
  },
  {
    id: 'project-4',
    title: 'My Desk',
    subtitle: 'A Learner-Centered Task Management System',
    categories: ['Higher Ed', 'Adult Learning', 'UX Design'],
    thumbnail: 'assets/my-desk-thumbnail.png',
    context: 'My Desk is an intuitive and centralized academic task management platform designed specifically for first-year NYU ECT students. It addresses the challenges of fragmented platforms and overwhelming navigation, providing students with an easy-to-use hub for managing assignments, deadlines, and academic resources.',
    challenge: 'First-year ECT students struggle with fragmented assignment information spread across multiple platforms, leading to difficulties in staying organized and increased stress in navigating academic requirements.',
    challengeImage: 'assets/my-desk-challenge.png',
    challengePainPoints: [
      { title: 'Information Overload', description: 'Students face significant cognitive strain navigating multiple platforms for assignments and resources.' },
      { title: 'Scattered Information', description: 'Assignment details, deadlines, and guidelines are inconsistently shared, often across different platforms.' },
      { title: 'Emotional Stress', description: 'The lack of a unified system exacerbates feelings of overwhelm and reduces academic confidence.' }
    ],
    approach: 'The project followed an iterative and collaborative process grounded in User-Centered Design and the ADDIE Framework.',
    duration: '2023.9 - 2023.12',
    role: 'UX researcher',
    workflow: [
      'Phase 1 — Discover & Define: Conducted 28 surveys and 5 interviews to uncover core pain points. Developed personas, affinity maps, and user journey insights to define the problem.',
      'Phase 2 — Ideate & Develop: Explored solutions through divergent and convergent thinking. Created low-fidelity sketches and high-fidelity prototypes.',
      'Phase 3 — Test & Refine: Performed usability testing with 9 critical tasks, recording insights using the Rainbow Sheet methodology to refine the platform iteratively.'
    ],
    featureHighlightsImage: 'assets/my-desk-features.png',
    tools: ['Figma', 'Google Workspace', 'User Research', 'Affinity Mapping', 'Persona Development', 'Usability Testing'],
    impact: 'Delivered a centralized task management platform that aggregates assignment-related information, significantly reducing navigation time and cognitive load. The high-fidelity prototype with 44 interactive screens underwent rigorous usability testing; feedback showed reduced stress and improved organization among users.',
    reflection: '',
    resourceLinks: [
      { label: 'Phase 1 Presentation Deck', url: 'https://docs.google.com/presentation/d/1PNxxvClTRH--YEFVs6qF8SbSYKcVFvYqRi3kjH1jnD8/edit?slide=id.g2974df7ebbd_8_899#slide=id.g2974df7ebbd_8_899' },
      { label: 'Phase 2+3 Presentation Deck', url: 'https://docs.google.com/presentation/d/1LWbY5V71dGOs_f2OeBgraSouSurmcSz-yFgD7WL4qmI/edit?usp=sharing' },
      { label: 'Figma Prototype', url: 'https://www.figma.com/proto/QAH4Neosbz9Uoass00EQfO/My-Desk-Prototype?node-id=51-21&p=f&t=FGADnBn4O46BUOpr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A21' }
    ]
  },
  {
    id: 'project-5',
    title: 'DArt',
    subtitle: 'A Theory-Based Art Workshop on Death Education',
    categories: ['K-12'],
    thumbnail: 'assets/dart-thumbnail.png',
    context: 'DArt is an innovative workshop designed to explore the intersection of death and art through multimedia and interactive activities. Targeted at middle school students, it delves into death-themed artworks from different historical periods, enabling students to process the concept of mortality, foster empathy, and nurture emotional resilience.',
    challenge: 'Death remains a sensitive and often avoided topic in education. The absence of structured death education for younger audiences leaves gaps in their emotional maturity and understanding of life.',
    challengePainPoints: [
      { title: 'Neglected Topic in Education', description: 'Existing educational systems rarely address death, leaving students unprepared to process loss or mortality.' },
      { title: 'Lack of Engagement', description: 'Current death education tools lack multimedia interactivity, which reduces motivation and engagement.' },
      { title: 'Limited Emotional Development', description: 'Young learners often miss opportunities to reflect on and express their feelings about mortality in a structured, supportive environment.' }
    ],
    approach: 'The project followed the ASSURE Model and Bloom\'s Taxonomy. Designed multimedia learning materials grounded in Cognitive Load Theory and Cognitive Theory of Multimedia Learning.',
    duration: '2023.9 - 2023.12',
    role: 'Learning designer',
    workflow: [
      'Phase 1 — Understand & Critique: Conducted desk research and a market analysis of four learning experiences to identify gaps in current death education. Defined learning objectives.',
      'Phase 2 — Design: Designed multimedia learning materials based on theories such as Cognitive Load Theory and Cognitive Theory of Multimedia Learning and workshop content.',
      'Phase 3 — Develop: Developed a 90-minute workshop for students with hotspot-enabled interactive artworks, categorization of elements from different periods, and creative activities for death-themed art making.'
    ],
    workshopFlowImage: 'assets/dart-workshop-flow.png',
    tools: ['Google Sites', 'H5P'],
    impact: 'Students learned to analyze death-themed artworks, compare historical perspectives, and create their own art pieces. The workshop incorporated multimedia lectures, hotspot-enabled digital artworks, and group activities. Participants reported increased comfort in discussing death and a greater ability to empathize with others.',
    reflection: 'Death is heavy. Societal reluctance makes it hard to explore thoughts and emotions about mortality publicly.\n\nDeath is broad. Navigating cultural and religious diversity is difficult, and while we narrowed our target users, death education itself should not be narrowed.\n\nDeath is developmental. Designing for classrooms that can develop healthy awareness taught me to balance sensitivity with openness and to create space for reflection through art.',
    resourceLinks: [
      { label: 'Workshop Website', url: 'https://sites.google.com/nyu.edu/dart/home' },
      { label: 'Design Document', url: 'https://docs.google.com/document/d/1bZ11BVemFdtm7EnDrNG0tUzuLd-GD6MIEALqhZbsdK4/edit?usp=sharing' }
    ]
  },
  {
    id: 'project-6',
    title: 'Parenting Journey',
    subtitle: 'An Interactive Simulation to Guide Parents through the Transition to Siblinghood',
    categories: ['Adult Learning', 'UX Design'],
    thumbnail: 'assets/parenting-journey-thumbnail.png',
    context: 'The Parenting Journey simulation is an interactive learning tool designed for parents expecting another child. This simulation equips parents with the skills and knowledge to support their firstborn during the transition to siblinghood. It combines decision-based scenarios, multimedia resources, and evidence-based strategies for an engaging and practical learning experience.',
    challenge: 'Parents often struggle to manage the emotional and behavioral changes in their firstborn when expecting a second child. There is a lack of accessible, evidence-based resources to guide parents through this critical developmental transition.',
    challengePainPoints: [
      { title: 'Lack of Accessible Resources', description: 'Parents find it hard to access practical, evidence-based advice on preparing firstborns for a new sibling.' },
      { title: 'Emotional and Behavioral Challenges', description: 'Managing firstborns\' jealousy, confusion, and insecurity during this transition is stressful for many parents.' },
      { title: 'Balancing Time and Resources', description: 'Parents often feel overwhelmed by the demands of caring for a newborn while ensuring their firstborn doesn\'t feel neglected.' }
    ],
    approach: 'The project followed User-Centered Design, Bloom\'s Taxonomy, and Scenario-Based Learning.',
    duration: '2024.3 - 2024.5',
    role: 'Personal design project',
    workflow: [
      'Phase 1 — Discover & Understand: Understood parents\' struggles during siblinghood transitions through desk research and SME interviews.',
      'Phase 2 — Prototype & Iterate: Created interactive prototypes with Articulate Storyline 360 and refined based on user feedback.',
      'Phase 3 — Integrate Content: Included multimedia resources like videos and articles to enhance learning.'
    ],
    videoUrl: 'https://www.youtube.com/watch?v=tWcjJSki3BQ',
    videoTitle: 'Demo',
    tools: ['Articulate Storyline 360', 'User Research', 'SME Interviews', 'Usability Testing'],
    impact: 'Delivered an interactive simulation with real-life decision-making scenarios, prompt feedback, and personalized learning paths. Integrated multimedia content (videos, articles) to support different learning preferences and make evidence-based strategies accessible to parents.',
    reflection: '',
    resourceLinks: [
      { label: 'Articulate Storyline', url: 'https://360.articulate.com/review/content/ab5755f3-6efa-46be-b812-4532eee77c70/review' }
    ]
  },
  {
    id: 'project-7',
    title: 'Onboarding Manual for DVHs',
    subtitle: 'A Learner-Friendly Guide for Dependent Visa Holders in the U.S.',
    categories: ['Adult Learning'],
    thumbnail: 'https://picsum.photos/seed/onboarding/800/600',
    context: 'The Onboarding Manual is a learner-friendly guide created to help dependent visa holders in the U.S. navigate immigration status basics and the everyday systems that affect stability and wellbeing. It consolidates scattered information into a structured pathway so readers can quickly find what to do, what to prepare, and where to verify details through trusted resources.',
    challenge: 'Dependent visa holders often face a steep learning curve when moving to or restarting life in the U.S., with limited guidance, high-stakes paperwork, and constant uncertainty tied to the primary visa holder\'s status. The challenge was to design a resource that is clear, accurate, and actionable, while staying accessible to readers with different backgrounds and lived experiences.',
    challengePainPoints: [
      { title: 'Fragmented & Overwhelming Information', description: 'Critical guidance on visas, housing, healthcare, and paperwork is spread across government sites, forums, and word-of-mouth. DVHs must navigate multiple systems (immigration, banking, healthcare) with no single, trusted entry point.' },
      { title: 'High-Stakes Decisions, Low Confidence', description: 'Small misunderstandings in forms, timelines, or eligibility can create costly delays and stress. Even minor oversights can affect status, and professional support is often scarce or costly.' },
      { title: 'Path to Independence: Limited Validation & Contingency Guidance', description: 'Without clear guidance on transitioning from dependent to independent status (through study or work) or on what to do when the primary visa holder\'s situation changes, many DVHs lack both a roadmap and contingency support.' }
    ],
    approach: 'Design Approaches:\n• Adult Learning Theory\n• Learner-Centered Design\n• Community-Based Design',
    duration: '2025.6 - 2025.11',
    role: 'Project lead + main composer',
    workflow: [
      'Phase 1 — Research & Analysis: Conducted surveys and interviews to understand common challenges, questions, and decision points. Synthesized themes into "moments that matter" across the dependent visa journey and identified where misinformation and anxiety were highest.',
      'Phase 2 — Structure & Content Design: Translated findings into an outline and chapter structure that supports quick scanning and deeper reading. Built modules around real tasks (what to prepare, what to ask, what to verify) and embedded curated resource pathways for trustworthy follow-up.',
      'Phase 3 — Writing, Reviewing & Delivery: Led iterative drafting, editing, and proofreading across chapters, ensuring clarity, consistency, and accessibility. Coordinated a writing and research team workflow, aligned voice and formatting, and compiled the final manual for release.'
    ],
    contentOverviewImage: 'assets/onboarding-manual-overview.png',
    tools: ['User Research', 'Literature Review', 'Canva', 'Google Workspace'],
    impact: 'Delivered a multi-chapter onboarding manual that turns complex processes into a supportive learning journey, combining plain-language explanations, checklists, and curated links to verified resources.',
    reflection: '',
    resourceLinks: [
      { label: 'Onboarding Manual PDF', url: 'https://drive.google.com/file/d/15qRrqjUpB0p1QS77AzSWHX2LIUGyY1U0/view?usp=sharing' }
    ]
  },
  {
    id: 'project-8',
    title: 'Generative AI Toolkit for Faculty',
    subtitle: 'A Web-Based Teaching Resource for NYU Silver Faculty',
    categories: ['Higher Ed', 'Adult Learning', 'AI + Learning', 'UX Design'],
    thumbnail: 'assets/genai-toolkit-thumbnail.png',
    contentOverviewImage: 'assets/genai-toolkit-sections-preview.png',
    contentOverviewTitle: 'Toolkit preview',
    context: 'The Generative AI Toolkit for NYU Silver faculty is a web-based teaching resource designed to help faculty understand Generative AI and make informed choices about using it in courses and research. The site guides faculty through foundational concepts, responsible use, and practical teaching support. The toolkit is organized into Understanding GenAI, Teaching & Learning with GenAI, and Research & GenAI sections, with text-based and video tutorials.',
    challenge: 'Faculty needed timely, trustworthy guidance in a fast-changing GenAI landscape, without having to piece together scattered resources or interpret conflicting advice. The challenge was to balance clarity and practicality with responsibility and risk awareness.',
    approach: 'Design Approaches:\n• Learner-Centered Design\n• Human-Centered Artificial Intelligence\n• Adult Learning Theory\n• Situated Learning\n• Universal Design for Learning',
    duration: '2024.5 - 2024.8',
    role: 'Project lead + main designer',
    workflow: [
      'Phase 1 — Research & Resource Audit: Conducted survey research and reviewed existing GenAI teaching resources to identify faculty needs, high-risk confusion points, and the most useful "ready-to-use" formats.',
      'Phase 2 — Structure & Content: Finalized the toolkit structure, then drafted and iterated on core sections and additional resources.',
      'Phase 3 — Visuals, Site Build, SME Testing: Created tutorials and visual assets, built the toolkit site on Google Sites. Tested content with subject matter experts to improve clarity, accuracy, and usability.'
    ],
    tools: ['Survey Research', 'Google Sites', 'Trello', 'Canva', 'GPT Builder', 'Prompt Engineering'],
    impact: 'The toolkit delivered a structured, faculty-friendly pathway from GenAI literacy → responsible use → classroom-ready implementation. It provides accessible guidance on syllabus guidelines, recommended faculty responses, classroom agreements, AI detection strategies, and learning design with GenAI.',
    reflection: '',
    resourceLinks: [
      { label: 'Toolkit Site', url: 'https://sites.google.com/nyu.edu/nyu-silver-teaching-toolkit/generative-ai' }
    ]
  },
  {
    id: 'project-9',
    title: 'Volunteer Orientation',
    subtitle: 'An Online Onboarding Experience for We Independent Volunteers',
    categories: ['Training', 'Adult Learning'],
    thumbnail: 'assets/volunteer-orientation-thumbnail.png',
    context: 'Volunteer Orientation (We Independent) is an online onboarding experience designed to help new volunteers, across different departments, backgrounds, and locations, quickly understand We Independent\'s mission, the DVH community context, and what success looks like in their specific role. Built as a modular, interactive, and self-paced orientation, it combines organization context, role clarity, communication norms, and departmental resources so volunteers can contribute confidently from day one.',
    challenge: 'We Independent relies heavily on volunteers, but remote, cross-functional teams create onboarding gaps: new volunteers often join without a shared mental model of the organization, consistent expectations, or an easy way to learn the tools and workflows. The challenge was to design an orientation that supports fast ramp-up, reduces uncertainty, and builds a consistent volunteer experience, without requiring synchronous training for every onboarding cycle.',
    challengePainPoints: [
      { title: 'Mission clarity + "why it matters"', description: 'New volunteers need context (origin story, mission/values, impact) to connect their work to the community they serve.' },
      { title: 'Role ambiguity across departments', description: 'Volunteers need clear role options, expectations, boundaries, and department workflows to avoid confusion and drop-off.' },
      { title: 'Sensitivity + safety in DVH-facing work', description: 'Because volunteers may interact with DVH women and personal stories, training must include cultural sensitivity, confidentiality, and safe volunteering practices.' }
    ],
    approach: 'Design Principles:\n• Adult Learning Theory\n• Community-Based Design\n• Job-Focused Design\n• Culture Onboarding',
    duration: 'Ongoing since 2025.8',
    role: 'Project lead + main designer',
    workflow: [
      'Phase 1 — Content Planning & Structure: Mapped the volunteer journey into clear modules: Welcome/mission → role understanding → DVH sensitivity → tools/resources → safety/compliance → growth/learning → departmental onboarding → getting-started checklist.',
      'Phase 2 — Learning Design & Asset Development: Designed content formats that support quick scanning and action.',
      'Phase 3 — Build in Genially + Iteration: Produced the online orientation experience in Genially and aligned it to real volunteer workflows, preparing it for ongoing updates as programs evolve.'
    ],
    tools: ['Genially', 'Google Workspace', 'Canva', 'Lucidchart'],
    impact: 'The project delivered a structured orientation that standardizes onboarding for a distributed volunteer workforce. New volunteers can quickly learn:\n• We Independent\'s mission/impact\n• How volunteer roles fit into the organization\n• DVH context and empathy practices\n• Core tools and communication norms\n• The concrete first steps to start contributing\n\nThis reduces onboarding burden on team leads and improves consistency across departments.',
    reflection: ''
  },
  {
    id: 'project-10',
    title: 'Start & Grow: Women\'s Entrepreneurship Course Series',
    subtitle: 'A Multi-Course Learning Library for Women Entrepreneurs',
    categories: ['Adult Learning', 'UX Design'],
    thumbnail: 'https://picsum.photos/seed/start-grow/800/600',
    context: 'Start & Grow is a course series on entrepreneurship to help more women in the U.S. build practical business skills, launch income-generating ideas, and grow toward long-term independence. Instead of a single "one-size" program, the initiative is designed as a multi-course learning library taught by different subject-matter experts (SMEs), so learners can choose pathways that match their goals.',
    challenge: 'Many women interested in entrepreneurship face a mix of barriers: limited time, unclear starting points, fragmented advice online, and uncertainty around U.S. business systems. The challenge was to create a set of courses that are practical, step-by-step, and emotionally supportive, while remaining flexible enough to serve learners at different stages.',
    challengePainPoints: [
      { title: '"I don\'t know where to start."', description: 'Learners need a clear pathway that turns vague goals into specific next actions.' },
      { title: 'Information overload + low trust', description: 'Online content is abundant but inconsistent; learners need curated guidance with templates and checklists.' },
      { title: 'Skill gaps are uneven', description: 'Some learners need fundamentals, while others need targeted support. A modular course library solves this better than a single long program.' }
    ],
    approach: 'Design Approaches:\n• Backward Design\n• Learner-Centered Design\n• Online Learning\n• Project-Based Learning\n• Adult Learning Theory\n• Multimedia Learning\n• Self-Determination Theory',
    duration: 'Ongoing since 2025.12',
    role: 'Instructional designer',
    workflow: [
      'Phase 1 — Discovery & Course Library Planning (In progress): Identify common learner goals and design a staged pathway model (start → establish → scale), then scope where different SMEs could add the most value.',
      'Phase 2 — SME Storyboarding & Content Design (In progress): Partner with SMEs to convert expertise into teachable modules: learning outcomes, lesson flow, examples, practice tasks, and downloadable resources.',
      'Phase 3 — Production & Platform Build (Planned): Produce recorded lessons and build the course experience in a structured LMS format, ensuring smooth navigation, clear progress, and accessible materials.',
      'Phase 4 — Review & Iteration (Planned): Conduct internal review for clarity and usability, refine pacing and examples, and standardize formatting so future SME courses can plug into the same system.'
    ],
    tools: ['LMS (Thinkific)', 'Camtasia', 'Canva', 'Google Workspace'],
    impact: 'Project in early stages. The course library model aims to provide flexible, practical pathways for women entrepreneurs at different stages of their journey.',
    reflection: ''
  }
];

export const PHILOSOPHY: PhilosophyNode[] = [
  {
    keyword: 'Empathy',
    title: 'Learner-Centric Heart',
    description: 'I start by walking in the learner\'s shoes, especially those who are often underserved. Who are they? What keeps them up? I design with community and inclusion in mind, so learners feel seen and supported.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    keyword: 'Clarity',
    title: 'Reducing Cognitive Load',
    description: 'Minimalism isn\'t just an aesthetic; it\'s a pedagogical necessity. I strip away the noise to let the signal shine, and turn complexity into ready-to-use, concrete next steps learners can act on.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    keyword: 'Adaptability',
    title: 'Technology as a Bridge',
    description: 'Whether it\'s a piece of paper or an AI agent, I choose tools that bridge the gap between curiosity and mastery. I design for accessibility so every learner can engage.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];
