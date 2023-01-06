// text converter
//                     parametri
const textConverter = (type, text) => {

const conversionMap = {
    a: "a",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    gj:"ѓ",
    e: "е",
    zh: "ж",
    z: "з",
    dz: "ѕ",
    i: "и",
    j:"ј",
    k: "к",
    l: "л",
    lj: "љ",
    m: "м",
    n: "н",
    nj:"њ",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    kj:"ќ",
    u:"у",
    f: "ф",
    h: "х",
    c: "ц",
    ch: "ч",
    dzh: "џ",
    sh:"ш",

};
for (let c in conversionMap) {

    let regex;
    switch (type) {
        case "cyr2lat":
            regex = new RegExp(`${conversionMap[c]}`, 'g')
            text = text.replace(regex, c)
            break;
        case "lat2cyr":
            regex = new RegExp(`${c}`, 'g');
            text = text.replace(regex, conversionMap[c])
            break;
    }
}


return text;

};




const textStats = (text) => {
    if(typeof text !== "string") return;

    let rezObj = {
    bukvi: 0,
    zborovi:0,
    rechenici: 0,
    gt5: 0,
    lt5 : 0,
    eq5: 0,
    }


    rezObj.bukvi = text.length;
    rezObj.zborovi = text.split(" ").length;
    rezObj.rechenici = text.split(".").length;
   

    let zborovi = text.split(" ");
    for (let zbor of zborovi) {
        if(zbor.length > 5) rezObj.gt5++;
        if(zbor.length < 5) rezObj.lt5++;
        if(zbor.length === 5) rezObj.et5++;
    }

    for (let i = 0; i.length < zborovi.length; i++) {
        console.log(zborovi[i]);
    }


    return rezObj;


    
}
module.exports = {
    textConverter,
    textStats
}