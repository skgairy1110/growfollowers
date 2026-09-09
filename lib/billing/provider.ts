export interface BillingProvider {
  getPlan(): Promise<{ name: string; status: string }>;
}
export class MockBillingProvider implements BillingProvider {
  async getPlan() { return { name: "Growth", status: "Demo" }; }
}
