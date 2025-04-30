import {Router} from 'express';
import { createTaskController, deleteTaskController, getTaskController, updateTaskController } from '../controller/task.controller.js';

const taskRouter = Router();

taskRouter.route('/addTask').post(createTaskController);
taskRouter.route('/getTask').get(getTaskController);
taskRouter.route('/deleteTask/:id').delete(deleteTaskController);
taskRouter.route('/updateTask/:id').put(updateTaskController);

export default taskRouter;