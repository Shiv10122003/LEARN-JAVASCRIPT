//optional chaining .?
// let user ={
//     firstname:"harshit",
//     // address:{houseNumber:"1234"}
// }
let user;
console.log(user?.address?.houseNumber);
//usually used in react where whole data is not present at a time

//method or function inside function
function personInfo(){
    console.log(`person name is ${this.firstname} and age is ${this.age}`  );

}
 const person1 ={
 firstname: "harsh",
 age: 8,
 about: personInfo
 };

 const person2 ={
    firstname: "rahul",
    age: 12,
    about: personInfo
    };
 
    const person3 ={
        firstname: "seema",
        age: 9,
        about: personInfo
        };
        

 person2.about();