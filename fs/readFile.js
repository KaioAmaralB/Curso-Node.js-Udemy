//Chama o módulo nativo File System
const fs = require('fs')

//Não bloqueante
//Para ler meu arquivo texto.txt
fs.readFile('texto.txt',(err, data)=>{
    if(err) throw err

    //O .toString serve para ler o arquivo no formato original, se não aparece em binário
    //Por conta da forma que ele salva no buffer
    console.log(data.toString())
})

//Bloqueante
//const texto fs.readFileSync("texto.txt")

//console.log(`Texto: ${texto}`)