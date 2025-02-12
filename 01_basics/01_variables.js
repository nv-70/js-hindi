const accountId = 14453
let accountEmail = "nitin@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState; // if not initialised with any value then it give undefined output
// accountId = 3    ->not allowed

accountEmail = "nt@.com"
accountPassword = "354789"
accountCity = "Bangaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])