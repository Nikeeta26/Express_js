const express = require("express");
const app = express();
const users = require("./routers/user.js");
const post = require("./routers/post.js");
const session = require('express-session')
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOption = {
    secret : "mysecreatedata",
    resave : false,
    saveUninitialized : true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,

    },
};
app.use(session(sessionOption));
app.use(flash());
app.use((req,res,next)=>{

    res.locals.successmessage = req.flash("success");
    res.locals.errmessage = req.flash("error");
    next();
});



app.get("/register",(req,res)=>{
    let{name="sakshi"} = req.query;
    if(name === "sakshi"){
        req.flash("error","some error occured");
    }
    else{
        req.flash("success","user resister successfuly");
    }
    req.session.name = name;
    console.log(req.session.name);
   
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
   // console.log(req.flash("success"));

   
//    res.locals.successmessage = req.flash("success");
//    res.locals.errmessage = req.flash("error");

   res.render("page.ejs",{name : req.session.name});

    //res.render("page.ejs",{name : req.session.name,msg : req.flash("success")});
   // res.send(`hello ${req.session.name}`);
});

// app.use(session({secret:"mysipersecret",resave: false,
//                  saveUninitialized: true,}));


//-----------------------show count of request------------
// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count = 1;
//     }
// res.send(`You sent a requiest  ${req.session.count} time`);
// });

// app.get("/",(req,res)=>{
// res.send("hello");
// });

app.use("/user",users);
app.use("/post",post);

app.listen(3000,()=>{
    console.log("server run on 3000");
});

