import { MockInstagramProvider } from './instagramService';
import { MockAIProvider } from './aiService';
import { MockAnalyticsProvider } from './analyticsService';
import { MockBillingProvider } from './billingService';

export const instagram = new MockInstagramProvider();
export const ai = new MockAIProvider();
export const analytics = new MockAnalyticsProvider();
export const billing = new MockBillingProvider();