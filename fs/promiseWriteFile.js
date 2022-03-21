//Chama um módulo nativo File System, em específico o atríbuto writeFile
const {writeFile} = require ('fs')

//Funcão que cria o arquivo em promise
function criaArquivo(name, content){
    return new Promise((resolve, reject)=>{

        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}

//Chamada da função comm o acerto e erro
criaArquivo('promiseArquivo.txt', 'Criando um arquivo utilizando promises')
    //Se der certo
    .then(() => console.log('Arquivo promiseArquivo.txt criado com sucesso!'))
    //Se der errado
    .catch(err => console.log(err))