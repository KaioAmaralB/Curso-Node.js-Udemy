console.log('Exibindo uma mensagem no console!')

//Erro
console.error(new Error('Exibindo mensgem de erro, temos problemas!'))

//Exibir dados em forma de tabela
const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']
console.table(carros)

//armazena mais organizado pela primeira tabela
const dados = {name: 'Glaucio Daniel', empresa: 'Hcode'}
console.table(dados)

//Conta os processos
console.count('processo')
console.count('processo')
console.count('processo')

//Reseta a contagem
console.log('Resetando o processo')
console.countReset('processo')
console.count('processo')

//Mostra o tempo de contagem
console.time('contador')
for(let index = 0; index < Array.length; index ++){
    console.log('-')
}
console.timeEnd('contador')

//console com condições
console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih Rapaz %s, que pena!', 'Não Funcionou')

//Limpa todos os dados do console
//console.clear()