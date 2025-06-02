const mongoose = require('mongoose')
const departmentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    dep_name:{type:String,require:true},
    
})

const Department = mongoose.model('departments',departmentSchema)
const Dep001 = new Department({
    _id:'dep001',
    dep_name:'Department of cybersecurity',
    
})
//Dep001.save()
module.exports=Department