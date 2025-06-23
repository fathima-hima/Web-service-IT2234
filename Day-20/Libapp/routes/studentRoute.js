const express=require('express')
const router = express.Router()
const Student=require('../models/Student')
const service = require('../services/genericFindService')

router.get('/', async (req,res)=>{
    service.findFun(res,Student)
})
router.get('/year/:yr', async (req,res)=>{
    const y = req.params.yr
    service.filterFun(res,Student,{year:y})
})
module.exports=router