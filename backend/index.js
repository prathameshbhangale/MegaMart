import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import connectDB from './config/connectDB';

const app = express();

// Middlewares
app.use(bodyParser.json());

// DB , 
connectDB();

// Define routes
app.get('/start', (req, res) => {
    res.send('server running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
