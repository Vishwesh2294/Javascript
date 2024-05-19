const accountId = 123445
let accountEmail ="vishu@gmail.com"
var accountPassword = "734823"
let accountState;
 
/*    Prefer not to use use var beacause of issue in block scope 
      and functional scope.     */
   
accountCity = "dehradun"

// const accountId = 111    -> not allowed, const will not be changed 
accountEmail = "vishwesh@gmail.com"
 accountPassword = "111111"
accountCity = "Jaipur"

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
