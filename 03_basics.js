//strings in javascript
const name="shivam";
const sirname="tripathi";
console.log(name)
console.log(name + sirname)
//variable addition
//STRING INTERPOLATION, backticks
console.log(`Hello my name is ${name} and my sirname is ${sirname}`)


const gameName = new String("shivam");
console.log(gameName);
//to access element in string
console.log(gameName[2])
console.log(typeof gameName.valueOf())


console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName)
//value of game change donot change due to stack property in primitive data type
console.log(gameName.indexOf("m"))
console.log(gameName.charAt(2))
console.log(gameName)
//substring it cannot give negative indexing
const newString = gameName.substring(0,4)
console.log(newString)
//using slice "we can give negative indexing also"
console.log(gameName.slice(-6,4))

const anotherString = new String ("   shivam  ")
console.log(anotherString)
 let anotherString1=new String(anotherString.trim())
 console.log(anotherString1)

 const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes("hitesh"))
console.log(url.endsWith("y"))
console.log(url.concat("good"))
console.log(url)
