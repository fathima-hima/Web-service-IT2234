const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    manager: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  });
  
  const Project = mongoose.model('projects', projectSchema);

  module.exports = Project;