
export interface Part {
  name: string;
  category: string;
  priceEstimate: string;
  reasoning: string;
}

export interface BuildRecommendation {
  buildTitle: string;
  summary: string;
  targetPerformance: string;
  parts: Part[];
  totalEstimate: string;
}

export interface DiagnosticResult {
  problemSummary: string;
  possibleCauses: string[];
  suggestedSteps: string[];
  difficulty: 'Low' | 'Medium' | 'High' | 'Professional';
}

export enum AppSection {
  HOME = 'home',
  ARCHITECT = 'architect',
  DIAGNOSTICS = 'diagnostics',
  SERVICES = 'services',
  GALLERY = 'gallery'
}
