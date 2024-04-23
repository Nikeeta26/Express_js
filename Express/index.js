const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`app is listen on port ${port}`);
 });
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));

app.get("/:",(req,res)=>{
    let{username}=req.params;
  res.render("home.ejs");
});

