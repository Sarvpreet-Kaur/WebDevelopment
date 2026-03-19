const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    firstName:{
        type:String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    lastName:{
        type:String
    },
    age:{
        type : Number,
        min: 14,
        max:70,
        required:true
    },
    gender:{
        type:String,

        validate(value){
            if(!["male", "female", "others"].includes(value)){
                throw new Error ("Invalid Gender")
            }
        }
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true,
        immutable: true,
    },
    password:{
        type: String
    },
    photo:{
        type: String,
        default: "This is the default photo"
    }
}, {timestamps: true})

//Instance functions 
userSchema.methods.getJWT = function(){
    const ans = jwt.sign({_id:this._id, emailId: this.emailId}, process.env.SECRET_KEY, {expiresIn:1800})
    return ans;
}

userSchema.methods.verifyPassword = async function(userPassword){
    const ans = await bcrypt.compare(userPassword, this.password);
    return ans;
}

//Static Functions - belong to the model, not individual documents

userSchema.statics.findByEmail = function(email){
    return this.findOne({emailId: email});
}

const user = mongoose.model("user", userSchema)
module.exports = user;