 function hello(){
    console.log("hello world");
 }
// const hello ={};
// const hello = ["harshit",1,"julie",5];
// // javascript function ===> function + object

// console.log(hello.name);
``
// // you can add your own properties
// hello.myOwnProperty ="very unique value";
// console.log(hello.myOwnProperty);

// console.log(hello.prototype);
// if(hello.prototype){
//     console.log("prototype is present");

// }
// else{
//     console.log("prototype is not present");
// }

// only function provide prototype property
hello.prototype.abc ="abc";
hello.prototype.ABC ="ABC";
hello.prototype.sing = function(){
    return "lalala";
}
console.log(hello.prototype);
console.log(hello.prototype.sing());