import { Schema, model, Document } from "mongoose";
import { timeStamp } from "node:console";
import { uppercase } from "zod";
import { required } from "zod/mini";

export interface IProduct extends Document {
    sku: string;
    nombre: string;
    description?: string;
    price: number;
    tags: string[];
    seoOptimized: boolean;
    rawJsonData?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
    {
        sku: {
            type: String,
            required: [true, "El SKU es obligatorio"],
            unique: true,
            trim: true,
            uppercase: true, 
        },
        nombre: {
            type: String,
            required: [true, "El título del producto es obligatorio"],
            trim: true,
        },
        description: {
            type: String,
            default: "",
        },
        price: {
            type: Number,
            required: [true, "El precio es obligatorio"],
            min: [0, "El precio no puede ser negativo"], 
        },
        tags: {
            type: [String],
            default: [],
        },
        seoOptimized: {
            type: Boolean,
            default: false,
        },
        rawJsonData: {
            type: Schema.Types.Mixed,
            default: {},
        },
    },
    {
        timestamps: true,
    },
);

export const ProductModel = model<IProduct>("Product", ProductSchema);