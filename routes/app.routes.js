module.exports=(app)=>{
    var user=require('../controller/user.controller')
    app.post('/createUser',user.createUser)//for create user
    app.post('/logIn',user.login)//for login
}