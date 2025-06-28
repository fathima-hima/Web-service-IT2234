const express=require('express')
const router = express.Router()
const Student=require('../models/student')
const findFun = require('../services/genericFindService')
const Certificate = require('../models/certificate');

router.get('/', async (req,res)=>{
    findFun(res,Student);
})

//Q4
router.get('/:regno/cert', async (req, res) => {
  const { regno } = req.params;

  try {
    // Find student by registration number
    const student = await Student.findOne({ regno: regno });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Find certificates for this student and populate event name
    const certificates = await Certificate.find({ student_id: student._id })
      //.populate({ path: 'event_id', select: 'name', model: 'events' });
     .populate('event_id', 'name'); //here the path is named as in the certificate.js or certificate model

    if (certificates.length === 0) {
      return res.status(404).json({ message: 'No certificates found for this student' });
    }

    // Prepare response
    const result = certificates.map(cert => ({
      _id: student._id,                 // Student ID
      certificate_id: cert._id,         // Certificate ID
      issued_on: cert.issued_on,        // Certificate issue date
      detail: cert.detail,              // Certificate detail
      event: cert.event_id ? cert.event_id.name : 'Event not found'  // Event name
    }));

    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports=router;