const express = require("express");
const app = express();

// app.use((req,res,next)=>{
//     console.log("hi, i am 1st nik");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("hi, i am 2st nik");
//    next();
// });



// app.use("/",(req,res)=>{
//   res.send("hello this is random root ");
//   console.log("this is random routes");
// })


// //logger 
// app.use((req,res,next)=>{
//   req.time = new Date(Date.now()).toString().split('').slice(0,21).join('');
  
// console.log(req.method, req.hostname, req.protocol,req.path,req.time);
//   next();
// });



// app.get("/",(req,res)=>{
// res.send("hello");
// });

// app.get("/random",(req,res)=>{
//   res.send("this is the random page");
// });

// app.use((req,res)=>{
//   res.send("page not fount");
//   console.log("data");
// })
app.use("/",(req,res)=>{
  let{token} = req.query
  res.send("data");
});

app.get("/api",(req,res)=>{
res.send("data");

});

app.listen(8080,()=>{
  console.log("server listing port on 8080");
});

