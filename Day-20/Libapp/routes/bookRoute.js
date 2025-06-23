const express=require('express')
const router = express.Router()
const Book=require('../models/Book')
const service = require('../services/genericFindService')
const { verifyToken } = require('../middleware/auth')

router.get('/',verifyToken, async (req,res)=>{
    service.findFun(res,Book)
})

router.get('/genre/:gen', async (req,res)=>{
    const genrename = req.params.gen
    service.filterFun(res,Book,{genre:genrename})
})

module.exports=router