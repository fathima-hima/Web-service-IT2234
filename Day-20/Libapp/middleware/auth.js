require('dotenv').config(); //importing .env variable

//const secretkey="vau.physical@2025"
const jwt =require("jsonwebtoken")
const User=require('../models/User')

const secretkey = process.env.SECRET_KEY; //change the secretkey

function verifyToken(req,res,next){
    try
    {

        const token =req.headers.authorization
        if(!token)
        {
            return res.status(403).send("Security token not available");
        }

        //verify the token
       jwt.verify(token.split(" ")[1],secretkey,async (err,decoded)=>{
            //decryption to get the encrypted username and userid
           const userID=decoded.ID 
           
           const user =await User.findById(userID)  //check whether username found or not
           if(!user || err){
            return res.status(409).send("Invalid Token")
           }
           
           next()

     })


   }
   catch(error){
    console.error(error);
    res.status(500).send("Server Error!")
}
}


// Role-based authorization
function allowRole(role) {
    return function (req, res, next) {
        if (req.user.ROLE === role) {
            next();
        } else {
            return res.status(403).send("Access Denied: Unauthorized Role");
        }
    };
}

module.exports={verifyToken,allowRole}