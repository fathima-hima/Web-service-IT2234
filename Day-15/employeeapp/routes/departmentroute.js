const express=require('express')
const router=express.Router()
const Department=require('../models/department')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Department.find() 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.post('/departments', async (req, res) => {
  try {
    const result = await Department.insertMany(req.body);
    res.status(201).json({ message: 'Departments inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports=router