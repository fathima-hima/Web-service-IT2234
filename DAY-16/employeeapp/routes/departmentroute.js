const express=require('express')
const router = express.Router()
const Department = require('../models/Department')
const { mongoose } = require('mongoose')
const Employee = require('../models/Employee')

router.get('/', async (req,res)=>{
    try {
        const results = await Department.find()
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


router.get('/emp/:did', async (req,res)=>{
    
    const did=req.params.did
        const results = await Employee.find(
            {departmentId:did},
            {name:1,departmentId:1}).populate("departmentId").sort({name:-1})

            const filterResult=results.map(emp=>({
                employee_id:emp._id,
                employee_name:emp.name,
                department_name:emp.departmentId.dep_name
            }))

            if (results) {
                res.status(200).json(filterResult)
            } else {
                res.status(404).send("Sorry, No Data Found !")
            }
        })


        //find how many employees are working in a department.
        router.get('/empcount/', async (req,res)=>{
    
            
                const results = await Department.aggregate([
                    {
                        $lookup:{
                            from:"employees",
                            localField:"_id",
                            foreignField: "departmentId",
                            as:"emps"
                        }
                    },{
                        $project:{
                            dep_name:1,
                            number_of_employees:{$size:"$emps"}
                        }
                    }
                ])
                    
        
                    if (results) {
                        res.status(200).json(results)
                    } else {
                        res.status(404).send("Sorry, No Data Found !")
                    }
                })


        //shows the employee count along with each department details.



module.exports=router