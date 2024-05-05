//arrays in javascript
//Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list.

//creation of an array 
// const shopping = ["bread","milk","cheese","humus","noodles"]
// console.log(shopping);
// console.log(shopping.length);
//arrays in javascript are resizable
//copies made in array are shallow copies i.e. copies having same reference(heap concept)
//deep copy(donot have same reference having stack concept)
const myArr =[0,1,2,3,4]
const myHeroes=["shaktiman","naagraj",2]//we can add any data type at same time

const myArr2 = new Array(1,2,3,4)
console.log(myHeroes);

//push,pop,shift,unshift,join;
myArr.unshift(9)//unshift add no at 0 index only
// console.log(myArr);
myArr.shift();
// console.log(myArr);
myArr.push(9);
// console.log(myArr);
myArr.pop();
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2));

// slice vs splice 
//slice create a copy of an array by removing last element of the range in the argument
//  const nue=myArr.slice(1,3)
//  console.log("A",myArr);
//  console.log(nue);
 //splice remove the given array without carrying a copy;
 const arr= myArr.splice(1,3);
 console.log("B",myArr);
 console.log("arr");

 //doubt 1: why if array work on heap concept the reference the  slice operator create a copy of it;
 const marvel=["batman","spiderman","superman","perman"];
 const dcheroes = ["hacker","jacker","macker"];
 let heroes = marvel.concat(dcheroes);
console.log("heroes");
   


//push is based on stack
 marvel.push(dcheroes);
 console.log(marvel);