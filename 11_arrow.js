const user = {
  username: "satyam",
  price: 8945,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to this website`); // "this" refers current context
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username="aparup"
// user.welcomeMessage()

// console.log(this);       // current context = empty
// In browser, there is an object called "Window object".

// function chai(){
//     let username="lol";
//     console.log(this.username);     // undefined

// }

// chai()

//const chai = function () {
// let username="lol";
//     console.log(this.username);     // undefined
// };

// const chai = () => {
//   let username = "lol";
//   console.log(this);           // empty
//   console.log(this.username); // undefined
// };

// const addtwo = (num1, num2) => {
//   return num1 + num2;                // basic arrow function
// };

// const addtwo = (num1, num2) => num1 + num2;     // Implicit return

// const addtwo = (num1, num2) => (num1 + num2);     // Implicit return

// If written in {}, return keyword is required.
// If written in (parenthesis), return keyword is not required.

// const addtwo = (num1, num2) => {username:"satyam"}; // undefined should use ()

const addtwo = (num1, num2) => ({username:"satyam"});
console.log(addtwo(3,4));


const myArray=[2,5,5,6,10,9,11]

myArray.forEach()