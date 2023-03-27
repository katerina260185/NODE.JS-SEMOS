const blogpost = require("../models/blogpost")

const create = async (req, res)=> {
    try{
        let data = {
            ... req.body,
            publish_data: new Date().toISOString()
        };
        await blogpost.create(data);
        res.redirect("/")

    }
    catch(err){
        console.log(err)
        return res.starus(500).send("iternal server error")
    }
};

const edit = async (req, res) => {
    try {
        let data = {
            ...req.body
        };
        await blogpost.updateOne(req.params.id, data);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const remove = async (req, res) => {
    try {
        await blogpost.remove(req.params.id);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};
module.exports ={
    create,
    edit,
    remove

}