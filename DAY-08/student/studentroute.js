const express=require('express')
const router=express.Router()
const studentService=require('./studentservice')

router.get('/',(req,res)=>{
    const results = studentService.getstudents()
    if (results) {
        res.status(200).json(results)
    } else {
        res.status(400).send("Sorry,No Data Found !")
    }
    // res.json(studentService.getstudents())
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = studentService.getStudent(id)
    if (results) {
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry,No Data Found !")
    }
})

router.get('/gender/:gend',(req,res)=>{
    const gend = req.params.gend=='m'?'Male':'Female'
    const results = studentService.getByGender(gend)

    if (results) {
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry,No Data Found !")
    }
})

router.get('/course/:cou',(req,res)=>{
    const cou=req.params.cou
    const results=studentService.getCourse(cou)
    if (results) {
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry,No Data Found !")
    }
})
module.exports=router