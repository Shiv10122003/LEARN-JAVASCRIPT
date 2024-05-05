const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(2))
//GIVES THE NUMBER PRECISELY.
const otherNumber  = 123.8966
console.log(otherNumber.toPrecision(4))
//SHOWING THE COMMA IN LAKH TEN LAKH ETC.
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//>>>>>>>>>>>>>>>>>>>>>>>>MATH.>>>>...>>>>>>>>>>>>>>>>>>>>>>>>>//
console.log(Math);
console.log(Math.round(2.39))
console.log(Math.abs(-4))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(4,3,5,2))
console.log(Math.max(4,3,5,2))

console.log(Math.random())
// math to find out the value between min and max values;
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))