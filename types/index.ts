export interface AccountMetrics {
  followers: number;
  followersChange: number;
  reach: number;
  reachChange: number;
  engagementRate: number;
  engagementChange: number;
  profileVisits: number;
  profileVisitsChange: number;
}

export interface Opportunity {
  id: string;
  handle: string;
  avatar: string;
  relevanceScore: number;
  category: string;
  status: 'pending' | 'approved' | 'skipped';
}

export interface CommentSuggestion {
  id: string;
  type: 'Thoughtful' | 'Professional' | 'Casual';
  text: string;
}

export interface ContentIdea {
  id: string;
  type: 'Reel' | 'Carousel' | 'Story' | 'Caption';
  title: string;
  hook: string;
  status: 'Draft' | 'Scheduled' | 'Published';
}

export interface GrowthPlanDay {
  day: string;
  task: string;
  completed: boolean;
  category: string;
}

export interface Customer {
  id: string;
  name: string;
  handle: string;
  email: string;
  plan: string;
  status: 'Active' | 'Paused' | 'Trial';
  followers: number;
  revenue: number;
}

export interface Campaign {
  id: string;
  name: string;
  customerHandle: string;
  status: 'Running' | 'Optimizing' | 'Completed';
  targetAudience: string;
  roi: string;
}