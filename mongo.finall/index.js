const express = require("express")
const mongoose = require ("mongoose")
const callbacks = require("./handlers/callbacks")
const pages = require ("./handlers/pages")

const conStr = "mongodb://127.0.0.1:27017/bazablog"

mongoose.connect(conStr, err => {
    if (err) return console.log(err);
    console.log("conected to mongo DB")
})

const app = express();

app.set ("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/", pages.main)
app.get("/blogpost/:id", pages.singleBlogpost);
app.get("/form", pages.formAdd);
app.get("/form/:id", pages.formEdit);


app.post("/callback/post", callbacks.create);
app.post("/callback/post/:id", callbacks.edit);
app.post("/callback/remove/:id", callbacks.remove);

app.listen(8080, err => {
    if (err) return console.log(err);
    console.log("Server sucesfully started on port 8080!");
});