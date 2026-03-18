const jwt = require('jsonwebtoken')
const user = require('../users')

const userAuth = async (req, res, next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
            throw new Error("Token doesn't exist")
        }

        const payload = jwt.verify(token, process.env.SECRET_KEY)
        console.log(payload)

        const {_id} = payload;
        if(!_id) throw new Error("Id id missing")

        const result = await user.findById(_id);
        if(!result) throw new Error("User doesn't exist")

        req.result = result;
        next();
    }
    catch(error){
        res.send("Error: "+ error.message)
    }
}
module.exports = userAuth