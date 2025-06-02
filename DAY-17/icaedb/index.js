const express = require('express');
const app =express();
const port=3002;
const mongoose = require('mongoose')
const Projectrt= require('./routes/projectRoute')
const Taskrt= require('./routes/taskRoute')
const Userrt= require('./routes/userRoute')
const errorhandlemid=require('./middlewares/errorHandler')

app.use(express.json())
app.use(errorhandlemid)
app.use('/Project',Projectrt)
app.use('/Task',Taskrt)
app.use('/User',Userrt)
mongoose.connect('mongodb://localhost:27017/projectMangementSystem').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})