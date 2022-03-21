//Programação digirida a Evento
//Módulo nativo event
const {EventEmitter} = require('events')

//Utilizando herança, é como se tivesse pegando uma cópia do EventEmitter e passando para o Evento
//Criando uma classe extendendo o EventEmitter
class Evento extends EventEmitter {}
const meuEvento = new Evento()

//No on eu crio o evento
//subscriber - assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

//Disparando o evento
//publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')

//Evento em si criado, para avisar o disparo
meuEvento.on('Encerrar', (dados)=> {
    console.log('Assinante: ' + dados)
})

//Disparo que irá fazer quando receber o evento
meuEevento.emit('Encerrar', 'Encerrando a execução da importação dos dados!')