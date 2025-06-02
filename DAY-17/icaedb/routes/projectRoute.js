const express=require('express')
const router = express.Router()
const Project = require('../models/Project')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')
const User = require('../models/User')
//import task model
const Task = require('../models/Task')

//Question 1
router.get('/', async (req,res)=>{
   findFun(res,Project)
})

/*router.get('/', async (req,res)=>{
    try {
        const results = await Project.find()
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})*/


//Question 2
//GET /project/{projectId}/tasks
router.get('/:projectId/tasks', async (req, res) => {
  const { projectId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(projectId)) {
    return res.status(400).json({ message: 'Invalid project ID' });
  }

  try {
    const projectExists = await Project.findById(projectId);
    if (!projectExists) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const tasks = await Task.find({ project: projectId });
    res.status(200).json(tasks);
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

  //Question 3
// GET /project/:projectId/manager
router.get('/:projectId/manager', async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId).populate('manager', 'name email');

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({
      project_name: project.name,
      manager_name: project.manager.name,
      manager_email: project.manager.email
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

//Question 4
// GET /project/:projectId/tasks-users
router.get('/:projectId/tasks-users', async (req, res) => {
  const { projectId } = req.params;

  try {
    const tasks = await Task.find({ project: projectId })
      .populate('assignedTo', 'name') // Only get user's name
      .select('title assignedTo');     // Only get task name and assigned user

    const result = tasks.map(task => ({
      title: task.title,
      assignedTo: task.assignedTo?.name || 'Unassigned'
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports=router