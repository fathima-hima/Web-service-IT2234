const express=require('express')
const mongoose=require('mongoose')
const router = express.Router()
const Certificate=require('../models/certificate')
const findFun = require('../services/genericFindService')
const Student = require('../models/student')
const Event=require('../models/event')

router.get('/', async (req,res)=>{
    findFun(res,Certificate)
})

//Q3 
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cert = await Certificate.findById(id)
      .populate({ path: 'event_id', select: 'name', model: 'events' })
      .populate({ path: 'student_id', select: 'first_name last_name', model: 'students' });

    if (!cert) {
      return res.status(404).json({ message: 'Certificate not found' });
    }

    res.json({
      _id: cert._id,
      details: cert.detail,
      issued_on: cert.issued_on,
      event_name: cert.event_id ? cert.event_id.name : 'Event not found',
      student_name: cert.student_id
        ? cert.student_id.first_name + ' ' + cert.student_id.last_name
        : 'Student not found',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

//Q6
// POST /cert - Save certificate with validation

router.post('/', async (req, res) => {
  const { student_id, event_id, issued_on, detail } = req.body;

  // Check required fields
  if (!student_id || !event_id || !issued_on || !detail) {
    return res.status(400).json({ message: 'All fields are required: student_id, event_id, issued_on, detail' });
  }

  // Check if the IDs are valid ObjectIds
  if (!mongoose.isValidObjectId(student_id)) {
    return res.status(400).json({ message: 'Invalid student_id format' });
  }

  if (!mongoose.isValidObjectId(event_id)) {
    return res.status(400).json({ message: 'Invalid event_id format' });
  }

  try {
    // Validate student and event existence
    const studentExists = await Student.findById(student_id);
    if (!studentExists) {
      return res.status(404).json({ message: 'Student ID does not exist' });
    }

    const eventExists = await Event.findById(event_id);
    if (!eventExists) {
      return res.status(404).json({ message: 'Event ID does not exist' });
    }

    const newCertificate = new Certificate({
      student_id,
      event_id,
      issued_on,
      detail
    });

    await newCertificate.save();

    res.status(201).json({
      message: 'Certificate successfully saved',
      certificate_id: newCertificate._id
    });

  } catch (err) {
    console.error('Error saving certificate:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports=router;