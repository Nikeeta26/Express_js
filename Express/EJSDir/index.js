const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.listen(port,()=>{
    console.log(`app is listen on port ${port}`);
 });
 app.set("view engine","ejs");

 app.get("/",(req,res)=>{
  res.render("home.ejs");
 })
app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1 ;
 res.render("rolldice.ejs",{diceVal});
});

/************** add path of view for run in parent directory ***********/
app.set("views",path.join(__dirname,"/views"));


/***************** instagram EJS ***************/

// app.get("/ig/:username",(req,res)=>{
//     const followers = ["nik","mik","sim","abc","pqr"];
//   let{username}=req.params;
//   console.log(username);
//   res.render("instagram.ejs",{username,followers});
// });

/******************* display data of json ***************/
app.get("/ig/:username",(req,res)=>{
  const instaData = require("./data.json");
  let{username} = req.params;
  
  let data = instaData[username];
  if(data){
    res.render("instaData.ejs",{ data });
  }
  else{
    res.render("eerror.ejs");
  }
  //console.log(data);
  
});

