const fs = require("fs");

const express = require("express");
const { json } = require("express");

// funkcija za prezemanje od body i zapisuvanje vo podatoci2.txt

const prezemiJson = (req,res) =>{
   
    console.log(req)
    /*
    fs.writeFile("podatoci2.txt", JSON/string), (err) => {
        if(err){
            return reject(err)
        }
    }
*/
    res.send(" upesno prezemeni podatoci")
    
}

/*
const podatociTXT = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return reject(err)
            }
            return resolve(data);
        })
    })
}
*/
//prezemiJson("podatoci2.txt", result)


// da moze funkcijata da se koristi nadvor od datotekata
module.exports = {  
    prezemiJson, 
    //podatociTXT,
};