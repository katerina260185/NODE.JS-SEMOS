const mongoose = require ("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/studenti"; // kreiras baza


    const connect = (connectionString) => {
        return new Promise((success, fail) => {
            mongoose.connect(connectionString, err => {
                if (err) return fail(err);
                console.log("Connection to MongoDB OK!");
                return success();
            });
        });
    };
    
    const Studenti = mongoose.model(
        "studenti", // model
        {
            ime: String,
            prezime: String,
            prosek: Number
        },
        "studenti"// collection
    );
    
    
    connect(connectionString)
        .then(() => {
            return Studenti.find({});
        })
        
        .then(res => {
            console.log(res);
            let s = new Studenti({
                ime: "pero",
                prezime: "peroski",
                prosek: 10
            });
            return s.save();
        })
        
        .then(res => {
            console.log("SAVED!");
            return Studenti.updateOne({ _id: "63d82bade3e193cd1b1c0782" }, { prezime: "trajkoski" });
        })
        
        .then(res => {
            console.log("UPDATED!");
            return Studenti.deleteOne({ _id: "63d8293756a39d0ac01ed24c" });
        })
        .then(res => {
            console.log("DELETED!")
            return Studenti.find({ ime: "pero" }, { prezime: 1 });
        })
        .then(res => {
            console.log("FILTERED DATA 1: ", res);
            return Studenti.find({ prosek: { "$gte": 9 } }, { prezime: 1, ime: 1 }).sort({ prezime: 1 });
        })
        .then(res => {
            console.log("FILTERED DATA 2:", res);
        })
        
        .catch(err => {
            console.log(err);
        })
    
 /*      
// dodadete minimum 20 zapisi (dokumenti) vo kolekcijata studenti
// sekoj zapis da se sostoi od slednite podatoci
//{
    ime:String,
    prezime: String,
    prosek: Number,
    lokacija: {
        grad: String,
        drzava: string
    }
    */