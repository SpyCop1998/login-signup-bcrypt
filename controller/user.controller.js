var User=require('../model/user.model')
var bcrypt=require('bcrypt')

exports.createUser= async(req,res)=>{
    if(!req.body.email){
        return res.send({
            response_code:801,
            response:"Email is missing"
        })
    }

    if(!req.body.password){
        return res.send({
            response_code:801,
            response:"Password is missing"
        })
    }

    var user=new User(req.body)

    var salt=await bcrypt.genSalt(10)

    user.password=await bcrypt.hash(user.password,salt)
    user.save().then(data=>{
        res.send({
            response_code:200,
            response:'user saved successfully'
        })
    }).catch(err=>{
        res.send({
            response_code:800,
            response:'error occured '+err.message
        })
    })
}

exports.login= async(req,res)=>{
    if(!req.body.email){
        return res.send({
            response_code:801,
            response:"Email is missing"
        })
    }

    if(!req.body.password){
        return res.send({
            response_code:801,
            response:"Password is missing"
        })
    }

    var user=await User.findOne({
        email:req.body.email
    })

    if(user){
        var validPassword=await bcrypt.compare(
            req.body.password,user.password
        )

        if(validPassword){
            res.send({
                response_code:200,
                response:"successfully loged in"
            })
        }else{
            res.send({
                response_code:200,
                response:"invlid password"
            })
        }

    }else{
        res.send({
            response_code:800,
            response:"No user found is missing"
        })
    }
}


