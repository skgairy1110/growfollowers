export type InstagramAccount = {
  id: string;
  username: string;
  followers: number;
};

export interface InstagramProvider {
  getAccount(): Promise<InstagramAccount>;
  getInsights(): Promise<Record<string, number>>;
}

export class MockInstagramProvider implements InstagramProvider {
  async getAccount() {
    return { id: "demo-account", username: "alexcreative", followers: 12482 };
  }
  async getInsights() {
    return { reach: 84200, engagement: 5.7, profileVisits: 3821 };
  }
}
