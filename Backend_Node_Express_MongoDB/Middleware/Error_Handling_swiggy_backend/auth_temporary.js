const Auth = (req, res, next)=>{
    const token = "ADMIN"
    const access = (token==="ADMIN"?1:0);

    if(!access) res.status(402).send("No permission")
    next();
}

module.exports = {Auth}