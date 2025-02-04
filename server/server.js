import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/env.js';
import apiRoutes from './routes/api.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Error handling
app.use(errorHandler);

const port = config.port || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});