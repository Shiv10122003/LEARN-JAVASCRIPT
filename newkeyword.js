//new keyword
//1. this ={}
// return object

// function createUser(firstname,lastname,email,age,address){

//     //GIVING METHOD  OBJECT AS A PROTO OF USER OBJECT;
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.email =email;
//     this.age = age;
//     this.address = address;
    

// }
//  const hello = new createUser("shivam","tripathi","sivam122102002@gmail.com",23,"gorakhpur");
// createUser.prototype.about = function(){
//     return `${this.firstname} is ${this.age} years old`;
// }
// createUser.prototype.is18 = function(){
//     return this.age >=18;
// }
// createUser.prototype.sing = function(){
    // return "la la la"
// }

// //hasown property is used when we have to show key of its own object and not prototype as key
// for(let key in hello){
//     if(hello.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
//new javascript
 
class createUser{
    constructor(firstname,lastname,email,age,address){

        //GIVING METHOD  OBJECT AS A PROTO OF USER OBJECT;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email =email;
        this.age = age;
        this.address = address;
    }
       about(){
            return `${this.firstname} is ${this.age} years old`;
        }
       sing(){
        return "la la la";
       }
       func(a){
        console.log(a);
       }
    } 

const hello = new createUser("shivam","tripathi","email",20,"address")
// console.log(hello.sing());
// console.log(Object.getPrototypeOf(hello));
console.log(hello.func("hello"));