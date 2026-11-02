import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import applicationRoutes from './routes/applicationRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
export function createApp() {
 const app=express();
 app.disable('x-powered-by');
 app.use(helmet());
 app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') ?? true }));
 app.use(express.json({ limit:'20kb' }));
 app.use(rateLimit({ windowMs:Number(process.env.RATE_LIMIT_WINDOW_MS)||900000, max:Number(process.env.RATE_LIMIT_MAX)||100, standardHeaders:true, legacyHeaders:false, message:{success:false,message:'Too many requests. Please try again later.'} }));
 app.get('/api/health',(req,res)=>res.json({success:true,status:'ok'}));
 app.use('/api/applications',applicationRoutes);
 app.use(express.static(new URL('../../frontend', import.meta.url).pathname));
 app.use(notFound); app.use(errorHandler);
 return app;
}
