//Chama o módulo externo
const express = require('express')
//Chama o módulo externo
const bodyParser = require('body-parser')
//Chama o módulo externo
const multer = require('multer')
const app = express()
//Modulo externo
const path = require('path')

//função de middleware
app.use(bodyParser.urlencoded({extended:true}))

//Função upload
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'upload/')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.get('/',(req, res)=>{
    //res.json({message:'Bem Vindo'})
    res.sendFile(__dirname+'/index.html')
})

//quero fazer o upload de um único arquivo
app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file
    if(!file){
        const err = new Error('Por favor selecione um arquivo')
        err.httpStatusCode = 400
        return next(err)
    }
    //res.send(file)
    res.end('Upload realizado com sucesso!')
})

app.listen(3000, '127.0.0.1',()=>{
    console.log(`Server Running on port 3000`)
})