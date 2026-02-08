
import { GoogleGenAI, Type } from "@google/genai";
import { BuildRecommendation, DiagnosticResult } from "../types";

/**
 * Safely initializes the Gemini API client.
 * Uses process.env.API_KEY which is expected to be injected.
 */
const getAIClient = () => {
  // Defensive check for the API key in a browser-safe way
  const apiKey = (typeof process !== 'undefined' && process.env && process.env.API_KEY) 
    ? process.env.API_KEY 
    : (window as any).process?.env?.API_KEY;

  if (!apiKey || apiKey === "") {
    console.error("Meena Technologies Vault: API_KEY is missing from environment.");
    throw new Error("API_KEY_MISSING");
  }

  return new GoogleGenAI({ apiKey });
};

export const getBuildSuggestion = async (prompt: string): Promise<BuildRecommendation> => {
  const ai = getAIClient();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: `Generate a detailed PC build recommendation based on these requirements: ${prompt}` }] }],
      config: {
        systemInstruction: "You are an elite PC hardware architect for Meena Technologies. Provide professional, specific, and optimized build lists in JSON format. Use Indian Rupee (₹) for estimates if relevant to the context, otherwise standard USD. Your tone is technical, expert, and premium.",
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

    const text = response.text;
    if (!text) throw new Error("Empty response from AI core.");
    return JSON.parse(text);
  } catch (error) {
    console.error("Silicon Architect Failure:", error);
    throw error;
  }
};

export const getDiagnosticMatrix = async (issue: string): Promise<DiagnosticResult> => {
  const ai = getAIClient();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: `Analyze this hardware symptom and provide a diagnostic report: ${issue}` }] }],
      config: {
        systemInstruction: "You are a senior hardware diagnostic specialist at Meena Technologies Mumbai. Provide component-level diagnostic analysis in JSON format. Be precise about potential hardware failures.",
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

    const text = response.text;
    if (!text) throw new Error("Empty diagnostic signal.");
    return JSON.parse(text);
  } catch (error) {
    console.error("Diagnostic Matrix Failure:", error);
    throw error;
  }
};
