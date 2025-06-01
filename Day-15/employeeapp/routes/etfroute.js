const express=require('express')
const router=express.Router()
const Etf=require('../models/etf')
const mongoose=require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const results=await Etf.find() 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.post('/etfs', async (req, res) => {
  try {
    const result = await Etf.insertMany(req.body);
    res.status(201).json({ message: 'ETF records inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/etfsWithEmployee', async (req, res) => {
  try {
    const etfData = await Etf.find().populate('employeeID'); // Pull employee info using ref
    res.json(etfData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching ETF data' });
  }
});

module.exports=router