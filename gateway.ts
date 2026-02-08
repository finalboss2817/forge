
import { GoogleGenAI } from "@google/genai";

/**
 * AI Gateway Configuration for Meena Technologies
 * Usage: pnpm tsx gateway.ts
 */

async function main() {
  // Use process.env.API_KEY exclusively as per guidelines. 
  // Do not hardcode the API key in the source.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  console.log("--- INITIATING GATEWAY STREAM ---");

  const response = await ai.models.generateContentStream({
    model: 'gemini-3-flash-preview',
    contents: 'Invent a new holiday for computer builders and describe its traditions.',
  });

  for await (const chunk of response) {
    // Accessing text property directly as per @google/genai guidelines
    const text = chunk.text;
    if (text) {
      // Fix: Use console.log to fix the Property 'stdout' does not exist error 
      // and follow documentation examples for text streaming.
      console.log(text);
    }
  }

  console.log("\n\n--- STREAM COMPLETE ---");
}

main().catch((err) => {
  console.error("Gateway Failure:", err);
});
