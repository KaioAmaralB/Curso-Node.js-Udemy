function sum(x){
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Tá de Brincadeira')
        }
        setTimeout(()=>{
            resolve(x + 5000);
        },3000);
    })
}
//Chamada da função async (utiliza o promise)
async function main(){
    try {
        //Toda vez que eu quero executar uma função cujo retorno é uma promise eu vou colocar o await
        //utilizando o try catch pra ver se utilizou ou rejeitou
        const resultado = await sum(200);
        console.log(`Resultado com Async/Await: ${resultado}`)
    } catch (error) {
        console.log(`Temos Problemas: ${error}`)
    }   
}

main();