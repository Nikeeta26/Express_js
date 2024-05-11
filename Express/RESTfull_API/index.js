const express = require("express");
let app = express();
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
let port = 3000;
app.listen(port,()=>{
    console.log(`server run on ${port}`);
})

let posts = [
    {
        id:uuidv4(),
        username:"apanacollege",
        content:"I love coding"
    },

    {
        id:uuidv4(),
        username:"nikeeta_kaudare",
        content:"i love gaming"
    },

    {
        id:uuidv4(),
        username:"shivraj_kaudare",
        content:"belives your self"
    },
];

app.get("/posts",(req,res)=>{

 res.render("index.ejs",{posts});

});

app.get("/posts/new",(req,res)=>{
res.render("form.ejs");
});

app.post("/posts",(req,res)=>{
    let{username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
  console.log(req.body);
  res.redirect("/posts");
})

app.get("/posts/:id",(req,res)=>{
    let{id} = req.params;
    let post = posts.find((p)=>id === p.id);
    console.log(post);
    //res.send("work");
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let{id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newcontent;
    console.log(post);
   res.redirect("/posts");
  
});

app.get("/posts/:id/edit",(req,res)=>{
let{id} = req.params;
let post = posts.find((p)=> id === p.id);
res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
let{id} = req.params;
 posts = posts.filter((p)=> id !== p.id);
 //res.send("success");
res.redirect("/posts");
});