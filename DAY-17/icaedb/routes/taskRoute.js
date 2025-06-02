const express=require('express')
const router = express.Router()
const Task = require('../models/Task')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')

const Project = require('../models/Project')

router.get('/', async (req,res)=>{
    findFun(res,Task)
})


// GET /project/:projectId/task - Get all tasks for a project
router.get('/Project/:projectId/Tasks', async (req, res) => {
  const projectId  = req.params;

  try {
    const tasks = await Task.find({ project: projectId })
      .populate('assignedTo', 'name email')  // optional: populate assigned user info (customize fields)
      .populate('project', 'title');         // optional: populate project info (customize fields)


    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found for this project.' });
    }

    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error retrieving tasks:', error);
    res.status(500).json({ message: 'Server error while fetching tasks.' });
  }
});

module.exports=router