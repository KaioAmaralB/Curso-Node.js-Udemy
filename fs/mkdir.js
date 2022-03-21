//Chama o módulo nativo File System
const fs = require('fs')
//Constante com os assets, que vai receber um array com todas as pastas que eu quero que ele crie
const assets = ['css','js','images','fonts','libs']

//Função que recebe o projeto dentro do array
function make(dir){
    //Vai passar por conta forEach e dizer o item que ele vai criar
    dir.forEach((item)=>{
        //mkdir serve para criar um diretório
        // o {recursive: true} serve para permitir que crie dretórios que ainda não exista 
        fs.mkdir(`projeto/assets/${item}`,{recursive: true},(err)=>{
        if(err) throw err
        console.log('Diretório Criado com sucesso:', item)
        })

    })

}

//Chamando a função
make(assets)
