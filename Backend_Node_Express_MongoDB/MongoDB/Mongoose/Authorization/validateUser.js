
const validator = require('validator')

function validUser(data){
    const mandatoryField = ["firstName", "emailId", "age", "password"]

    const isAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k));

    if(!isAllowed) throw new Error("Fields missing");
    if(!validator.isEmail(data.emailId)) throw new Error("Invalid email")
    if(!validator.isStrongPassword(data.password)) throw new Error("Weak password")
    if(!(data.firstName.length >= 3 && data.firstName.length<=20)) throw new Error("Name should have min 3 and max 20 characters")
};

module.exports = validUser