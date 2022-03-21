//Chamo o módulo nativo File System, porém eu específico apenas oq eu vou usar (que seria o valor dentro das chaves)
const {writeFile} = require('fs')

//Criando o arquivo txt
writeFile("arquivo.txt", 'Criando Arquivo de Texto com writeFile', err =>{
    if(err) throw err
    console.log("Arquivo criado com sucesso!");
})