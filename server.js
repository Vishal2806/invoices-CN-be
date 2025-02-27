import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connect_to_db from './config/connectToDB.js';

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

app.listen(PORT, () => {
    console.log(`Server listening on PORT: `, PORT);
})

app.get('/', (req,res) => {
    res.send('codenicely-be')
})
