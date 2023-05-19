import 'dotenv/config'
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import morgan from 'morgan'
import authRoute from './routes/authRoute';
import prodRoute from './routes/prodRoute';
import user from './routes/user'
import nom from './routes/nom'

import searchRoute from './routes/searchRoute';
import cors from 'cors';

const DB_URI = process.env.DB_URI

const app: Express = express();
const PORT = 3002;

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors())

app.use("/auth", authRoute)
app.use("/products", prodRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("hellu")
})



// Connect to MongoDB
Mongoose
  .connect(DB_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
