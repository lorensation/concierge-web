import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Test route
app.get('/api', (req, res) => {
  res.json({ message: "Concierge API is running!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});