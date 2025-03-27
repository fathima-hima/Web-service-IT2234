const express =require('express');
const app=express();
const port=3001;


//calling students array from studentsdb file

const students = require('./DB/studentdb');

app.get('/',(req,res)=>{
    res.send('Hello Express JS');
    
});

app.get('/stu',(req,res)=>{
    res.send(students);
   
});

app.get('/stu/:id',(req,res)=>{
    const id =req.params.id
    //console.log(id)
    const result=students.find(student=>student.regno==id);
    //checks student is available or not, if not return an error message
    
    if(result)
    {
        res.send(result);
    }
    else
    {
        res.status(404).send("Student not found");  //changing the status manually 
    }
    //res.send(result);
});

//filter students by gender

app.get('/stu/gender/:gen',(req,res)=>{
    const gender=req.params.gen
    const results=students.filter(student=>student.gender==gender);
    res.send(results);
    
});

//search student by course
app.get('/stu/course/:cou',(req,res)=>{
    const course=req.params.cou
    const results=students.filter(student=>student.course==course);
    res.send(results);
    
});

//search student by name -> give 2 or 3 characters and find the full name

app.get('/stu/name/:namePart', (req, res) => {
    const namePart = req.params.namePart.toLowerCase();
    const results = students.filter(student => 
        student.name.toLowerCase().includes(namePart)
    );

    if (results.length > 0) {
        res.send(results);
    } else {
        res.status(404).send("No students found with the given name characters.");
    }
});

app.listen(port,()=>{
    console.log(`Running on${port}`);
});