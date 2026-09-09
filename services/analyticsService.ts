import { AccountMetrics } from '@/types';
import { mockMetrics } from '@/data/mockData';

export interface AnalyticsService {
  getOverview(): Promise<AccountMetrics>;
  getInsights(): Promise<{ whatHappened: string; why: string; nextAction: string }>;
}

export class MockAnalyticsProvider implements AnalyticsService {
  async getOverview(): Promise<AccountMetrics> {
    return mockMetrics;
  }

  async getInsights() {
    return {
      whatHappened: "Followers surged by 8.4% this week following targeted engagement with design creators.",
      why: "Reel shares increased due to strong typographic hooks and optimal posting times identified by the AI engine.",
      nextAction: "Approve 3 pending collaboration opportunities in /grow-followers and publish the scheduled Next.js carousel.",
    };
  }
}