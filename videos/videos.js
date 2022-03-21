//Chamando o módulo nativo child_process, com uma função em específico spawn
const {spawn} = require('child_process')

//Pegando os dados na posição na chamada do arquivo no node.js
const parent = process.argv[2]
//array para as compressões de videos
let videos = []

//Valida os dados na posição específicada
if(process.argv[2]){

    //onde o array de videos para comprimir começa
    const start = parseInt(process.argv[3])
    //onde o array de videos para comprimir termina
    const end = parseInt(process.argv[4])

    //Alimentar o array com os dados passados
    for(let i = start; i <= end; i++){
        videos.push(i);
    }
    //reverter a ordem do maior para o menor (fila de compressão)
    videos.reverse();
    //Passar todos os parâmetros
    processVideo()
}else {
    console.log('É necessário criar um diretório de nível superior')
}

//Função para comprimir o video
function resize(video, quality){
    //Retorna a promessa
    const p = new Promise((resolve, reject)=>{
        const ffmpeg = spawn('./ffmpeg/bin/ffmpeg.exe',[
            //parâmetros de vídeos
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/resultado/${video}-${quality}.mp4`
        ])
        //caso de algum erro, retonar
        ffmpeg.stderr.on('data', (data)=>{
            console.log(data)
        })
        //encerrar a execução
        ffmpeg.on('close',(code)=>{
            resolve()
        })
    })
    return p
}

//Invocar o resize
async function processVideo(){
    //Seleciona o array e o comando pop pega o item e tira do array 
    let video = videos.pop()
    //Se encontrar video
    if(video){
        //qualidades para comprimir
        try {
            await resize(video,720)
            await resize(video,480)
            await resize(video,360)

            //se der certo, confirma na tela
            console.log(`Videos renderizados - ${video}`)
            //Chama a função para confirmar se tem mais algum item no array
            processVideo()
            //tratamento de erro
        } catch (e) {
            console.log(e)
        }
    }
}