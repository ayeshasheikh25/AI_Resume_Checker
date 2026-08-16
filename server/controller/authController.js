const UserModel = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

exports.registration = async(req , res)=>{
    try{
  
    const {name , email , password} = req.body
     const userCheck = await UserModel.findOne({email})
     if(userCheck){
        return res.status(409).json({message: "User already exist", exist:true})
     }

     const salt = await bcrypt.genSalt(10)
     const hashPassword = await bcrypt.hash(password, salt)
     const user = await UserModel.create({
        name,
        email,
        password: hashPassword
     })
     return res.status(201).json(user)
    }catch(err){
      console.log(err)
    }
}


exports.login = async(req , res)=>{
    try{
       const {email , password} = req.body


       const userExist = await UserModel.findOne({email})
       if(!userExist){
        return res.status(404).json({message: "User not exist", success:false})
       }
   
       const passwordCorrect = await bcrypt.compare(password , userExist.password)
       if(!passwordCorrect){
        return res.status(401).json({message: "Invalid password", success:false})
       }

       const token = jwt.sign(
        {
            id: userExist._id,
            email
        },
        process.env.JWT_secret_key,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
            
        }
       )

       res.cookie("token", token,{
          httpOnly: true,
          secure: true,
          sameSite: "none", 
          maxAge: 60 * 60 * 1000
       })
       res.status(200).json(userExist)
       
    }catch(err){
      res.status(500).json({message: "Server Error"})
    } 
}

exports.fetchUser = async(req , res)=>{
    console.log(req.user)
    try{
    const {id} = req.user 
    const userData = await UserModel.findById(id)

    const userObj = {
        id: userData._id,
        email: userData.email,
        name: userData.name
    }
    console.log(userObj)
    res.status(200).json(userObj)
    }catch(err){
        res.status(500).json({message:"Server error"})
    }
}
exports.logout = async(req, res)=>{
    res.clearCookie("token")
    res.json({message: "Logout"})
}

