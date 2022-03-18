import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productsRoutes.js';
import userRoutes from './routes/userRotes.js';
import {connectDB} from './config/db.js';
import colors from 'colors';
import { errorHandlerMiddelWare,notFound } from './middelwares/errorHandler.js';
dotenv.config();


connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.json('API is Running...')
})


app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);

app.use(notFound)

app.use(errorHandlerMiddelWare)

const PORT = 5000;
app.listen(PORT,() => console.log(`server is running on port 5000 in ${process.env.NODE_DEVELOPMENT} mode `));