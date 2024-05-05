// A javascript function is a block of code designed to perform particular task .
function addavg(x,y){
 return Math.ceil(1+(x+y)/2);
}

let a=1;
let b=2;
let c=3;
console.log(addavg(a,b));
console.log(addavg(b,c));
console.log(addavg(c,a));

// we have to invoke the function to use it
// new javascript functionsyntax given below
const hello =()=>{
    console.log("hello how are you how can i make you feel good?");
    return "hi";
}
console.log( hello());
// practice
let obj={
    rahul:90,
    samad:93,
    sahil:89
};
for(let i in obj){
    console.log(obj[i]);
}
//problem no 3
// let cn=43;
// let i;
// while(i!=cn){
//     i=prompt("enter a number");
// }
// console.log("you have entered a correct number");

// problem 4
let d=4;
 const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4

 }
 console.log(mean(a,b,c,d));
