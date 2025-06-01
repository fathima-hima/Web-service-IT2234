const mongoose=require('mongoose')
const employeeSchema= new mongoose.Schema({
    _id:{type:Number,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    salary:{type:Number,require:true,min:0},
    departmentID:{type:mongoose.Schema.Types.String,ref:'departments'},
    projects:[{type:mongoose.Schema.Types.String,ref:'projects'}]

})
const Employee=mongoose.model('Employee',employeeSchema)

const EmployeeDetails=new Employee({
    _id:1,
    name:'Raj',
    email:'raj123@gmail.com',
    salary:80000,
})

//EmployeeDetails.save()



module.exports=Employee