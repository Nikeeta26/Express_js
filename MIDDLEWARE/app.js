const express = require("express");
const app = express();
const expressError = require("./ExpressError");
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

// app.use("/",(req,res,next)=>{
//   next();
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

// app.use("/search",(req,res,next)=>{
// let{token} = req.query;
// if(token === "giveprocess"){
//   next();
// }
// res.send("Access denoid");
// });

app.use("/api",(req,res,next)=>{
  next();
});
app.get("/api",(req,res)=>{
  res.send("hello welcome to  data");
});

//multiple middleware
// const chekmiddleware = (req,res,next)=>{
//   let{token,id} = req.query;
// if(token === "showme"){
//   next();
// }
// res.send("not show data");
// };

// app.get("/search",chekmiddleware,(req,res)=>{
//   res.send("data");
//   console.log("save data");
  
//   });
  

// app.get("/search",(req,res)=>{
// res.send("data");
// console.log("save data");

// });

app.listen(8080,()=>{
  console.log("server listing port on 8080");
});



//Error Hnadling in express

app.get("/wrong",(req,res)=>{
  acb = acb;
});

// const chekmiddleware = (req,res,next)=>{
//   let{token} = req.query;
// if(token === "showme"){
//   next();
// }
//    throw new  expressError(401,"ACCESS DENID!");
// }


// app.get("/search",chekmiddleware,(req,res)=>{
//   res.send("data");
//   console.log("save data");
  
//   });

  //custome error handling


  // app.get("/error",(req,res)=>{
  //   anhhhhf=ajjdkdkd;
  // //res.send("nikeeta");
  // });

  

   const chekmiddleware = (req,res,next)=>{
    let{token} = req.query;
  if(token === "showme"){
    next();
  }
     throw new  expressError(401,"ACCESS DENID!");
     //throw new  expressError();
  }
  
  app.get("/search",chekmiddleware,(req,res)=>{
    // res.send("data");
    // console.log("save data");
    abc=abc;
    });


    app.get("/nik",(req,res)=>{
      // res.send("data");
      // console.log("save data");
      abc=abc;
      });
  

      app.get("/admin",(req,res)=>{
        throw new expressError(404,"Access to an admin is foebidden");
      });

    app.use((err,req,res,next)=>{
      // let{status,message} = err;
       let{status=400,message="somethin g went wrong"}= err;
      console.log("-----------Error1--------------");
      //next(err);
    res.status(status).send(message);
     });

  //  app.use((req,res)=>{
  //   res.status(400).send("Page not found");
  //  })
 

  // app.use("/sea",(req,res,next)=>{
  //   let{token}=req.query;
  //   if(token==="nikeeta"){
  //     next();
  //   }
  //   throw new expressError(401,"error occurse");
  // });

  // app.get("/sea",(req,res)=>{
  //   res.send("diplay data");
  // });

  //ex create an admin rout and send an error with a 403 status code
//   app.get("/admin",(req,res,next)=>{
//     let{data} = req.query;
//     if(data=="nik"){
//       next();
//     }
//    throw new expressError();
//   })
//   app.get("/admin",(req,res)=>{
//     res.send("hello error");
//   });

// app.use((err,req,res,next)=>{
//    let{status=403,message="data not send"} = err;
//    res.status(status).send(message);
// })


