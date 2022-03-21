//Se estiver já no Node.JS 12, podemos chamar a promises logo depois do require
const fs = require('fs').promises

//Função assíncrona
async function read() {

    //Armazenar a leitura dos dados
    const data = await fs.readFile('texto.txt', 'binary')
    return new Buffer.from(data)
}

//Chamar a função por causa do async
try {
    read().then(data => console.log(data.toString()))
} catch (error) {
    console.log(err)
}