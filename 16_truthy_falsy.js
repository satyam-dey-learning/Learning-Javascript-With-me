// const userEmail = "satyam.com"

// if (userEmail) {    // Assuming the value is true
//     console.log("got user email");
// } else {
//     console.log("don't have user email");
// }

// flasy values →
// false, 0, -0, BigInt → 0n, "", null, undefined, NaN

// truthy values →
// "0", 'false', " ", {}, [], function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");   // To check, if an array is empty or not
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");     // To check, if an Object is empty or not
// }

// Nullish Coalescing Operator (??): null undefined
// Only for "null and undefined"
let val1;
// val1 = 5??10
// val1 = null??10
// val1 = undefined??10
val1 = null ?? 10 ?? 15;    // Will take the first value

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")