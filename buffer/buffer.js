//Chamando o módulo nativo buffer
const Buffer = require('buffer').Buffer

//Ler a partir de uma string
const buf = Buffer.from('Curso Completo de NodeJS')

//Executando o buffer
//toString para converter de binário para string
console.log(buf.toString);
//Converte na escrita asiática
console.log(buf.toString('utf161e'));

//Setar direto o buffer
const buf_string = Buffer.from('Carregando uma string','utf-8')
//Booleano se é um buffer ou não (true or false)
console.log(Buffer.isBuffer(buf_string))
//Qual encode, e quantos bytes eu quero da string
console.log(buf_string.toString('utf-8', 0, 10))