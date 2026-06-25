import { Request, Response } from "express";
import { IProductoMock } from "../types/product";

let productsMockRepository: IProductoMock[] = [
    {
        id: '1',
        sku: 'PROD-AG-001',
        title: 'Teclado Mecánico Ergonómico Pro',
        price: 125.00,
        tags: ['hardware', 'ergonomía', 'productividad'],
        seoOptimized: false
    },
    {
        id: '2',
        sku: 'PROD-AG-002',
        title: 'Monitor 4K Minimalista para Desarrolladores',
        price: 450.00,
        tags: ['monitores', 'setup', '4k'],
        seoOptimized: true
    }
];

export const getProducts = (req: Request, res: Response) => {
    res.json({
        success: true,
        count: productsMockRepository.length,
        data: productsMockRepository
    })
}

export const createProduct = (req: Request, res:Response) => {
    const { title, price, tags } = req.body;

    if (!title || !price) {
        res.status(400).json({ success: false, message: 'Título y precio con requeridos.' })
        return;
    }

    const newProduct: IProductoMock = {
        id: String(productsMockRepository.length + 1),
        sku: `PROD-RAW-${Math.floor(1000 + Math.random() * 9000)}`,
        title,
        price: Number(price),
        tags: tags || [],
        seoOptimized: false
    };

    productsMockRepository.push(newProduct);

    res.status(201).json({
        success: true,
        message: 'Producto base creado. Pendiente de tareas agénticas',
        data: newProduct
    })


}
