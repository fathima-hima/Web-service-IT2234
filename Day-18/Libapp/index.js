const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')

const bookrt= require('./routes/bookRoute')
const studentrt= require('./routes/studentRoute')
const borrowrt= require('./routes/borrowRoute')

app.use(express.json())
app.use('/book',bookrt)
app.use('/stu',studentrt)
app.use('/bor',borrowrt)


mongoose.connect('mongodb://localhost:27017/libappDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})