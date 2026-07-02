import { Router } from "express";
import { processLocalPrompt } from "../controllers/ai.controller";

const aiRoutes = Router();

aiRoutes.post('/local', processLocalPrompt);

export default aiRoutes;