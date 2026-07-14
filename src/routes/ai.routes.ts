import { Router } from "express";
import { processLocalPrompt } from "../controllers/ai.controller";
import { processCloudPrompt } from "../controllers/cloudAI.controller";

const aiRoutes = Router();

// Endpoint Local
aiRoutes.post('/local', processLocalPrompt);

// Endpoint Cloud
aiRoutes.post('/cloud', processCloudPrompt)

export default aiRoutes;