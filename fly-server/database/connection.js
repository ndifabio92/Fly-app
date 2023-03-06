import mongoose from "mongoose";
import { insertData } from "./insertData.js";
import * as dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = `${process.env.MONGO_DB_URI_IOS}${process.env.MONGO_DB_NAME}`;

mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(`Se conecto con la base de datos: ${process.env.MONGO_DB_URI_IOS}${process.env.MONGO_DB_NAME} en el puerto ${process.env.PORT}`);
        insertData();
    })
    .catch(error => {
        console.error(`No se puede conectar con la base de datos ${process.env.MONGO_DB_URI_IOS}`, error.message);
    });
