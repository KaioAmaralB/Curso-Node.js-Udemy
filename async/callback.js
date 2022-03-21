//função para soma, onde chamamos o callback
function soma(x, callback){
    //setTimeout faz a função retronar apenas depois de três segundos especificados no segundo parâmetro
    return setTimeout(()=>{
            return callback(null, x + 5000);
    },3000);
}

// callback function (primeiro pamâmetro é o erro e o segundo é o resutaldo)
function resolveSoma(err, resultado){
    //Throw é para parar o processamento e mostrar o ocorrido
    if(err) throw err;
    console.log(resultado);
}

soma(200, resolveSoma)