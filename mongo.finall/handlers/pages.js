const blogpost = require ("../models/blogpost")

const main = async (req,res) => {
    try 
    {
        let data = await blogpost.getAll();
        return res.render("main" , {data}) //main.ejs
    }
    catch(err) 
    {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
}

const singleBlogpost = async (req, res) => {
    try
     {
        let data = await blogpost.getOne(req.param.id);
        return res.render("single_blogpost", {data})// single_blogpost.ejs

    }
    catch(err) {
        console.log(err);
        return res.status(500).send("internal server error")
    }
}
const formAdd = (req, res) => {
    return res.render("form_add"); //form_add.ejs
};

const formEdit = async (req, res) => {
    try {
        let data = await blogpost.getOne(req.params.id);
        return res.render("form_edit", { data }); // form_edit.ejs
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};


module.exports = {
    main,
    singleBlogpost,
    formAdd,
    formEdit,
}