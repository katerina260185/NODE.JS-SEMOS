const util = require("./utils")

const DATA_SOURCE ="./data.txt"

const addStudent = async (req,res)=> {
    try{
    // da ja vcitame sodrzinata na data.txt
    let dataRaw = await util.fileRead(DATA_SOURCE)

    // za da utvdrime dali fajlot e prazen ili ne
    let data = null;
    data = dataRaw.length > 0 ? JSON.parse(dataRaw) : []; 

    // go dodavame noviot zapis kako nov clen vo nizata
    data.push(req.body)

    await util.fileWrite(DATA_SOURCE, JSON.stringify(data));
    res.send("ok")
    }
    catch (err){
        res.send(err)
    }
}


const getAllStudents = async (req,res) => {
    let data = await util.fileRead(DATA_SOURCE);
try{
    if(data.length > 0){
      //  res.send(JSON.stringify(data)) // kako string ke go prikaze vo edna linija
         res.send(JSON.parse(data)) // kako objekt ke go prikaze

    }
    else {
        res.send("nema studenti")
    }
} catch (err){
res.send(err)
}
}

const getStudentById = async (req,res) => {
    try{
        //console.log(req.query.id)
        let dataRaw = await util.fileRead (DATA_SOURCE);
        let data = JSON.parse(dataRaw);
        //req.params.id = id parametar, proveruvame dali go ima id vo parametri
        if(data[req.params.id]) {
            res.send(data[req.params.id])
        }
        else {
            res.send("nema takov student")
        }
    }
    catch(err){
        res.send(err)
    }
}

module.exports ={
    addStudent,
    getAllStudents,
    getStudentById,   
}
