//array method
//forEach
//map
//filter
//reduce

//forEach
const numbers=[4,2,5,8];

// function myFunc(number,index){
//  console.log(`number is ${number},index is ${index}`);
// }

// numbers.forEach(myFunc);

//creating function if for each callback function

// numbers.forEach(function(number,index){
//     console.log(number*3);
// }

//)
//calling object in array using forEach

// const user=[
//     {firstname:"shivam",age:21,gender:"male"},
//     {firstname:"vikas",age:21,gender:"male"},
//     {firstname:"rohan",age:32,gender:"gay"}
// ]

// user.forEach(
//     (user)=>{
//   console.log(`${user.firstname} is ${user.gender}`);
 
//     }
// )

//find method
// const myarray = ["hello","cat","dog","lion"];
// function islength3(string){ 
//     return string === 4;
// }
//  const ans = myarray.find(islength3);
//  console.log(ans);

// const ans = myarray.find((string)=>{

//   return string.length ===3 ;
// });
// console.log(ans)
//find an element in a array which has given properties as in function

// const user =[
//     {userId:1,username:"shivam"},
//     {userId:2,username:"harshit"},
//     {userId:3,username:"raghu"}
// ]

// const ans1 = user.find((user)=>{
//    return user.userId===3;
// }

// )
// console.log(ans1);

//EVERY METHOD IN AN ARRAY
//   let array = [4,6,8,10,12];
//   const ans1= array.every((number)=>{
//    return number%2===0;
//   })
//   console.log(ans1);




//fill method 
//value ,start,end
// const myarray = new Array(10).fill(9);
// console.log(myarray);

const myarray2 =[2,4,5,6,9,4]
myarray2.fill(2,2,5);
console.log(myarray2);

// 