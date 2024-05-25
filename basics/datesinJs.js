let date = new Date()
console.log(date)    // it shows date but not readable
console.log(date.toString()) // converted to readable format 

let myCreatedDate =  new Date(2024,0,22) // date is 22 jan 2024 because months
console.log(myCreatedDate.toString())     // starts from 0 in js  

let myCreatedDate1 =  new Date(2024,0,22,5,3) 
console.log(myCreatedDate1.toLocaleString()) 

let myCreatedDate2 =  new Date("2024-09-22") //=> another format of writing date
console.log(myCreatedDate2.toString())