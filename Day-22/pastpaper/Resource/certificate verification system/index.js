const express=require('express');
const app = express()
const port =8080;
const mongoose=require('mongoose');


const event = require('./models/event');
const student = require('./models/student');
const certificate = require('./models/certificate');

const eventrt = require('./routes/eventRoute');
const studentrt = require('./routes/studentRoute');
const certirt = require('./routes/certificateRoute');

app.use(express.json())
app.use('/student',studentrt);
app.use('/event',eventrt);
app.use('/cert',certirt);

mongoose.connect('mongodb://localhost:27017/pastpaperDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})