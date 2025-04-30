import express from 'express';
import taskRouter from './routes/task.route.js';

const app = express();
app.use(express.json());

app.use("/task",taskRouter)

export {app}