import { Ollama } from "ollama";
import { ENV } from "./env";

export const localAI = new Ollama({
    host: ENV.OLLAMA_URL
})

console.log('Cliente Ollama inicializado correctamente.')