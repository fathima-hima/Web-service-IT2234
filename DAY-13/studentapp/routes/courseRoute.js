const express = require('express');
const router = express.Router()
const course = require('../models/course')

router.get('/',async(req,res)=>{
    try
    {
        const results = await course.find()
       
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(400).send("Sorry,No Data Found !")
        }
    }
    catch(error)
    {
        console.error(error)
        res.status(500).send("Servor Error!");
    }
    
})

router.get('/code/:cid',async(req,res)=>{
    try
    {
        const cid = req.params.cid
        const results = await course.find({code:cid})
       
        if (results.length > 0) {
            res.status(200).json(results)
        } else {
            res.status(400).send("Sorry,No Data Found !")
        }
    }
    catch(error)
    {
        console.error(error)
        res.status(500).send("Servor Error!");
    }
    
})

module.exports=router