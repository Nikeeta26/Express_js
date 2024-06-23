const express = require("express");
const app = express();
const users = require("./routers/user.js");
const post = require("./routers/post.js");
const cookiesParse = require("cookie-parser");

app.use(cookiesParse("secretcode"));

app.get("/getsignedcookies",(req,res)=>{
res.cookie("made-in","india",{signed:true});
res.send("signe cookies send");
});

// signed cookies
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
});

app.get("/getcookies",(req,res)=>{
res.cookie("greet","hello");
res.cookie("nik","nik");
res.send("send you some cookies");
});

app.get("/",(req,res)=>{
  
    res.send('nikeeta hi ');
});

//unsigned cookies
app.get("/nikeeta",(req,res)=>{
    let{name = "kaudare"} = req.cookies;
    res.send(`hi ${name}`);
});

app.use("/user",users);
app.use("/post",post);

app.listen(3000,()=>{
    console.log("server is listening to 3000");
});