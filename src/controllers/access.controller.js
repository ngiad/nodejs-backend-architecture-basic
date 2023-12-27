'use strict'

class AccessController {

    signUp = async(req,res,next) => {
        try {
            console.log("signUp ::: ",req.body)
            return res.status(201).json({message : "Sign Up ok!"})
        } catch (error) {
            next(error)
        }
    }

}



module.exports = new AccessController()