const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Chat  = require("./models/chat.js");
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

main().then((result)=>{
    console.log("connection succesfully ",result);
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//insert data
// let chat1 = new Chat({
//     from:"nikeeta",
//     to:"sneha",
//     message:"hi hello i am nik",
//     created_at:new Date()
// });
// chat1.save().then((data)=>{
//     console.log("hi i am nik",data);
// }).catch((error)=>{
//     console.log(error,"oh no error occurse");
// })

//index Route
app.get("/chats",async(req,res)=>{
   let chats = await Chat.find();


//  Chat.find().then((data)=>{
//     console.log(data);

res.render("index.ejs",{chats});
});

//New AND Create Route
app.get("/chats/new",(req,res)=>{
res.render("newChat.ejs");
});

app.post("/chats",(req,res)=>{
  let{from,to,message} = req.body;
  let newChats = new Chat({
    from : from,
    to : to,
    message :message,
    created_at : new Date()
  });
  newChats.save().then((result)=>{
    console.log("data are save");
  }).catch((error)=>{
    console.log(error);
  });
  console.log(newChats);
 res.redirect("index.ejs");
})

//edit Rout:
app.get("/chats/:id/edit",async(req,res)=>{
  let{id} = await req.params;
  let chat = Chat.findById(id);
 res.render("edit.ejs",{chat});

});
app.put("/chats/:id",(req,res)=>{

});

app.get("/nik",(req,res)=>{
    req.send("hello");
});

let port = 8080;
app.listen(port,()=>{
    console.log("run on port 8080");
});
