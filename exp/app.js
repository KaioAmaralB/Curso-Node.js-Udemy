//Chama o módulo express externo
const express = require('express')
const app = express()
//Chamando o routes que criamos pelo admin
const adminRoutes = require('./routes/admin')
//Chamando o routes que criamos pelo usuario
const usuarioRoutes = require('./routes/usuario')
//Metódo externo de cookie
const cookieParser = require('cookie-parser')

//Serve arquivo estático
app.use(express.static('public'))

//Permitindo usar o json ( expressão de Middleware)
app.use(express.json())
//Permite a utilizaçào de cookies
app.use(cookieParser())

//esse next serve para passar pra próxima etapa, quando o middleware já tem tudo que precisa
app.use((req, res, next)=>{
    
    console.log('Executando Middleware em nível de aplicação')
    
    return next()
})

//Declarando o cookie
app.get('/setcookie', (req, res)=>{
    //tempo total de integridade (maxAGE)
    res.cookie('user','Kaio Amaral', {maxAge: 900000, httpOnly: true})
    return res.send('Cookie foi gravado com sucesso!')
})

//Retornando o cookie
app.get('/getcookie',(req, res)=> {
    let user = req.cookies ['user']
    if(user){
        return res.send(user)
    }
})

//Declara o conteúdo da url /
app.get('/', (req, res)=>{
    res.send('Hello World!')
})

//tudo que for /admin vai para o adminRoutes
app.use('/admin', adminRoutes)

//tudo que for /usuario vai para o usuarioRoutes
app.use('/usuario', usuarioRoutes)

//tratamento de erro
app.get('*',(req, res, next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema'))
    })
})

//caso de algum erro
app.use((err,req, res, next)=>{
    console.log('Geramos um erro, veja as instruções para corrigir!')
    res.status(500).json({message: err.message})
})

//confirma a porta e a execução do código
app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`)
})