const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = async(req,res,next)=>{
    try{
      const {token} = req.cookies
      if(!token){
        return res.status(401).json({message: "Token not exist"})
      }
      const decoded = jwt.verify(token, process.env.JWT_secret_key)
      req.user = decoded
      next()
    }catch(err){
      console.log(err)
    }
}

module.exports = auth