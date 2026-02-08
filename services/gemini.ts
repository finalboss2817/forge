
import { GoogleGenAI, Type } from "@google/genai";
import { BuildRecommendation, DiagnosticResult } from "../types";

/**
 * Accesses the PC build architecture logic.
 * Follows guidelines to use process.env.API_KEY exclusively and initialize 
 * right before making an API call to ensure the latest key is used.
 */

export const getBuildSuggestion = async (prompt: string): Promise<BuildRecommendation> => {
  // Create a new instance right before making an API call to ensure it always uses the most up-to-date API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Upgrade to Pro for complex architecture tasks
      contents: `Generate a detailed PC build recommendation for: ${prompt}`,
      config: {
        systemInstruction: "You are the head of PC architecture at Meena Technologies. Provide professional, specific build recommendations in JSON format. Use Indian Rupee (₹).",
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

    // Correct extraction: response.text is a property, not a method
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Architect Logic Failure:", error);
    throw error;
  }
};

export const getDiagnosticMatrix = async (issue: string): Promise<DiagnosticResult> => {
  // Create a new instance right before making an API call to ensure it always uses the most up-to-date API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Upgrade to Pro for complex diagnostic tasks
      contents: `Diagnose this PC hardware symptom: ${issue}`,
      config: {
        systemInstruction: "You are a senior hardware technician at Meena Technologies. Provide a component-level diagnostic report in JSON format.",
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

    // Correct extraction: response.text is a property, not a method
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Diagnostic Logic Failure:", error);
    throw error;
  }
};
