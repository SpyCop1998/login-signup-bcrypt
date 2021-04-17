var express=require('express')
var DBSetup=require('./config/db')
var bodyParser=require('body-parser')
var app=express()
DBSetup()
app.use(bodyParser.json())

require('./routes/app.routes')(app)

app.get('/',(req,res)=>{
    res.send({
        message:"Hey server is up"
    })
})

app.listen(3000,()=>{
    console.log('server is live at 3000')
})

