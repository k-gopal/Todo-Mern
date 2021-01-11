import express from 'express';
import { home, saveTask, deleteTask } from '../controllers/main.js'

const router = express.Router();

router.get('/view', home);

router.post('/save', saveTask);

router.delete('/delete/:id', deleteTask);


export default router;