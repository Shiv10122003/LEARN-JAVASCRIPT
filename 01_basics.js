 let score = "33abc"

 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score);
 console.log(typeof valueInNumber);
 console.log(valueInNumber);
//not a strict check language
let scare = null;
let valueInNumber1 = Number(scare);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
//booleaN
let score1 = true;
 let valueInNumber2 = Number(score1);
 console.log(valueInNumber2);
//UNDEFINED
let score2 = undefined;
let valueInNumber3=Number(score2);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);
// "33"=>33
//  "33abc"=>Nan ,null=>0 ,undefined=>nan
// boolean(true)=>1 in number~
//boolean(false)=>0 in number
//to boolean("")=>false in boolean
//to boolean("shivam")=>true in boolean
//other datatype to string
let somenumber = 45;
console.log(typeof somenumber);
let somestring = String(somenumber);
console.log(typeof somestring)
console.log(somestring);

