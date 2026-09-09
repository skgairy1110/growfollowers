export interface BillingService {
  getSubscription(): Promise<{ plan: string; status: string; renewalDate: string }>;
}

export class MockBillingProvider implements BillingService {
  async getSubscription() {
    return {
      plan: 'Enterprise Growth',
      status: 'Active',
      renewalDate: 'October 1, 2026',
    };
  }
}