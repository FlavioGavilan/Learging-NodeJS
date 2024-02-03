import inquirer from 'inquirer';
import qrImage from 'qr-image';
import fs from 'fs';

/* 
** 1. Use the inquirer npm package to get user input.
** 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
** 3. Create a txt file to save the user input using the native fs node module.
*/
const question = {
    type : "input",
    name : "url",
    message : "Digite the URL to turn into a qr code."
};
const qrCodeName = "my-qrcode";

inquirer.prompt([question])
    .then((answer) =>{
        qrImageUrlImage(answer.url);
        writeFileNode(answer.url);
    })
    .catch((error) =>{
        console.log(`Something is not right. ==> ${error}`);
    })


function qrImageUrlImage(answer){
    //criação do objeto QR
    let qrCode = qrImage.image(answer, {type:"png"});

    //Salva a imagem QR em um arquivo (opcional)
    qrCode.pipe(fs.createWriteStream(`${qrCodeName}.png`));

    //Exibe a image QR no console (opcional)
    qrCode.pipe(process.stdout);
}

function writeFileNode(answer){
    fs.access(`${qrCodeName}.txt`, fs.constants.F_OK, (err) =>{
        if(err){
            console.log(`File ${qrCodeName}.txt does not exist.`);
        }
        fs.writeFile(`${qrCodeName}.txt`, answer, (err) =>{
            if(err){ throw err; }
            
            console.log("The file has been saved!");
        });
        
        readFileNode(`${qrCodeName}.txt`);
    });
}

function readFileNode(fileName){
    console.log(`File ${fileName} exist.`);
    fs.readFile("./" + fileName, "UTF-8", (err, data) =>{
        if(err) { throw err; }
        console.log(data);
    });
}
