import { AccountMetrics, Opportunity, CommentSuggestion, ContentIdea, GrowthPlanDay, Customer, Campaign } from '@/types';

export const mockMetrics: AccountMetrics = {
  followers: 12482,
  followersChange: 8.4,
  reach: 84200,
  reachChange: 22.0,
  engagementRate: 5.7,
  engagementChange: 1.2,
  profileVisits: 3821,
  profileVisitsChange: 18.0,
};

export const mockOpportunities: Opportunity[] = [
  { id: '1', handle: '@creator_one', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces', relevanceScore: 92, category: 'Design & Tech', status: 'pending' },
  { id: '2', handle: '@fashion_brand', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', relevanceScore: 89, category: 'Apparel', status: 'pending' },
  { id: '3', handle: '@wedding_creator', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', relevanceScore: 86, category: 'Lifestyle', status: 'pending' },
  { id: '4', handle: '@code_innovate', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', relevanceScore: 84, category: 'Software', status: 'pending' },
];

export const mockCommentSuggestions: CommentSuggestion[] = [
  { id: '1', type: 'Thoughtful', text: 'This perspective completely aligns with modern design systems. The emphasis on modular scaling is spot on.' },
  { id: '2', type: 'Professional', text: 'An exceptional breakdown of workflow optimization. Looking forward to seeing more insights in this domain.' },
  { id: '3', type: 'Casual', text: 'Love this take! That workflow trick is an absolute game-changer 🔥' },
];

export const mockContentIdeas: ContentIdea[] = [
  { id: '1', type: 'Reel', title: '3 UI Mistakes Killing Your Conversion Rate', hook: 'Stop making these architectural design flaws in your SaaS dashboards...', status: 'Draft' },
  { id: '2', type: 'Carousel', title: 'The Next.js 15 App Router Blueprint', hook: 'Here is how we structure production-ready codebases...', status: 'Scheduled' },
  { id: '3', type: 'Caption', title: 'Design System Tokens Explained', hook: 'Design tokens bridge the gap between Figma and production code.', status: 'Published' },
];

export const mockGrowthPlan: GrowthPlanDay[] = [
  { day: 'Monday', task: 'Create Reel: 3 UI Architecture Mistakes', completed: true, category: 'Content' },
  { day: 'Tuesday', task: 'Audience engagement & discovery targeting @creator_one', completed: false, category: 'Growth' },
  { day: 'Wednesday', task: 'Publish Carousel on Next.js 15 Patterns', completed: false, category: 'Content' },
  { day: 'Thursday', task: 'Strategic collaboration discussion with partner brand', completed: false, category: 'Networking' },
  { day: 'Friday', task: 'Publish high-reach product showcase Reel', completed: false, category: 'Content' },
  { day: 'Saturday', task: 'Community Q&A and DM response triage', completed: false, category: 'Engagement' },
  { day: 'Sunday', task: 'Weekly AI performance review and analytics audit', completed: false, category: 'Strategy' },
];

export const mockCustomers: Customer[] = [
  { id: 'c1', name: 'Alex Rivers', handle: '@alexrivers', email: 'alex@gairystudio.com', plan: 'Enterprise', status: 'Active', followers: 12482, revenue: 149 },
  { id: 'c2', name: 'Sophia Chen', handle: '@sophiachen', email: 'sophia@designlab.io', plan: 'Growth', status: 'Active', followers: 8420, revenue: 79 },
  { id: 'c3', name: 'Marcus Vance', handle: '@marcusvance', email: 'marcus@vancedev.com', plan: 'Pro', status: 'Trial', followers: 3100, revenue: 0 },
];

export const mockCampaigns: Campaign[] = [
  { id: 'cmp1', name: 'Q3 UI/UX Creator Outreach', customerHandle: '@alexrivers', status: 'Running', targetAudience: 'Designers & Developers (US/UK)', roi: '4.2x' },
  { id: 'cmp2', name: 'Apparel Brand Discovery', customerHandle: '@sophiachen', status: 'Optimizing', targetAudience: 'Fashion & Lifestyle Creators', roi: '3.1x' },
];