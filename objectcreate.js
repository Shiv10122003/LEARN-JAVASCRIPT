//  function createUser(firstname,lastname,email,age,address){
//      const user ={};
//      user.firstname = firstname;
//      user.lastname = lastname;
//      user.email =email;
//      user.age = age;
//      user.address = address;
//      user.about = function(){
//                  return `${this.firstname} is ${this.age} years old`;
//     };
//     user.is18 = function(){
//       return this.age>=18;
//     };
//     return  user;
//  }

// const create = createUser("harshit","tripathi","sivam22102002@gmail.com",23,"gorakhpur");
// const create0 = createUser("shivam","tripathi","sivam122102002@gmail.com",21,"siwan");
// const create1 = createUser("shobhit","tripathi","sivam322102002@gmail.com",22,"chappara");
// console.log(create0);
// const user1= create0.about();
// console.log(user1);

//the problem is that function are created so many times in memory in order  to  sort it we have 


// function createUser(firstname,lastname,email,age,address){
//     const user =Object.create(Methods);
//     //GIVING METHOD  OBJECT AS A PROTO OF USER OBJECT;
//     user.firstname = firstname;
//     user.lastname = lastname;
//     user.email =email;
//     user.age = age;
//     user.address = address;
//     user.about = Methods.about;
//     user.is18 =Methods.is18;
//     return user;
// }
//  const Methods={
//     about : function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return "too na laa laaa";
//     },
//     dance: function(){
//         return "disco";
//     }
//  }
//  const create = createUser("harshit","tripathi","sivam22102002@gmail.com",23,"gorakhpur");
//  console.log( create);
//  const him =  create.about();
//  console.log(him);


//  /// solution using object.create
// const obj1 ={
//     key1 : "value1",
//     key2 :"value2"
// }
// //there is one more way to create empty object;
//  const obj2 = Object.create(obj1);
//  obj2.key3 = "value3";
//  console.log(obj2.__proto__=== obj1);

//  //this is happening 

function createUser(firstname,lastname,email,age,address){
    const user =Object.create(createUser.prototype);
    //GIVING METHOD  OBJECT AS A PROTO OF USER OBJECT;
    user.firstname = firstname;
    user.lastname = lastname;
    user.email =email;
    user.age = age;
    user.address = address;
    
    return user;
}
 const hello = createUser("shivam","tripathi","sivam122102002@gmail.com",23,"gorakhpur");
createUser.prototype.about = function(){
    return `${this.firstname} is ${this.age} years old`;
}
createUser.prototype.is18 = function(){
    return this.age >=18;
}
createUser.prototype.sing = function(){
    return "la la la"
}
console.log(hello.about());