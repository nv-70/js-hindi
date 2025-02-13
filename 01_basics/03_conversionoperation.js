let score = "33abc"

console.log(typeof score);  // string
console.log(typeof(score)); // string

let valueInNumber = Number(score) 

console.log(typeof(valueInNumber))// number
console.log(valueInNumber)  // NaN -> Not a Number
let sc = null;
let valueInNum = Number(sc);
console.log(valueInNum); // give 0
// if we write sc as true it will give 1 and 0 for false 
// if we write string gives NaN

// let isLoggedIn = "Nitin" ;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// 1->true
// 0 -> false
// "" -> false
// "anything" -> true

let isLoggedIn = 33 ;
let In = String(isLoggedIn);
console.log(typeof In);