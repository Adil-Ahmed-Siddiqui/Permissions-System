const { boolean } = require('joi');
const mongoose = require('mongoose');

const TaskScehma = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, 'Please provide task description'],
      maxlength: [200, 'Task desc should not be more than 200 characters'],
    },
    status: {
      type: Boolean,
      default: false
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
      required: [true, 'Please provide project'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user who created this task'],
    },
    assignedTo: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user to which the task is to be assigned'],
      },
  }
);

module.exports = mongoose.model('Task', TaskScehma);
