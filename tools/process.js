//Retorna o outro arquivo sub.js
require('./subdirectory/sub')
console.log('-----------------------')
//Pegar o nome do arquivo
console.log(`Recurso:Nome do Arquivo: `,__filename)
//Pega o nome do diretório do arquivo
console.log(`Diretório do Arquivo: `,__dirname)
//Retonra o diretório em que foi invocado
console.log(`Diretório em que foi invocado: `,process.cwd())
//Retorna um array para todos os parâmetros de execução desse arquvio
//console.log(`Parâmetros de execução: `,process.argv)
//Retorna um array para todas as informações de ambiente
//console.log(`Parâmetros de execução: `,process.env)
//Retorna um array para as informações do OS
console.log(`Sistema operacional: `,process.env.OS)
//Retorna um array para as informações do USERNAME
console.log(`Usuário no sistema operacional: `,process.env.USERNAME)
//Retorna o idioma da máquina
console.log(`Idioma: `,process.env.LANG)
//Retonra o nome da máquina
console.log(`Nome do SERVER: `,process.env.COMPUTERNAME)

switch(process.argv[2]){

    case '-a' :
        console.log('Execute rotina principal');
        break;
    case '-i' :
        console.log('Execute Instalação');
        break;
    case '-q' :
        console.log('Encerrando Aplicação');
        process.exit(); //interrompe imediatamente o código
        break;
    default :
        console.log('Parâmetro inválido')
}
//Retorna o OS
console.log(`Ambiente do Servidor: `,process.platform)