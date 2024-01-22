import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is connected');
})
.catch((error) => {
    console.log(error);
})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port 3000...');
})

// call API routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// middleware
 app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message,
    });
 })