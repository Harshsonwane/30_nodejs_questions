//json file handling write  a nodejs  script thats read a json file modifies its content and write 
//the modifed content back to the file.


//code goes here

const { json } = require('express');
const fs = require('fs')

fs.readFile('0_data.json','utf-8',(err,data)=>{
    if(err){
        console.log("error while reading",err)
        return;
    }
    let jsondata;
    try{
        jsondata = JSON.parse(data)
        console.log(jsondata)
    }catch(parseError){
        console.error('error parsig data',parseError)
        return;
    }
    jsondata.newKey = 'newValue';
    const jsonString = JSON.stringify(jsondata,null,2)

    fs.writeFile('0_data.json',jsonString,(err)=>{
        if(err){
            console.error('error writng file',err)
            return;
        }
        console.log("json file updated")
    })
})