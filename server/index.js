import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js'
import userRouter from './routes/user.route.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({});

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// API middleware
app.use('/api/v1/user', userRouter)

app.get('/home', (req, res)=>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log("server listening on port", PORT);
})