const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide project name'],
      maxlength: [50, 'Project name should not be more than 50 characters'],
    },
    code: {
      type: String,
      required: [true, 'Please provide project code'],
      maxlength: [20, 'Project code should not be more than 20 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide project description'],
      maxlength: [200, 'Project desc should not be more than 200 characters'],
    },
    status: {
      type: String,
      required: [true, 'Please provide status'],
      enum: {
        values: ['Planning', 'Designing', 'Implementation', 'Testing', 'Deploying', 'Completed'],
        message: '{VALUE} is not a valid interview status',
      }
    },
    manager: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide project manager'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user who created this project'],
    },
  }
);

module.exports = mongoose.model('Project', ProjectSchema);
