const fruits = ["apple","banana","grapes"];

fruits.push("peach");
console.log(fruits);

console.log(fruits);
 // array destructuring

 const myarr =["value1","value2","value3","value4"];
//  let [myvar1,myvar2] = myarr;
//  console.log(myvar1);
//  console.log(myvar2);
 //slice method  array destruction
// let newarr = myarr.slice(2);
// console.log(newarr);
 
// array destructuring allotion of same variable to rest of community
let [ myvar1, myvar2,...myvar3] = myarr;
console.log(myvar1);
console.log(myvar2);
console.log(myvar3);