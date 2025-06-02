const mongoose = require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    email:{type:String},
    job:{type:String},
    salary:{type:Number},

    departmentId:{
        type:String,
        require:true,
        ref:'departments'
    },

    //enroled_projects:[type:mongoose.Types.ObjectId,ref:'projects',require:true]

   enroled_projects:[{type:String,ref:'projects',require:true}]
})

const Employee = mongoose.model('employees',employeeSchema)
const Emp001 = new Employee({
    _id:'emp001',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'male',
    email:'nuzha@gmail.com',
    job:'Software Engineer',
    salary:100000,
    departmentId:'dep001',
    enroled_projects:['pro001','pro002']
})
//Emp001.save()
module.exports=Employee