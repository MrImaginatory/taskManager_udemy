import Task from '../model/task.model.js'
import asyncHandler from "../utils/asyncHandler.util.js"

const createTaskController = asyncHandler(async (req, res) => {
    const { task } = req.body;

    if (!task || typeof task !== 'string' || !task.trim()) {
        return res.status(400).json({ message: "Task cannot be empty" });
    }

    const newTask = new Task({ taskName: task.trim() });

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

export {createTaskController,getTaskController,deleteTaskController};