const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    code:{type:String,require:true},
    name:{type:String,require:true},
    credits:{type:Number,require:true},
    description:{type:String}
})

const course = mongoose.model('courses',courseSchema)

/*const webservice = new course({
    code:'IT2234',
    name:'Parctical for webservices',
    credits:2,
    description:'Build a REST API with nodeJS technology'
})
webservice.save()*/

module.exports=course