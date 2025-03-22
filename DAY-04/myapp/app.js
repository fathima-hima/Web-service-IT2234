const express =require('express');
const app=express();
const port=3001;

app.get('/',(req,res)=>{
    res.send('Hello Express JS');
});

app.listen(port,()=>{
    console.log(`Running on${port}`);
});