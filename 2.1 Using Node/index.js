//import { access, writeFile, readFile,  } from "node:fs";

const fs = require("fs");
let fileName = "message.txt";

fs.access(fileName, fs.constants.F_OK, (err) =>{
//access(fileName, fs.constants.F_OK, (err) =>{
    if(err){
        console.log(`File ${fileName} does not exist.`);
        //writeFileNode();
    }

    readFileNode();
});

function writeFileNode(){
    fs.writeFile(fileName, "Hello from NodeJS", (err) =>{
    //writeFile(fileName, "Hello from NodeJS", (err) =>{
        if(err){ throw err; }
    
        console.log("The file has been saved!");
    });
}

function readFileNode(){
    console.log(`File ${fileName} exist.`);
    fs.readFile("./" + fileName, "UTF-8", (err, data) =>{
    //readFile("./" + fileName, "UTF-8", (err, data) =>{
        if(err) { throw err; }
    
        console.log(data);
    });
}

