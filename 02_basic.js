// Primitive

//7 categories:String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100 //number
const scoreValue =100.3 //number not float

const isLoggedIn = false
const outsideTemp = null
let userEmail;
 const id = Symbol('123');
 const anotherId = Symbol('123');
 console.log(id === anotherId)

  let help = 22939393930302020323039393399339n
  console.log(typeof help)
//Reference or (non primitive)

//Array,Objects,Functions

const heroes =["shaktiman","naagraj","doga"];
let myobj={
 name:"shivam",
 rollno: 156
}
console.log(myobj);
console.log(typeof myobj)
console.log(typeof null)
//concept of memory in javascript

// Stack (Primitive),Heap ()
let one ="shivam";

let two=one;
two= "chai aur code";
console.log(one);
console.log(two);
