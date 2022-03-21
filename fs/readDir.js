//Chamando o módulo nativo File System
const fs = require('fs')

//Todo callback tem primeiro o erro e segundo o dados
//Esse código entre aspas é para subir o nível no caminho de arquivos
fs.readdir("../", (err, data)=>{
    if(err) throw err;

    //passa por cada item do array que é feito durante o processo de captura de diretórios
    data.forEach((file)=>{
        //As barras é para identificar o arquivo único
        console.log(__dirname + '\\' + file);
    })
})
