const express =require('express');
const app=express();
const port=3001;


//create array of JSON details

let students=[
    {regno:'2021ICT01',name:'James',age:22,course:'IT',gender:'Male'},
    {regno:'2021ICT02',name:'William',age:21,course:'Bio',gender:'Male'},
    {regno:'2021ICT03',name:'Priya',age:23,course:'Tech',gender:'Female'},
    {regno:'2021ICT04',name:'janifer',age:22,course:'IT',gender:'Female'},
    {regno:'2021ICT05',name:'Julie',age:24,course:'IT',gender:'Female'}
];

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