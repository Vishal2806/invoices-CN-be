import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connect_to_db from './config/connectToDB.js';
import invoiceRouter from './api/invoices/routes.js';
import authRouter from './api/user/routes.js';

dotenv.config();
const app = express();
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connect_to_db()
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if DB connection fails
  });


app.get('/', (req,res) => {
    res.send('codenicely-be')
})

app.use('/api/invoices', invoiceRouter);
app.use('/api/user', authRouter);

app.listen(PORT, () => {
    console.log(`Server listening on PORT: `, PORT);
})