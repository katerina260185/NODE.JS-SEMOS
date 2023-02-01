
const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/klienti"; // kreiras baza

const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            if (err) return fail(err);
            console.log("Connection to MongoDB OK!");
            return success();
        });
    });
};

const klienti = mongoose.model(
    "klienti", // model
    {
        ime:String,
        prezime: String,
        prosek: Number,
        lokacija: {
            grad: String,
            drzava: String
        },
    },
    "klienti" // ime na kolekcija
)

connect(connectionString)
        .then(() => {
            return klienti.find({});
        })
        
        .then(res => {
            console.log(res)
            let s = new klienti({
                ime: "Katerina",
                prezime: "Atanasovska",
                prosek: 9,
                lokacija: {
                    grad: "Skopje",
                    drzava: "Mk"
                }
            })
            return s.save();
        })
        
        .then(res => {
            console.log(res)
            let student2 = new klienti({
                ime: "Viktor",
                prezime: "Atanasovski",
                prosek: 8,
                lokacija: {
                    grad: "Bitola",
                    drzava: "Mk"
                }
            })
            return student2.save();
        })
.then(res => {
    console.log(res)
    let student3 = new klienti({
        ime: "Petko",
        prezime: "Petkovski",
        prosek: 6,
        lokacija: {
            grad: "Kumanovo",
            drzava: "Mk"
        }
    })
    return student3.save();
})

.then(res => {
    console.log(res)
    let student4 = new klienti({
        ime: "Trajko",
        prezime: "Trajovski",
        prosek: 10,
        lokacija: {
            grad: "Kumanovo",
            drzava: "Mk"
        }
    })
    return student4.save();
})
.then(res => {
    console.log(res)
    let student5 = new klienti({
        ime: "Stanko",
        prezime: "Stankovski",
        prosek: 8,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student5.save();
})

.then(res => {
    console.log("deleted!")
    return klienti.deleteOne({_id: "63d845de5cb9131a888153be"});
})
.then(res => {
    console.log("deleted!")
    return klienti.deleteOne({_id: "63d84643e5c978d106950bce"});
})

.then(res => {
    console.log(res)
    let student6 = new klienti({
        ime: "Vlatko",
        prezime: "Vlatkovski",
        prosek: 8.7,
        lokacija: {
            grad: "Bitola",
            drzava: "Mk"
        }
    })
    return student6.save();
})
.then(res => {
    console.log(res)
    let student7 = new klienti({
        ime: "Sofija",
        prezime: "Atanasovska",
        prosek: 6.9,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student7.save();
})


.then(res => {
    console.log(res)
    let student8 = new klienti({
        ime: "Maja",
        prezime: "Ristovska",
        prosek: 9.9,
        lokacija: {
            grad: "Kumanovo",
            drzava: "Mk"
        }
    })
    return student8.save();
})
.then(res => {
    console.log(res)
    let student9 = new klienti({
        ime: "Viktorija",
        prezime: "Ristovska",
        prosek: 8.1,
        lokacija: {
            grad: "Bitola",
            drzava: "Mk"
        }
    })
    return student9.save();
})
.then(res => {
    console.log(res)
    let student10 = new klienti({
        ime: "Vesna",
        prezime: "Milkova",
        prosek: 6,
        lokacija: {
            grad: "Bitola",
            drzava: "Mk"
        }
    })
    return student10.save();
})
.then(res => {
    console.log(res)
    let student10 = new klienti({
        ime: "Vlatko",
        prezime: "Krstevski",
        prosek: 7.8,
        lokacija: {
            grad: "Bitola",
            drzava: "Mk"
        }
    })
    return student10.save();
})


.then(res => {
    console.log(res)
    let student11 = new klienti({
        ime: "Bojan",
        prezime: "Krstevski",
        prosek: 7.7,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student11.save();
})
.then(res => {
    console.log(res)
    let student12 = new klienti({
        ime: "Bobo",
        prezime: "Nikolov",
        prosek: 6.5,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student12.save();
})
.then(res => {
    console.log(res)
    let student13 = new klienti({
        ime: "Bojana",
        prezime: "Petkovska",
        prosek: 7,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student13.save();
})
.then(res => {
    console.log(res)
    let student14 = new klienti({
        ime: "Nikola",
        prezime: "Nikolov",
        prosek: 6.5,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student14.save();
})

.then(res => {
    console.log(res)
    let student15 = new klienti({
        ime: "Nade",
        prezime: "Pesova",
        prosek: 6.2,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student15.save();
})
.then(res => {
    console.log(res)
    let student16 = new klienti({
        ime: "Sara",
        prezime: "Jovanova",
        prosek: 7.4,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student16.save();
})

.then(res => {
    console.log(res)
    let student17 = new klienti({
        ime: "Jovan",
        prezime: "Atanasov",
        prosek: 6.8,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student17.save();
})
.then(res => {
    console.log(res)
    let student18 = new klienti({
        ime: "Baze",
        prezime: "Jovanovski",
        prosek: 7.7,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student18.save();
})

.then(res => {
    console.log(res)
    let student19 = new klienti({
        ime: "Angela",
        prezime: "Atanasova",
        prosek: 9.7,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student19.save();
})
.then(res => {
    console.log(res)
    let student20 = new klienti({
        ime: "Ane",
        prezime: "Taseva",
        prosek: 9.8,
        lokacija: {
            grad: "Skopje",
            drzava: "Mk"
        }
    })
    return student20.save();
})


.then(res =>{
    //console.log("uspeshno")
    return klienti.aggregate([{ $sort: { prosek: -1}}, {$limit :5}, {$project: {_id: 0, ime:1, prezime:1, prosek:1}} ])
})

.then(res =>{
    console.log("najdobri 5 studenti:", res)
    return klienti.aggregate([{$sort: {prosek: 1}}, {$limit:3}, {$project: {_id: 0, ime:1, prezime:1, prosek:1, grad: "Skopje"}}])
})
.then(res=>{
    console.log("najlosi 3 studenti od Skopje:" , res)
    return klienti.aggregate([{$sort: {prosek:-1}}, {$limit: 10}, {$project: {_id: 0, ime:1, prezime:1, prosek:1, grad:"Skopje"}}])
})

.then(res=>{
    console.log("najdobrite 10 studenti od Skopje:", res)
    return klienti.aggregate([{$sort: {prosek:1}}, {$limit:5}, {$project: {_id: 0, prezime:1, prosek:1, grad: "Bitola"}}])
})
.then(res=>{
    console.log("najlosi 5 studenti od Bitola:", res)
    return klienti.aggregate([{$sort: {prezime:1}}, {$project: { _id:0, prezime:1, grad: "Bitola" }}])
})

.then(res=> {
    console.log("prikaz na studenti od Bitola, podredeni po prezime:", res)
    return klienti.aggregate([{$sort: {ime:1}}, {$project: { _id:0, ime:1, grad: "Kumanovo" }}])
})
.then(res=> {
    console.log("prikaz na studenti od Kumanovo, podredeni po ime:", res)
    return klienti.aggregate([{$sort: {prosek:-1}}, {$project: {_id:0, ime:1, prezime:1,prosek:1,  grad:"Skopje"}}, {$limit:1}])
})
.then(res=> {
    console.log("prikaz na najdobriot student od Skopje: ", res)
})




        .catch (err => {
           console.log(err)
        })