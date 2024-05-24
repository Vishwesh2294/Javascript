//  ********************  DATA TYPES  **************************
// (1) primitive
// 7 types => string , number boolean ,null, undefined, symbol, bigInt 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)  // output is false 

// (2) Reference ( non primitive)
// array, object, functions 


//******************************************************

// primitive( stack memory )   ,  non primitive or reference ( heap memory )

let myName = "vishu"
let anotherName = myName
anotherName = "Pranjal"

console.log(myName)
console.log(anotherName)