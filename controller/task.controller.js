import Task from '../model/task.model.js'
import asyncHandler from "../utils/asyncHandler.util.js"

const createTaskController = asyncHandler(async (req, res) => {
    const { taskName } = req.body;

    if (typeof taskName !== 'string' || !taskName.trim()) {
        return res.status(400).json({ message: "Task name cannot be empty" });
    }

    try {
        const task = new Task({ taskName: taskName.trim() });
        const savedTask = await task.save();

        return res.status(201).json({
            message: "New task created successfully",
            task: {
                id: savedTask._id,
                taskName: savedTask.taskName
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Error creating task", error: error.message });
    }
});

const getTaskController = asyncHandler(async (req, res) => {
    const tasks = await Task.find();

    if (tasks.length === 0) {
        return res.status(404).json({ message: "No tasks found. Please add a new task." });
    }

    return res.status(200).json({ message: "Tasks retrieved successfully", tasks });
});

const getTaskByIdController = asyncHandler(async(req,res)=>{
    const taskId = req.params.id;

    const taskExists = await Task.findById(taskId);

    if(!taskExists){
        return res.status(404).json({message:"Task not Found!"});
    }

    return res.status(200).json({message:"Task Found",taskExists});
})

const deleteTaskController = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
});

const updateTaskController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { taskName, status } = req.body;

    if(!taskName|| taskName.length<=0){
        return res.status(401).json({message:"Please Provide Task Name"});
    }

    const updatedTask = await Task.findByIdAndUpdate(
        id,
        { taskName, status },
        { new: true, runValidators: true }
    );

    if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({
        message: "Task updated successfully",
        task: {
            id: updatedTask._id,
            taskName: updatedTask.taskName,
            status: updatedTask.status
        }
    });
});

export {createTaskController, getTaskController, getTaskByIdController, deleteTaskController, updateTaskController};