let a = false;
let b = true;
console.log(a ?? b)

let aa;
let bb;
let res = (aa !== null & aa !== undefined) ? aa : bb
//              uslov                     izraz   izraz

// so return se prekinuva izvrsuvanjeto na funkcijata

//MODULI VO JS SO NPM ALATKATA (npm init)

// vidovi moduli
// http, assert, fs, path, process, os, querystring, url

//lokalni moduli
//third-party (nadvoresni moduli napraveni od drug i dostapni preku npm)
// lokalno se instaliraat na nivo na proekt, globalno instalirani na nivo na okolina
// mongoose, express, angular, react....

const calculator = require("./calculator.js")


console.log(calculator.sobiranje(3,4))



const { mnozenje, delenje } = require ("./calculator.js")
console.log(calculator.mnozenje(3,4))
console.log(calculator.delenje(10,5))

//export function add (a,b) {return a+b}
//import { add} from "./calculator.js"

// promena na .js vo .mjs
//da se dodade "type": "module" vo package.json
// ke moze so import i export da gi koristis

//const {textConverter, textStats} = require("./converter.js")
const {textConverter, textStats} = require("./domasna.js")

//let orig = "rezultatot od ovoj tekst kje bide kirilichen tekst gjezve, zhaba, dzvonche, ljubov, konj, kjumur, chasha, dzhin, shal";
//let conv = textConverter("lat2cyr", orig)
//console.log(orig)
//console.log(conv)

//let orig = "резултатот од овој текст ќе биде на латиничен текст, ѓезве, жаба, ѕвонче, љубов, коњ, ќумур, чаша, џин, шал"
//let conv = textConverter("cyr2lat", orig)
//console.log(orig)
//console.log(conv)

let randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit? Phasellus a lectus at sapien fringilla interdum sed id lorem. In nec interdum leo, non imperdiet nulla! Sed elementum est vitae sem vulputate, non ornare est facilisis. Mauris eget leo at lectus aliquet elementum sit amet a ligula. Integer quis metus vel odio dictum suscipit a vel mauris. Aaaa, mdkfcnsjs. Lorem ipsum dolor sit amet, consectetur adipiscing elit: ";

let stars = textStats(randomText)
console.log(stars)
