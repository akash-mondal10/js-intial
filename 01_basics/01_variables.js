// const is used to fix a particular variable with iys values
const accountId= 124589
let accountEmail="abc@example.com"
var accountPassord ="1256"
accountCity= "Asansol"

// accountId= 234 not allowed

accountEmail="bcd@example.com"
accountPassord="12458"
accountCity="Durgapur"

console.log(accountId)

/*
Prefer not ot use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassord,accountCity])
