let score = 33               
console.log(typeof score)       //number

score = "33"
console.log(typeof score)       //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)     // string converted to number

score = "33abc"
console.log(typeof score)           // string 
let valueInNumber2 = Number(score)   
console.log(typeof valueInNumber2)   // string converted to number
console.log(valueInNumber2)         // NaN(not an number)

score = null
console.log(typeof score)           //object
let valueInNumber3 = Number(score)
console.log(typeof valueInNumber3)  //converted to number
console.log(valueInNumber3)         // zero

score = undefined
console.log(typeof score)         // undefined

score = true
console.log(typeof score)         //boolean
let valueInNumber4 = Number(score)
console.log(valueInNumber4)        // true means 1 and false means 0

score = "vishu"
let valueInNumber5 = Number(score)    /*   string cannot be converted to number
console.log(valueInNumber5)             hence the result is NaN    */


//****************************operations*********************************

let score1 = 3 
let negValue = -score1
console.log(negValue)

let str1 = "vishu"
let str2 = "Upadhyay"
let str3 = str1 + str2    // output=vishuUpadhyay 
console.log(str3)     // NOTE- subtraction is not possible