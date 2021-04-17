var mongoose=require('mongoose')
mongoUrl='mongodb://127.0.0.1:27017/loginSignUp'
var DBSetup = async () =>{
    try{
        mongoose.connect(mongoUrl,{
            useNewUrlParser: true
        })
    }catch(err){
        console.log(err)
    }
}
module.exports=DBSetup