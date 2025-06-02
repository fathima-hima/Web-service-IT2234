const mongoose = require('mongoose')
const projectSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    project_name:{type:String,require:true},
    
})

const Project = mongoose.model('projects',projectSchema)
const Pro001 = new Project({
    _id:'pro001',
    project_name:'Operation sindhoor',
    
})

const Pro002 = new Project({
    _id:'pro002',
    project_name:'Operation X',
    
})
//Pro001.save()
//Pro002.save()
module.exports=Project