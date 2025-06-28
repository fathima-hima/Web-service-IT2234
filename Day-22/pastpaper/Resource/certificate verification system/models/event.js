const mongoose = require('mongoose')
const{Schema}=mongoose;

const eventSchema =new Schema({
  date:{type:Date,required:true},
  description: {type:String,required:true},
  name:{type:String,required:true},
  organizer: {type:String,required:true}

});

const event =mongoose.model('events',eventSchema);

module.exports=event;