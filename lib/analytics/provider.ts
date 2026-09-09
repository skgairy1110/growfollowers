export interface AnalyticsProvider {
  getOverview(): Promise<Record<string, number>>;
}
export class MockAnalyticsProvider implements AnalyticsProvider {
  async getOverview() {
    return { followers: 12482, reach: 84200, engagement: 5.7, profileVisits: 3821 };
  }
}
