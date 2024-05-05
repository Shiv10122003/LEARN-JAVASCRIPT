let date = new Date()
console.log(date.toString()) 
console.log(date.toDateString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())//it represent  only date in //seperated 3/08/2024

//month start with 0 injavascript
let mycreateddate = new Date(2023,0,23)
let mycreatedDate =new Date(2023,0,23,5,3)
// console.log(mycreatedDate.toLocaleString())
//new format to createw new date
let mycreatedate = new Date("2023-01-23")
// console.log(mycreatedate.toLocaleString())
//in indian standard (month-date-year)
let mydate = new Date("01-23-2023")
// console.log(mydate.toLocaleString())

let mytimestamp = Date.now();
// console.log(mytimestamp); // shows time in millisecond after 1 january 1970
// console.log(mydate.getTime())
// console.log(mycreatedate.getTime());

console.log(Math.floor(Date.now()/1000))
 let newdate = new Date()
 console.log(newdate);
 newdate.toLocaleTimeString("default",{
    timeZone:GamepadButton,
    st



 })
 //we can customize new date using localstring using object declaration;
  





