import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import morgan from 'morgan'
import router from './routes/route';

const app: Express = express();
const PORT = 3000;

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use("/route", router)

app.get("/", (req: Request, res: Response) => {
  res.send("hellu")
})



// Connect to MongoDB
// Mongoose
//   .connect('mongodb://localhost:27017/mydatabase')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
