import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending',
    required: true
  }
}, { timestamps: true });


export default mongoose.model("Task",TaskSchema);
