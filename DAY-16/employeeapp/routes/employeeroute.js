const express=require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const { mongoose } = require('mongoose')

router.get('/', async (req,res)=>{
    try {
        const results = await Employee.find().populate("departmentId").populate("enroled_projects")
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})
router.get('/emp', async (req,res)=>{
    try {
        const results = await Employee.find({},{name:1,departmentId:1}).populate("departmentId")
        .populate("enroled_courses")
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found !")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})

//for each employee count their no of projects

router.get('/empprojectcount/', async (req, res) => {
    try {
        const results = await Employee.aggregate([
            {
                $lookup: {
                    from: "projects",
                    localField: "enroled_projects",
                    foreignField: "_id",
                    as: "enrolled_projects"
                }
            },
            {
                $project: {
                    name: 1,
                    number_of_projects: { $size: "$enrolled_projects" } // Count projects
                }
            }
        ]);

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Server Error !");
    }
});


//get project names along with employee details

router.get('/empprojectcountwithnames/', async (req, res) => {
    try {
        const results = await Employee.aggregate([
            {
                $lookup: {
                    from: "projects",
                    localField: "enroled_projects",  // Field in Employee referring to projects
                    foreignField: "_id",            // Matching field in Projects collection
                    as: "enrolled_projects"
                }
            },
            {
                $project: {
                    name: 1,
                    number_of_projects: { $size: "$enrolled_projects" },
                    project_names: "$enrolled_projects.project_name" // Extract project names
                }
            }
        ]);

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, No Data Found !");
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Server Error !");
    }
});
//get the distinct positions of employees
//along with distinct positions,show how many employees hold that position
//like Engineers:2
//HR:1 

// Get the distinct job titles of employees along with their counts
router.get('/employeejobs', async (req, res) => {
    try {
        const results = await Employee.aggregate([
            {
                $group: {
                    _id: "$job",  // Group by 'job' field
                    count: { $sum: 1 } // Count employees with that job
                }
            },
            {
                $project: {
                    _id: 0,
                    job: "$_id",
                    count: 1
                }
            }
        ]);

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).send("No job titles found.");
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Server Error !");
    }
});



module.exports=router