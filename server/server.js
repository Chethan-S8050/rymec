import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import path from 'path';
import { fileURLToPath } from 'url';

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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
// In Vercel, static files are handled by the 'rewrites' in vercel.json
// But we keep this for local production testing
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
    res.send('Antigravity API is running');
});

// For any other request, send back the index.html from dist
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) return res.status(404).json({ message: 'API route not found' });
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
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
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
