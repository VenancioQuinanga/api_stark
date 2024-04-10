//carregando modulos
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const session = require('express-session')

//configurações

//bodyparser
 app.use(bodyParser.urlencoded({extended:true}))
 app.use(bodyParser.json())

//session
app.use(session({
    secret:'CursoNodeJs',
    resave:true,
    saveUninitialized:true,
    cookie:{secure:false}
}))

//Midlewars

//Permitindo que outras origens se conectem a essa API ou APP
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','Get,Head,Options,Post,Patch,Delete')
    res.header("Access-Control-Allow-Headers","Origin,X-Rquested-With,Content-Type,Accept,Authorization")
    
    next()
})

//rotas
app.use('',admin)

//outros

const PORT = process.env.PORT || 3500

app.listen(PORT,()=>{
    console.log('servidor rodando')
})
