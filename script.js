import { Add, Division, mul} from "./math.js";
import { generate} from "random-words";
import {fruit} from "./Fruits/index.js";
console.log(generate());



console.log(generate(5));
console.log(Add(1,4));
console.log(Division(3,5));
console.log(mul(3,5));
let n =5;

for(let i=0;i<n;i++)
{
    console.log("hello",i);
}



/******************** process.argv ************************/
let arg = process.argv;

for(let i=0; i<arg.length; i++)
{
    console.log("hello",arg[i]);
   
}
/*********** print tprim no using process.argv  */
// let arg1 =[] ;
//  arg1 = process.argv;
// let f=0;
// for(let i=0; i<arg.length; i++)
// {
//     console.log(arg[i]);
//     if(arg[i]%2==0)
//     {
//         f=1;
//       console.log("not prime");
//     }
// }
// if(f==0)
// {
//     console.log("prime no");
// }
/***************** module.exports*************************/
// const math = require("./math");
// console.log(math);
//  console.log(math.g);
// console.log(math.sum(2, 2));


console.log(fruit);