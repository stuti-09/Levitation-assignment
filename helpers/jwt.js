const  expressjwt=require('express-jwt')
const jwt=require('jsonwebtoken')
function authJwt(req,res){
    const secret=process.env.secret; 
    return expressjwt({
        secret,
        algorithms:['HS256'],
       
    }).unless({
        path:[
            {url:/\/post(.*)/,methods:['GET','OPTIONS']},
            {url:/\/category(.*)/,methods:['GET','OPTIONS']},
            {url:/\/images(.*)/,methods:['GET','OPTIONS']},
            
            '/auth',
            '/auth/login'
        ]
    })
}

module.exports=authJwt;