const accountId = 46256
let accountEmail = "ankit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;
//accountId = 2

accountEmail = "ankit.ar@google"
accountPassword = "121212"
accountCity = "Bengaluru"

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/