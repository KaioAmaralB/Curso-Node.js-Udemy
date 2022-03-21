//Chamando o módulo nativo, em específico a função SPAWN
const {spawn} = require("child_process")
//Para listar, etc.
const ls = spawn('ls', ['-lh', '/usr'])

//stdio - Oque eu quero fazer, mandar informações, ler informações e se ela der erro
//Quando devolver algo, é possível escutar 
ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
})
//Para erros
ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

//Close indica que encerrou, diferente do exit
ls.on('close', (code)=>{
    console.log(`Processo em segundo plano finalizado com sucesso! \n code: ${code}`)
})
