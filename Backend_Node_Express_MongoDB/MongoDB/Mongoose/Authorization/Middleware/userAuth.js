const jwt = require('jsonwebtoken')
const user = require('../users')
const redisClient = require('../redis')

const userAuth = async (req, res, next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
            throw new Error("Token doesn't exist")
        }

        const payload = jwt.verify(token, process.env.SECRET_KEY)
        console.log(payload)

        const {_id} = payload;
        if(!_id) throw new Error("Id is missing")

        const result = await user.findById(_id);
        if(!result) throw new Error("User doesn't exist")

        //checking whether token is blocked or not for logging out feature
        const isBlocked = await redisClient.exists(`token:${token}`);
        if(isBlocked) throw new Error("Invalid Token: Logged out")
        
        req.result = result;
        next();
    }
    catch(error){
        res.send("Error: "+ error.message)
    }
}
module.exports = userAuth