//Chama o módulo nativo util, em específico o atributo promisify dentro desse módulo
const {promisify} = require('util')

//Executar a leitura do módulo de File System e já utilizar o promisify
const writeFile = promisify(require('fs').writeFile);
const conteudo = `Criando um arquivo utilizando promisify do módulo nativo util`

//Cria um novo arquivo
writeFile('utilArquivo.txt',conteudo)
//Se der certo
.then(()=>{ console.log('Arquivo utilArquivo criado com sucesso')})
//Se der errado
.catch((err)=>{ console.log(`Deu Erro: ${err}`)})
