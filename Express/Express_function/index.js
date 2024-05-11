const express = require("express");
const app = express();
let port = 3000; 
app.listen(port,()=>{
    console.log(`app is listen on port ${port}`);
});
/******************** app.use method ****************/
app.use((req,res)=>{
    // console.log(req);

  console.log("request received");

 res.send("this is a basic response");
 res.send({
    name:"mango",
    color:"red"
 });
 let code = "<h1>Fruit</h1><ul><li>namgo</li><li>banana</li></ul>";
 res.send(code);
})

/********************* app.get ***************/
app.get("/",(req,res)=>{
res.send("hello nik root");
})

app.get("/apple",(req,res)=>{
    res.send("you comtain apple path");
    });

app.get("/banana",(req,res)=>{
        res.send("you comtain banana path");
        })

app.get("*",(req,res)=>{
    res.send("this psth not found");
})  


/********************* app.post ***************/
app.post("/",(req,res)=>{
    res.send("hello nik root");
    })
    
    app.post("/apple",(req,res)=>{
        res.send("you comtain apple path");
        });
    
    app.post("/banana",(req,res)=>{
            res.send("you comtain banana path");
            })
    
    app.post("*",(req,res)=>{
        res.send("this psth not found");
    })  
    

/************* req.params **************/

app.get("/:username",(req,res)=>{
    let{username} = req.params;
    let mtmlStr = `<h1>welcome to the page of @${username}!`;
       res.send(mtmlStr);
    });


/****************** req.quer *************/
app.get("/search",(req,res)=>{
    let{q}=req.query;
    if(!q)
 {
     res.send("nothing search");
 }
      res.send(`success ${q}`);
     });