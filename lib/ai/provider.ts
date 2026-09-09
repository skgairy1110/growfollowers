export interface AIProvider {
  generateComment(input: string): Promise<string>;
  generateContent(input: string): Promise<{ title: string; hook: string; caption: string }>;
  generateGrowthPlan(goal: string): Promise<string[]>;
}

export class MockAIProvider implements AIProvider {
  async generateComment(input: string) {
    return "The way this idea comes together is especially strong—the detail and storytelling make the post feel genuinely memorable.";
  }
  async generateContent(input: string) {
    return {
      title: "3 mistakes people make before choosing a photographer",
      hook: "Before you book your photographer, ask these three questions.",
      caption: "A practical guide for choosing the right creative partner for your next big moment.",
    };
  }
  async generateGrowthPlan(goal: string) {
    return ["Create a high-intent Reel", "Engage with 5 relevant conversations", "Publish a carousel", "Review top-performing content", "Test a new hook"];
  }
}
