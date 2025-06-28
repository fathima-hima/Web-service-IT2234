const mongoose = require('mongoose')
const{Schema}=mongoose;

const certificateSchema =new Schema({
  detail: {type:String,required:true},
  issued_on:{type:Date,required:true},
  event_id: {type:mongoose.Schema.Types.ObjectId,ref:'events',required:true},
  student_id: {type:mongoose.Schema.Types.ObjectId,ref:'students',required:true}
});

const certificate =mongoose.model('certificates',certificateSchema);

module.exports=certificate;