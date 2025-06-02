const express=require('express')
const router = express.Router()
const User = require('../models/User')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')

router.get('/', async (req,res)=>{
    findFun(res,User)
})

module.exports=router