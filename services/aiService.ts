import { CommentSuggestion, ContentIdea, GrowthPlanDay } from '@/types';
import { mockCommentSuggestions, mockContentIdeas, mockGrowthPlan } from '@/data/mockData';

export interface AIService {
  getRecommendation(): Promise<string>;
  getCommentSuggestions(): Promise<CommentSuggestion[]>;
  getContentIdeas(): Promise<ContentIdea[]>;
  getGrowthPlan(): Promise<GrowthPlanDay[]>;
}

export class MockAIProvider implements AIService {
  async getRecommendation(): Promise<string> {
    return "Your Reels are generating 3.2× more profile visits than static posts. Focus on short-form video hooks today.";
  }

  async getCommentSuggestions(): Promise<CommentSuggestion[]> {
    return mockCommentSuggestions;
  }

  async getContentIdeas(): Promise<ContentIdea[]> {
    return mockContentIdeas;
  }

  async getGrowthPlan(): Promise<GrowthPlanDay[]> {
    return mockGrowthPlan;
  }
}