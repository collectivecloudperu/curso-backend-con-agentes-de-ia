import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
    PORT: parseInt(process.env.PORT || '3000', 10),
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agentic_cart_db',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    OLLAMA_URL: process.env.OLLAMA_URL || 'http://localhost:11434',
};

if (!ENV.GEMINI_API_KEY && ENV.NODE_ENV === 'production') {
    console.warn('Alerta: GEMINI_API_KEY no configurada en entorno de producción.')
}