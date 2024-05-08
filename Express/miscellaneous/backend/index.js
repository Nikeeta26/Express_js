const express = require("express");
const app = express();
const port = 8080;
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});

/****** parse data **********/
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");

app.get("/resister",(req,res)=>{
  let{name,email} = req.query;
 res.send(`standare GET response ${name},${email}`);
});

app.post("/resister",(req,res)=>{
  let{name,email}=req.body;
 // console.log(req.body);
  res.send(`standare POST response ${name},${email}`);
});