const jwt = require('jsonwebtoken')
require('dotenv').config()
const authorization= async(req,res,next)=>{
    let token = req.headers.authorization
    try{
        jwt.verify(token,"secret123", function(err,docoded){
            if(err){
                res.send("Please Login again")
            }else{
                req.body.user_id = docoded.user_id
                next()
            }
        })
    }catch(err){
        res.send(err)
    }

}
module.exports =authorization