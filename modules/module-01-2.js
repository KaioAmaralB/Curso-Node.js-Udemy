//Imprimindo na tela
console.log('Executando module-01.js')

//Função oculta, não irá receber nenhum recurso. Só estará disponível no arquivo que estou trabalhando

const oculta = ()=>{
    console.log('Executando uma função oculta')
}

//Uma função que seja exportada como um módulo e executa.
executa = ()=>{
    console.log('Executando a função executa')
}

//Função para definir o welcome
welcome = `Bem vindo ao módulo module-02.js`

//REPL - Módulo interativo, um próprio editor de texto ( apenas dar um "node" no cmd)

module.exports = {executa, welcome}