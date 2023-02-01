const fs = require("fs");

const express = require("express");
const { query } = require("express");

// funkcija za prezemanje od body i zapisuvanje vo nova datoteka.podatoci.txt


const prezemiJson = (req,res) =>{
    let result = JSON.stringify(req.query)
    fs.writeFile("podatoci.txt", result, (err) => {
        if(err){
            return err
        }
        return result
    })
    res.send(result)
}

// da moze funkcijata da se koristi nadvor od datotekata
module.exports = {  
    prezemiJson, 
};