import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.controller";

const router = Router();

router.route('/') // /api/v1/products
    .get(getProducts)
    .post(createProduct);

export default router;
