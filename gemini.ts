
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the MSSG-Gas AI Assistant, a specialist for Fareham and surrounding Hampshire areas. 
Your goal is to help customers with their gas, heating, and plumbing inquiries specifically for the PO14, PO15, and PO16 postcodes.

1. Be professional, empathetic, and safety-conscious.
2. If a customer mentions a gas smell or carbon monoxide, immediately tell them to leave the building, turn off the gas supply, and call the National Gas Emergency Service (0800 111999) or our 24/7 hotline.
3. Help diagnose simple issues (e.g., boiler pressure, thermostat batteries, frozen condensate pipes). Mention that Fareham is a hard-water area, so limescale build-up (kettling) is common.
4. Always advise that gas work must be carried out by a Gas Safe registered engineer. 
5. Mention our local coverage: Fareham, Whiteley, Botley, Hedge End, Bishops Waltham, Southampton, Portsmouth, and Funtley.
6. Encourage booking an emergency callback through our contact form.
7. Keep responses concise and formatted with markdown.
`;

export async function getGeminiResponse(history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please call our Fareham emergency line directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting. Please contact our Fareham engineers directly at 07000 000000.";
  }
}
