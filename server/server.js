import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

import { processMessage } from './controllers/chatController.js';
app.post('/api/chat', processMessage);

app.get('/', (req, res) => {
    res.send('Antigravity API is running');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/antigravity_db')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        console.log('Running without Database connection...');
    });

// Start Server independently of DB
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
