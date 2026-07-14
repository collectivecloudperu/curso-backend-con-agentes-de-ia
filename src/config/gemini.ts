import { GoogleGenAI } from "@google/genai";
import { ENV } from "./env";

export const cloudAI = new GoogleGenAI({
    apiKey: ENV.GEMINI_API_KEY
});

console.log('La API de Gemini AI se ha iniciado correctamente');