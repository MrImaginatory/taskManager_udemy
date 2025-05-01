import {Router} from 'express';
import { createTaskController, deleteTaskController, getTaskByIdController, getTaskController, updateTaskController } from '../controller/task.controller.js';

const taskRouter = Router();

taskRouter.route('/addTask').post(createTaskController);
taskRouter.route('/getTask').get(getTaskController);
taskRouter.route('/taskById/:id').post(getTaskByIdController);
taskRouter.route('/deleteTask/:id').delete(deleteTaskController);
taskRouter.route('/updateTask/:id').put(updateTaskController);

export default taskRouter;