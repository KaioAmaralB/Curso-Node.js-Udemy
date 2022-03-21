
//Exemplo de código bloqueante (precisa terminar um processo para executar o próximo)
const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do Arquivo");

//caracterizado pela sintaxe Sync ( ou quando está fora das chaves)
const dados = fs.readFileSync("file.txt");

console.log("Executando o console após o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5));