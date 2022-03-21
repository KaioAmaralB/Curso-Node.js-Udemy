//Chamando módulo nativo, em específico a função spawn
const { spawn } = require ('child_process')

//Listar os dados que temos
//Pela função spawn ser listada apenas por array, temos que declarar cada caracter item de array
// ls .. lista os diretórios anteriores
const ls = spawn('ls',['..', '-lh', '/usr'])

//Vindo informações para leitura
ls.stdout.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

//Quando terminar mostrar o código de finalização
ls.on('close',(code)=>{
    console.log(`Processo em segundo plano finalizado com o código ${code}`)
})