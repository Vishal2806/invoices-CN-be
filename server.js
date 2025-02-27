import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server listening on PORT: `, PORT);
})

app.get('/', (req,res) => {
    res.send('codenicely-be')
})
