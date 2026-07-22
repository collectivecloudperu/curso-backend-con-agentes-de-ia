import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routes/product.routes';
import aiRoutes from './routes/ai.routes';
import { connectDB } from './config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la rutas para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
    try {
        const bluePrintPath = path.join(__dirname, 'context', 'blueprint.md');
        const blueprintContent = fs.readFileSync(bluePrintPath, 'utf-8');

        res.json({
            statusbar: 'healthy',
            timeStamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            contextLoaded: true,
            systemRulePreview: blueprintContent.split('\n')[2]
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error críticio: No se pudo cargar el plano de contexto del agente.'
        });
    }
});

// Endpoints
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/ai', aiRoutes)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Recurso no encontrado en AgenticCart API'
    })
})

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT,() => {
            console.log(`🚀 API Agéntica corriendo en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar el servidor', error);
    }
}

startServer();
