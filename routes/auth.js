const router = require("express").Router()
const user = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt=require('jsonwebtoken')

// regsiter
router.post("/",  (req, res) => {
  
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password,10),
    })
    newUser.save().then(createduser=>{
        res.status(201).json(createduser)
    }).catch(err=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })

})

// login

router.post("/login",  (req, res) => {
    const secret=process.env.secret
    user.findOne({email:req.body.email}).then(user=>{
        if(!user){
            return res.status(400).send('User not found')
        }
        if(user&&bcrypt.compareSync(req.body.password,user.password)){
            const token=jwt.sign({
                userId:user.id
            },
            secret,
            {expiresIn:'1d'}
            )
            return res.status(200).json({
                user:user.email,
                token:token,
                message:'user authenticated'
            })
        }
        else{
            res.status(400).send('password is wrong')
        }
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})
module.exports = router