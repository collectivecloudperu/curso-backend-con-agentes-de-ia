import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.route('/') // /api/v1/products
    .get(getProducts)
    .post(createProduct);

export default productRoutes;
