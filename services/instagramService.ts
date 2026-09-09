import { AccountMetrics, Opportunity } from '@/types';
import { mockMetrics, mockOpportunities } from '@/data/mockData';

export interface InstagramService {
  getAccount(): Promise<{ handle: string; name: string; avatar: string }>;
  getMetrics(): Promise<AccountMetrics>;
  getOpportunities(): Promise<Opportunity[]>;
  updateOpportunityStatus(id: string, status: 'approved' | 'skipped'): Promise<boolean>;
}

export class MockInstagramProvider implements InstagramService {
  async getAccount() {
    return {
      handle: '@alexrivers',
      name: 'Alex Rivers',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    };
  }

  async getMetrics(): Promise<AccountMetrics> {
    return mockMetrics;
  }

  async getOpportunities(): Promise<Opportunity[]> {
    return mockOpportunities;
  }

  async updateOpportunityStatus(id: string, status: 'approved' | 'skipped'): Promise<boolean> {
    return true;
  }
}