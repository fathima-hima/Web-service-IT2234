const mongoose = require('mongoose')
const{Schema}=mongoose;

const studentSchema =new Schema({
  regno: {type:String,required:true},
  degree: {type:String,required:true},
  faculty: {type:String,required:true},
  first_name: {type:String,required:true},
  last_name:{type:String,required:true}

});

const student =mongoose.model('students',studentSchema);

module.exports=student;