import Task from '../model/task.model.js'
import asyncHandler from "../utils/asyncHandler.util.js"

const createTaskController = asyncHandler(async (req, res) => {
    const { taskName } = req.body;

    if (!taskName || typeof taskName !== 'string' || !taskName.trim()) {
        return res.status(400).json({ message: "Task cannot be empty" });
    }

    const newTask = new Task({ taskName: taskName.trim() });

    try {
        const taskResp = await newTask.save();
        return res.status(201).json({
            message: "New task created successfully",
            task: {
                id: taskResp._id,
                taskName: taskResp.taskName
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Error creating task", error: error.message });
    }
});

const getTaskController = asyncHandler(async(req, res) => {
    const Tasks = await Task.find();
    if(!Tasks){
        return res.status(404).json({message:"No Task Found! Please Add a new Task"});
    }
    
    return res.status(200).json({message:"Task Found",Tasks});
})

const deleteTaskController = asyncHandler(async(req,res)=>{
    const taskId = req.params.id;
    const deleteTask = await Task.findByIdAndDelete(taskId);

    if(!deleteTask){
        return res.status(404).json({message:"This task does not exits"});
    }

    return res.status(200).json({message:"Task Deleted Successfully"});
})

const updateTaskController = asyncHandler(async(req, res) =>{
    const taskId  = req.params.id;
    const {taskName, status} = req.body;

    const taskExists = await Task.findById(taskId);

    if(!taskExists){
        return res.status(404).json({message:"Task does not exits!"});
    }

    const updateTask = {
        taskName:taskName,
        status:status
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId,updateTask,{new:true});

    if(!updateTask){
        return res.status(401).json({message:"Error updating task!"});
    }

    return res.status(200).json("Task Updated Successfully");
})

export {createTaskController,getTaskController,deleteTaskController, updateTaskController};