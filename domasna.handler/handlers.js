const fs = require("fs");

const express = require("express");


// funkcija studentiTXT za zapisuvanje vo txt.file

 const studentiTXT = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
}

// da moze funkcijata da se koristi nadvor od datotekata
module.exports = {  
    studentiTXT,
};