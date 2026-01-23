import { GoogleGenAI } from "@google/genai";
import { GeneratedContext } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSentence = async (word: string): Promise<GeneratedContext> => {
  if (!apiKey) {
    // Fallback for demo if no API key is present
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      sentence: `이것은 "${word}"에 대한 예문입니다.`,
      translation: `This is an example sentence for "${word}". (API Key missing)`
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a simple, beginner-friendly Korean sentence using the word "${word}". 
      Return ONLY a JSON object with two keys: "sentence" (the Korean sentence) and "translation" (English translation). 
      Do not use markdown formatting or code blocks.`,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    
    const data = JSON.parse(text);
    return {
      sentence: data.sentence,
      translation: data.translation
    };

  } catch (error) {
    console.error("Gemini generation error:", error);
    throw new Error("Failed to generate sentence.");
  }
};