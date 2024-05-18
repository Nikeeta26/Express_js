const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const methodOverride = require("method-override");
let port = 8080;
const { v4: uuidv4 } = require("uuid");
const path = require("path");
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
import mysql from 'mysql2/promise';

app.listen(port,()=>{
  console.log("run on 8080");
});

//home routs
app.get("/",(req,res)=>{
let q = 'select count(*) from user';
try{
  connection.query(q,(err,result)=>{
    if(err) throw err;

    let count = result[0]["count(*)"];
       console.log(result);
       res.render("home.ejs",count);
    
      });
}catch(err){
console.log(err);
}
connection.end();
});

//GET our user
app.get("/user",(req,res)=>{
let  q ="select * from user";
try{
  query.connection(q,(err,result)=>{
   
      console.log(result);
      res.render("show.ejs",{result});
  })
}catch(err){
console.log("error");
res,send("error");
}
});

//edit route
app.get("/user/:id/edit",(req,res)=>{
  let{id} = req.params;
  let q = `select * from user where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      console.log(result);
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  }catch(e){
      res.send("error");
  }
});

//update route
app.patch("/user/:id",(req,res)=>{
  let{id}=req.params;
  let{password:foempassword,name:newUsername} = req.body;
  let q = `select * from user where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      console.log(result);
      let user = result[0];
      if(password != user.password)
        {
          res.send("wrong password");
        }
        else{
          let q2 = `UPDATE user SET name '${newUsername}' WHERE id='${id} `;
          connection.query(q2,(err,result)=>{
              res.redirect("/user");
          });

        }
 
    });
  }catch(e){
      res.send("error");
  }
})

//add new
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();
  //Query to Insert New User
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});


//delete user
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});


// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password:"nikeeta"
  });


  getRandomUser =  ()=> {
    return [
      faker.string.uuid(),
    faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

  
  //insert data into table user
  /*let q = "INSERT INTO user(id,name,emial,password) VALUES (?,?,?,?)";

  let data = [];
  for(let i = 1; i<100;i++)
    {
      data.push(getRandomUser());//100 fake user data

    }*/

  //let user = [2,"nik","anc@gmail.com","abc"];

 /* inter the multiple row value into table using array inside array

 let q = "INSERT INTO user(id,name,emial,password) VALUES (?)";

let user = [[2,"nik","anc@gmail.com","abc"],
[3,"nik","ayyuf@gmail.com","vbbbc"],
[4,"nik","abhjj@gmail.com","abhjjhc"]];
 
try{
  connection.query(q,[users],(err,result)=>{
    if(err) throw err;

       console.log(result);
    
      })
*/

//   try{
//     connection.query(q,data,(err,result)=>{
//       if(err) throw err;

//          console.log(result);
      
//         })
      
//   }
//   catch(err){
// console.log(err);
//   }
//   connection.end();
