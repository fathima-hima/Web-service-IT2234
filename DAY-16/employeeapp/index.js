const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')
const departmentrt= require('./routes/departmentroute')
const employeert= require('./routes/employeeroute')
const projectrt= require('./routes/projectroute')

app.use(express.json())
app.use('/department',departmentrt)
app.use('/employee',employeert)
app.use('/project',projectrt)
mongoose.connect('mongodb://localhost:27017/EmployeeinfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})