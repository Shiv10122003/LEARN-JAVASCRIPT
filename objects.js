
// //objects are reference type just like an array
// //arrays are good but not sufficient for real world data
// //object store key value pair
// //object dont have index
// //how to create an object
// const key ="email";
// const person={
//     Name:"shivam",
//     age:22,
//     hobbies:["playing cricket","guitar","sleeping"]
// }
// //acess the object 
// // console.log(person.name);
// // console.log(person.age);
// // console.log(person.hobbies);
// //using bracket
// console.log(person["Name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);
// // add key value pair to object
// person.gender = "male";
// console.log(person);

// // passing index value using variable
// person[key]="sivam22102002@gmail.com";
// console.log(person);

// // nested destructuring in object;
 let info=[
    {username:"shivam" , userid:1, gender:"male"},
    {username:"dhairya", userid:2, gender:"male"},
    {username:"shrey", userid:3, gender:"male"}

 ]

let[{username:hell},{username:he,gender:sex},]= info;
console.log(`${he} is ${sex}`);


