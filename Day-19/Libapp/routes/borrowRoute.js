const express=require('express')
const router = express.Router()
const Borrow=require('../models/Borrow')
const Book=require('../models/Book')
const Student=require('../models/Student')
const findFun = require('../services/genericFindService')

router.get('/', async (req,res)=>{
    findFun(res,Borrow)
})
router.get('/student/:id', async (req,res)=>{
    try {
        const id = req.params.id
        const results = await Borrow.find({student:id},{'book':1}).populate('book')
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

router.post('/', async (req,res)=>{
    try {
        const {student,book} = req.body
        if (!student || !book) {
           return res.status(400).send("Please provide the required fileds!")
        } 
        else if(await Student.findById(student) == null){
            return res.status(404).send("Student ID Not Found!")
        }
        else if(await Book.findById(book) == null){
            return res.status(404).send("Book ID Not Found!")
        }
        else if((await Borrow.find({student:student,returned:false})).length>=2){
            return res.status(404).send("Return the borrowed books")
        }
        else if((await Book.findById(book)).copiesAvailable<=1){
            return res.status(404).send("Not enough books are available")
        }
        else {
          const results = await Borrow.create({ student, book });
          const bookupdate = await Book.findById(book);
          let copy = bookupdate.copiesAvailable - 1;
          await bookupdate.updateOne({copiesAvailable: copy});
          
          return res.status(200).send("Book borrowed");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    }   
})
module.exports=router