import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import env from 'dotenv';
//import bodyParser from 'body-parser';

//route importing...
import mainRoutes from './routes/main.js'

const app = express();
env.config();
app.use(cors());
app.use(express.json());

//routes 
app.get('/', (req, res) => {
    res.send('Hello welcome to Todo App API.')
})
app.use('/tasks/', mainRoutes);

const DATABASE_URL = process.env.DATABASE_ACCESS
const PORT = process.env.PORT || 5000;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`App connected and running on port ${PORT}...`)))
    .catch((error) => console.log(error.message));


mongoose.set('useFindAndModify', false);
