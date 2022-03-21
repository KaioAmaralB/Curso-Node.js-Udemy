//Exemplo da demora entre Blocking e Non Blocking
const fs = requie("fs");

fs.readFile("file.txt",(err, data)=>{
    if(err) throw err;
    console.log(data);
    fs.unlink("arquivo.txt", (unlinkErr)=>{
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo Excluído com sucesso!")
    });
});