const name = " vishu "
const repoCount = 50 

//console.log(name + repoCount + " value")  => this type of concodenation is not preferable

console.log(`hello my name is ${name} and my repo Count is ${repoCount}`)  // better way 

const gameName = new String(`vishwesh`)  // another way of declaring string 
console.log(gameName[0])  // finding any index element 

console.log(gameName.length)              // finding the length of the string 
console.log(gameName.toUpperCase())      // converted to upper case 
console.log(gameName.charAt(6))        // finding character at particular position 
console.log(gameName.indexOf(`e`))        // finding index of a partricular character 

const newString = gameName.substring(0,4)   // finding substring from the given string 
console.log(newString)

const anotherString = gameName.slice(-6,4)    // for negative values counting starts from backward 
console.log(anotherString)

const newStringOne = "     vishwesh      "     // there is extra space other than vishwesh 
console.log(newStringOne)
console.log(newStringOne.trim())       // used to trim the extra space 

const url = "https//vishu.com/vishu%20upadhyay"
console.log(url)
console.log(url.replace(`%20`,`-`))    // replace particular thing 
console.log(url.includes(`sunday`))    // we can ask that a particular thing is present in the string or not 





