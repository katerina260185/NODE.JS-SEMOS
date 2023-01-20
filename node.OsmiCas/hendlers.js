// home hendler - funkcija koja

const { json } = require("express")

const home = (req,res) => {
    res.send("zdravo od home!")
}

//console.log("REQ:BODY " + JSON.stringify(req.body));

const calculator = (req,res)=> {
    console.log(":REQ OPERATION: " + req.params.operation);
    console.log(":REQ QUERY: " + JSON.stringify(req.query));

    switch(req.params.operation){
        case "sobiranje" :
            result = Number(req.query.a) + Number(req.query.b);
            break;
         case "odzemanje" :
             result = Number(req.query.a) - Number(req.query.b);
            break;
            case "mnozenje" :
            result = Number(req.query.a) * Number(req.query.b);
            break;
         case "delenje" :
             result = Number(req.query.a) / Number(req.query.b);
            break;
            default:
                result = 0;
    }


    res.send(result.toString())
}

const calculator2 = (req,res)=> {
    console.log(":REQ OPERATION: " + req.params.operation);
    console.log(":REQ QUERY: " + JSON.stringify(req.query));

    switch(req.params.operation){
        case "sobiranje" :
            result = Number(req.query.a) + Number(req.query.b);
            break;
         case "odzemanje" :
             result = Number(req.query.a) - Number(req.query.b);
            break;
            case "mnozenje" :
            result = Number(req.query.a) * Number(req.query.b);
            break;
         case "delenje" :
             result = Number(req.query.a) / Number(req.query.b);
            break;
            default:
                result = 0;
    }


    res.send(result.toString())
}


module.exports = {
    home,
    calculator,
    calculator2
};