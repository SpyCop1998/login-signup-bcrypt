var mongoose = require('mongoose')
var CollectionName='USER'
var userSchema=mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model(CollectionName,userSchema)