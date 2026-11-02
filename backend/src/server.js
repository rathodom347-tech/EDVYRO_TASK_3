import 'dotenv/config';
import { createApp } from './app.js';
const port=Number(process.env.PORT)||5000;
createApp().listen(port,()=>console.log(`Secure Application Integration running at http://localhost:${port}`));
