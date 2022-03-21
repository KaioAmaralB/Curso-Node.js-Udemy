//Chama o módulo nativo HTTP
const http = require('http')
//Chama o módulo nativo File System, exclusivamente o atributo readFile do próprio
const {readFile} = require('fs')

//IP local
const host = '127.0.0.1'
//Porta local padrão
const port = '3000'
//URL
const url = `http://${host}:${port}`

//Conteudo do server
let conteudo = ''

//Ler o arquivo
//Junto com o callback de dois parâmetros
readFile('index.html', (err, data)=> {
    if(err) throw err
    //Receber o conteúdo que está em data
    conteudo = data
})

//Criar o servidor
const server = http.createServer((req, res) =>{
    //Code que diz estar certo
    res.statusCode = 200
    //Para interpretar o html
    res.setHeader('Content-Type', 'text/html')
    //Imprimir o conteúdo
    res.end(conteudo)
})

//Disparar o servidor
server.listen(port, host, ()=>{
    console.log(`Servidor rodando em ${url}`)
})

//Disparar o processo de abertura do navegador
const start = (process.platform == 'darwin'?'open':process.platform == 'win32'?'start':'xdg-open')

//Executar o processo em segundo plano
require ('child_process').exec(start + ' ' + url)