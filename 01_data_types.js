"use strict"; // treat all JS code as newer version it can not be changed later
//alert(3+3) // we are using nodeJS, not browser

let name = "Satyam"
let age = 18
let isLoggedIn = false

// number => 2 to power 53
// bigint
// string => ""
// Boolean => true / false
// null => standalone value
// symbol => unique
// undefined =>

// object

console.log(typeof undefined);
console.log(typeof null);

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3


const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack Memory (Primitive data types)
// Heap Memory (Non-Primitive data types)
