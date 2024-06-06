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

app.use("/",(req,res,next)=>{
  next();
  console.log("this is random routes");

})

// //logger 
// app.use((req,res,next)=>{
//   req.time = new Date(Date.now()).toString().split('').slice(0,21).join('');
  
// console.log(req.method, req.hostname, req.protocol,req.path,req.time);
//   next();
// });



app.get("/",(req,res)=>{
res.send("hello");
});

// app.get("/random",(req,res)=>{
//   res.send("this is the random page");
// });

// app.use((req,res)=>{
//   res.send("page not fount");
//   console.log("data");
// })

// app.use("/search",(req,res,next)=>{
// let{token} = req.query;
// if(token === "giveprocess"){
//   next();
// }
// res.send("Access denoid");
// });

//multiple middleware
const chekmiddleware = (req,res,next)=>{
  let{token,id} = req.query;
if(token === "showme"){
  next();
}
res.send("not show data");
};

app.get("/search",chekmiddleware,(req,res)=>{
  res.send("data");
  console.log("save data");
  
  });
  

app.get("/search",(req,res)=>{
res.send("data");
console.log("save data");

});

app.listen(8080,()=>{
  console.log("server listing port on 8080");
});

