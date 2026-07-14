import { Request, Response } from "express";
import { cloudAI } from "../config/gemini";
import { success } from "zod";

export const processCloudPrompt = async (
    req: Request,
    res: Response,    
): Promise<void>=> {
    const { prompt } = req.body;

    if (!prompt) {
        res.status(400).json({
            success: false,
            message: "El prompt es requerido para el agente cloud.",
        });
        return;
    }

    try {
        const response = await cloudAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.4,
            },
        });

        res.json({
            success: true,
            agent: "Gemini-2.5-Flash-Cloud",
            output: response.text
            ? response.text.trim()
            : "Sin respuesta del modelo",
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Error al conectar con el servicio cloud de Gemini.",
            error: error.message,
        });
    }
};