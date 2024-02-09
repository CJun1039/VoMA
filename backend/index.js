import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';
import authRoutes from './src/auth.js';
import userRoutes from './src/users.js';

const app = express();

app.use(express.json());

app.use(json());
app.use(cors());


app.use(authRoutes);
app.use(userRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});