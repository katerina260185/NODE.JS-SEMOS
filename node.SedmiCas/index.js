const http = require("http")
const fs = require ("fs")
const url = require ("url")
const { resolve } = require("path")
const { rejects } = require("assert")

const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if(err) {
                return fail(err)
            }
            return success(data)
        })

    })
}

const render = async(page, data) => {
    let content = await fileRead (`./${page}.html`)
    return content.replace("{{res}}", data)
}

// object
const pages = { 
    "/": async (req, res) => {
        res.end(await render("index", "pochetna"));
    },

    "/doma" : async(req,res) =>{
        res.end("doma")

    },
    "/korisnici": (req, res) => {
        res.end("korisnici");
    },
    //ruti pateki
    "/sobiranje" : async(req,res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`
       // res.end(result);
       res.end(await render("index", result))
    }, 
    "/odzemanje" : async(req,res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`
        //res.end(result)
        res.end(await render("index", result))
    }, 
    "/mnozenje" : async(req,res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`
       // res.end(result);
       res.end(await render("index", result))
    }, 
    "/delenje" : async(req,res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`
        //res.end(result);
        res.end(await render("index", result))
    }, 

}

//ovaa funkcija se povikuva sekogas koga ke stigne baranje na nasiot server
const server = http.createServer((req, res) => {
//let [path, _] = req.url.split("?"); dolna crta _ se stava koga ne planirame da go koristime toj argument, split go deli na stringovi
let path = req.url.split("?")[0]; // split go deli na stringovi , a so [0], se vraka prviot element, a toa ke bide (sobiranje, odzemanje, delenje, mnozenje)
//console.log("URL: " + req.url);
//console.log("PATH: " + path);

if(pages[path]){

    const qs = url.parse(req.url, true).query;
   // console.log(qs)
    req.query = qs;
    pages[path] (req, res)

} else {
    res.end("nevalidna operacija")
}

});

server.listen(8080);

//www.google.com?k1=v1&k2=v2&
// k = kluc -  v = vrednost
// mnozestvo na fakultativni parametri