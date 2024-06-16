const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{console.log("connection successfull")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//order
const ordereSchema = new Schema({
item:{
    type:String,

},
price:{
    type:Number,
}

});


 
  const Order = mongoose.model("Order",ordereSchema);



//order
// const addOrder = async ()=>{
//   let res =  await Order.insertMany([
//     {item:"samosa",price:20},
//     {item:"wadapaw",price:50},
//     {item:"masala thosa",price:80}
// ]);
// console.log(res);
// };
// addOrder();


//customer
const customerSchema = new Schema({
  name:{
     type: String,
  },
  orders: [
      { 
          type: Schema.Types.ObjectId,
       ref: 'Order' 
      }
      ]
  
  });

  const Customer = mongoose.model("Customer",customerSchema);

  //customer
const addCust = async ()=>{
  // let cust1 = new Customer({
  //    name:"nikeeta",
  // });

  // let order1 = await Order.findOne({item:"samosa"});
  // let order2 = await Order.findOne({item:"wadapaw"});

  // cust1.orders.push(order1);
  // cust1.orders.push(order2);
  // let res = await cust1.save();
  // console.log(res);

  //print total object using populate method

  let res = await Customer.find({}).populate("orders");
  console.log(res[0]);
}
addCust();