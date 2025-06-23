const express=require('express')
const router = express.Router()
const Book=require('../models/Book')
const service = require('../services/genericFindService')
const { verifyToken } = require('../middleware/auth')
const roleCheck = require('../middleware/role')

router.get('/',verifyToken,roleCheck(['manager']), async (req,res)=>{
    service.findFun(res,Book)
})

router.get('/genre/:gen',verifyToken,roleCheck(['manager','admin']), async (req,res)=>{
    const genrename = req.params.gen
    service.filterFun(res,Book,{genre:genrename})
})
module.exports=router