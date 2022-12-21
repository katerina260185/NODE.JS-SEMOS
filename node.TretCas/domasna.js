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

        if( text.includes("ch", "gj", "zh", "dz", "lj", "nj","kj", "dzh", "sh" )) {
            text = text.replace("ch", "ч")
            text = text.replace("gj", "ѓ")
            text = text.replace("zh", "ж")
            text = text.replace("dz", "ѕ")
            text = text.replace("lj", "љ")
            text = text.replace("nj", "њ")
            text = text.replace("kj", "ќ")
            text = text.replace("dzh", "џ")
            text = text.replace("sh", "ш")
        }

        if( text.includes("ч", "ѓ", "ж", "ѕ", "љ", "њ","ќ", "џ", "ш" )) {
            text = text.replace( "ч", "ch")
            text = text.replace( "ѓ", "gj")
            text = text.replace( "ж", "zh")
            text = text.replace( "ѕ", "dz")
            text = text.replace( "љ", "lj")
            text = text.replace("њ", "nj")
            text = text.replace( "ќ", "kj")
            text = text.replace( "џ", "dzh")
            text = text.replace( "ш", "sh")
        }
        }

    return text;
}

const textStats = (text) => {
    if(typeof text !== "string") return;

    let rezObj = {
    bukvi: 0,
    zborovi:0,
    rechenici: 0,
    gt5: 0,
    lt5 : 0,
    eq5: 0,
    vkupnoRecenici: 0

    }


   let zborovi = text.split(" ");
   for(let zbor of zborovi) {
    if(zbor.includes("!")){
       rezObj.vkupnoRecenici++
    }
    if(zbor.includes("?")){
        rezObj.vkupnoRecenici++
     }
     if(zbor.includes(".")){
        rezObj.vkupnoRecenici++
     }
     if(zbor.includes(":")){
        rezObj.vkupnoRecenici++
     }

   }
return rezObj;
     
}


module.exports = {
    textConverter,
    textStats
}