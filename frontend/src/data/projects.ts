export type PortfolioProject = {
  slug: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  screenshots: string[];
  description: string;
  challenge: string;
  solution: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: 'book-recommendation-system',
    name: 'Book Recommendation System',
    shortDescription:
      'An AI-powered recommendation platform that suggests books personalized to each user using machine learning models and reading behavior.',
    techStack: ['Machine Learning', 'AI', 'Python', 'Recommendation Engine'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'Readers often struggle to discover relevant books from large catalogs without personalized guidance.',
    challenge:
      'The challenge was building accurate and useful recommendations while handling varied user preferences and sparse interaction data.',
    solution:
      'Designed and implemented a recommendation engine using machine learning techniques to rank and suggest books based on user interests and behavior patterns.'
  },
  {
    slug: 'everyvideo-tools',
    name: 'EveryVideo Tools',
    shortDescription:
      'A video workflow platform for FFmpeg-powered processing, helping users prepare, transform, and manage media efficiently.',
    techStack: ['FFmpeg', 'Video Processing', 'Automation'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'Video processing often requires technical command usage, creating adoption friction for users who need practical output quickly.',
    challenge:
      'Video processing often requires technical command usage, creating adoption friction for users who need practical output quickly.',
    solution:
      'Built a clean workflow around FFmpeg operations with predictable processing steps and user-oriented media handling.'
  },
  {
    slug: 'ai-galaxy-directory',
    name: 'AI Galaxy Directory',
    shortDescription:
      'An organized AI resource directory designed to help users discover tools, ideas, and solutions quickly with a clean interface.',
    techStack: ['Directory', 'Search', 'AI'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'AI resources grow fast and users struggle to discover quality tools without a curated structure.',
    challenge:
      'AI resources grow fast and users struggle to discover quality tools without a curated structure.',
    solution:
      'Designed a categorized and searchable directory model that makes tool discovery faster and clearer.'
  },
  {
    slug: 'newspaper-app',
    name: 'NewspaperApp',
    shortDescription:
      'A Django API for content management with users, articles, authors, and comments built for structured publishing workflows.',
    techStack: ['Django API', 'Content', 'REST'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'Publishing systems need stable APIs and clear content relationships to support scalable editorial flows.',
    challenge:
      'Publishing systems need stable APIs and clear content relationships to support scalable editorial flows.',
    solution:
      'Implemented a DRF API with organized resources and reliable relationships for articles, authors, and comments.'
  },
  {
    slug: 'event-locator',
    name: 'Event Locator',
    shortDescription:
      'A location-based event discovery platform using Google Maps, categories, and date filters to surface nearby events.',
    techStack: ['Maps', 'Filters', 'Location'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'Users need contextual event discovery instead of manually searching fragmented listings.',
    challenge:
      'Users need contextual event discovery instead of manually searching fragmented listings.',
    solution:
      'Combined map integration with category and date filters to provide location-first event exploration.'
  },
  {
    slug: 'movie-website',
    name: 'Movie Website',
    shortDescription:
      'A movie e-commerce experience with mobile money support and a user-focused purchase flow.',
    techStack: ['E-commerce', 'Payments', 'Mobile Money'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'Payment accessibility and checkout clarity are critical for user conversion in regional commerce settings.',
    challenge:
      'Payment accessibility and checkout clarity are critical for user conversion in regional commerce settings.',
    solution:
      'Integrated mobile money payments with a streamlined flow from browsing to secure checkout.'
  },
  {
    slug: 'saferide',
    name: 'SafeRide',
    shortDescription:
      'An academic road safety system focused on practical full-stack delivery and research-driven implementation.',
    techStack: ['Academic', 'Safety', 'Full Stack'],
    liveDemoUrl: '',
    githubUrl: '',
    screenshots: [],
    description:
      'Safety applications require dependable architecture and actionable user experience under practical constraints.',
    challenge:
      'Safety applications require dependable architecture and actionable user experience under practical constraints.',
    solution:
      'Delivered a full-stack system centered on reliability, clear interactions, and research-informed implementation choices.'
  }
];