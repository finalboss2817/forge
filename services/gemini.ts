
import { GoogleGenAI, Type } from "@google/genai";
import { BuildRecommendation, DiagnosticResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBuildSuggestion = async (prompt: string): Promise<BuildRecommendation> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Suggest a PC build for the following requirements: ${prompt}`,
    config: {
      systemInstruction: "You are a world-class PC hardware architect. Provide high-performance, optimized build recommendations. Be specific about model names and explain why each part was chosen for the specific user need.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          buildTitle: { type: Type.STRING },
          summary: { type: Type.STRING },
          targetPerformance: { type: Type.STRING },
          parts: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                category: { type: Type.STRING },
                priceEstimate: { type: Type.STRING },
                reasoning: { type: Type.STRING },
              },
              required: ["name", "category", "priceEstimate", "reasoning"],
            },
          },
          totalEstimate: { type: Type.STRING },
        },
        required: ["buildTitle", "summary", "targetPerformance", "parts", "totalEstimate"],
      },
    },
  });

  return JSON.parse(response.text || '{}');
};

export const getDiagnosticMatrix = async (issue: string): Promise<DiagnosticResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Diagnose this PC hardware or software issue: ${issue}`,
    config: {
      systemInstruction: "You are a professional PC technician. Provide a technical diagnostic report based on the symptom. Suggest actionable steps and estimate the difficulty of the repair.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          problemSummary: { type: Type.STRING },
          possibleCauses: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          suggestedSteps: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          difficulty: { 
            type: Type.STRING,
            enum: ['Low', 'Medium', 'High', 'Professional']
          }
        },
        required: ["problemSummary", "possibleCauses", "suggestedSteps", "difficulty"],
      },
    },
  });

  return JSON.parse(response.text || '{}');
};
