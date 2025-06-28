const express=require('express')
const router = express.Router()
const Event=require('../models/event')
const findFun = require('../services/genericFindService')
const Certificate = require('../models/certificate');
const certificate = require('../models/certificate');

router.get('/', async (req,res)=>{
    findFun(res,Event);
})

//Q5
router.get('/:eventId/cert',async (req,res)=>{
    const {eventId} = req.params;

    try{
         // Find event by ID
    const event = await Event.findById(eventId).select('name');
    if(!event){
        return res.status(400).json({message:'Event not found'});

    }

    //count certificates linked to this event
    const count = await Certificate.countDocuments({event_id:eventId});

    //send response
    res.json({
        event_name:event.name,
        certificate_count:count
    })
    }
    catch(err){
      console.error('Error:', err);
      res.status(500).json({ message: 'Server error' });
    }
})

module.exports=router;