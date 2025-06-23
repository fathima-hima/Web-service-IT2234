const User = require('../models/User')
const jwt=require("jsonwebtoken")

function verifyToken(req,res,next){
 try {
    const token = req.headers.authorization
    if (!token) {
        return res.status(403).send("Security Token Not Available!")
    }
    //console.log(token.split(" ")[1])
    //decryption
    jwt.verify(token.split(" ")[1],process.env.SECRET_KEY,async (err,decoded)=>{
        //console.log(decoded)
        if(!decoded){
            return res.status(401).send("Invaild Token !")
        }
        const userID= decoded.ID
        req.user=decoded.ROLE;
        const user = await User.findById(userID)
        //console.log(user)
        if(!user || err){
            return res.status(401).send("Invaild Token !")
        }
        next()
    })
    
 } catch (error) {
        console.error(error);
        res.status(500).send("Server Error !")
    } 
}

module.exports={verifyToken}