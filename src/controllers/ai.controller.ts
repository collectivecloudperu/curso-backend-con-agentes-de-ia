import { Request, response, Response } from 'express';
import { localAI } from '../config/ollama';
import { success } from 'zod';

export const processLocalPrompt = async (req: Request, res: Response): Promise<void> => {
    const { prompt } = req.body;

    if (!prompt) {
        res.status(400).json({ success: false, message: 'El prompt es requerido para el agente local.' });
        return;
    }

    try {
        const response = await localAI.generate({
            model: 'qwen2.5-coder:1.5b',
            prompt: prompt,
            options: {
                temperature: 0.2,
            }
        });

        res.json({
            success: true,
            agent: 'Qwen2.5-Coder-Local',
            output: response.response.trim()
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error al conectar con el agente local de Ollama.',
            error: error.message
        });
    }
};