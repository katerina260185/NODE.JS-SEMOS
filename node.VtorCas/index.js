console.log("zdravo, ova e vtor cas"); // iskaz
// vlez- izlez od pozicija na softwere 
//izlez monitor, vlez tastatura

console.log("ova e string");
console.log(1112344);
console.log(false);
console.log("[1, 2]");
console.log({a: "a1", b: "b1"});
console.log("zdravo"); console.log("vtor cas"); // moze i vaka, no preporaclivo e da odat vo poseben red

let poraka = "zdravo";
console.log(poraka);

// konvertiranje

let valuestr = true
console.log(typeof valuestr)

//a + b // binare dva operanti
//+c // unaren eden operant

//console.log(+1)
//console.log(+true)

// ||, &&, !, ??


// za doma

for(let k = 0; k < 10; k++)

{
   // console.log("K: " + k);
/*
    */
if(k == 6)
{
  break;
}
    if(k % 2 == 0)
    {
     console.log(k);
    }
    
}


function prikaziPoraka(p = "obicna poraka"){ // parmetar e toa vo zagradite, koga ke go povikame dole vo () stanuva argument
return console.log(p);
}
prikaziPoraka() // ke stane argument

// ako ova e() prazno ke vrati undefind

let mess = function(p = "funkciski izraz") {
    return console.log(p)
}
mess();

let mess2 = (p = "arrow function") => {
    console.log(p)
}
mess2()

