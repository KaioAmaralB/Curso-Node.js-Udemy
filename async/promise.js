function soma(x){
    //setTimeout faz a função retronar apenas depois de três segundos especificados no segundo parâmetro
    // chamando a promise e colocando os dois parâmetro dentro dela, o resolve e o reject
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x + 5000);
        },3000);
    })
}

//.then indica que deu tudo certo com o resolve da promise
// dentro de arrow function eu coloco o resultado da promise
soma(200).then((resultado)=>{
    console.log(`Resolvido, Resultado: ${resultado} `);
});