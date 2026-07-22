import mongoose from "mongoose";
import { ENV } from "./env";

export const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error: any) {
        console.log(`Error al conectar a MongoDB: ${error.message}`);
        process.exit(1);
    }
}