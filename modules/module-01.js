//Imprimindo na tela
console.log('Executando module-01.js')

//Função oculta, não irá receber nenhum recurso. Só estará disponível no arquivo que estou trabalhando
//const oculta = ()=>{
//Agora ele deixa de ser oculto
module.exports.oculta = ()=>{
    console.log('Executando uma função oculta')
}

//Uma função que seja exportada como um módulo e executa.
module.exports.executa = ()=>{
    console.log('Executando a função executa')
}

//Função para definir o welcome
module.exports.welcome = `Bem vindo ao módulo module-02.js`

//REPL - Módulo interativo, um próprio editor de texto