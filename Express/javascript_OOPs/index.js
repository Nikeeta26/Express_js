
/************ factory functions **********/
// function person(name,age){
//     const per = {
//               name:name,
//               age:age,
//               prop:this,
//               tack(){
//                 console.log(`hi, i am ${this.name}`);
//                 console.log(this);
//               },
//               get:function(){
//                 console.log(this);
//               }
//             }
//             return per;    
//     }
//     p1 = person("nik",10);
//     p2 = person("mik",34);

/************** constructors  *************/
// function Person(name,age){
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.talk = function(){
//     console.log(`hi i am ${name} and my age ${age}`);
// }
// let p3 = new Person("nik",20);
// let p4 = new Person("mik",10);

/************** classes ************/
// class Person{
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;

//     }
//     tack(){
//         console.log(`hi i am ${name} `);
      
//     }
// }

// let P1 = new Person("nik",12);
// let P2 = new Person("mik",30);

/************ Inheritance ***************/
// class Person{
//  constructor(name,age)
//  {
//     console.log("Person class constructor");
//     this.name = name;
//     this.age = age;

//  }
//  talk(){
//     console.log(`hi i am ${this.name}`);
//  }
// }

// class Student extends Person{
//     constructor(name,age,marks)
//     {
//         console.log("student class constructor");
//         super(name,age);//perent class constructor being called
//         this.marks=marks;

//     }
    
   
// }

// class Teacher extends Person{
//     constructor(name,age,sub){
//         console.log("Teacher class constructor");
//         super(name,age);//perent class constructor being called
//         this.sub = sub;
//     }
   
// }

// let stu = new Student("nik",30,56);
// stu.talk();
// let Teach = new Teacher("sakshi",30,20);
// Teach.talk();


class Mamal{//paraent class
    constructor(name)
    {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mamal{ //child class
    constructor(name)
    {
       super(name);
    }
    bark(){
        console.log("woof...");
    }
    eat(){
        console.log("I am dog");
    }
}

class Cat extends Dog{ //child class 
    constructor(name){
        super(name);

    }
    meow(){
        console.log("meow");
    }
}

let dog = new Dog("kauu");
let cat = new Cat("chiu");

class Box{
    constructor(name,l,b){
        this.name = name;
        this.l = l;
        this.b = b;

    }
    area(){
        let area = this.l * this.b;
        console.log(`Box area is ${area}`);
    }
}
class Square extends Box{
    constructor(a)
    {
        super("square",a,a);

    }
    area(){
        let area = this.l * this.b;
        console.log(`Square area is ${area}`);
    }
}

let sqr = new Square(4);
sqr.area();