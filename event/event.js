//Programação digirida a Evento
//Módulo nativo event
const EventEmitter = require('events')

//Utilizando herança, é como se tivesse pegando uma cópia do EventEmitter e passando para o Evento
//Criando uma classe extendendo o EventEmitter
class Evento extends EventEmitter {}
const meuEvento = new Evento()

//No on eu crio o evento
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

//Disparando o evento
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')
