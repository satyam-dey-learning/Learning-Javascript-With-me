function nameFunction() {
  console.log("S");
  console.log("A");
  console.log("T");
  console.log("Y");
  console.log("A");
  console.log("M");
}

// nameFunction()

// function addtwonum(number1, number2) {
//     console.log(number1+number2);
// }

function addtwonum(number1, number2) {
  let result = number1 + number2;
  return result;
  return number1 + number2;
  console.log("Satyam"); // after return nothing will be printed
}
// const result = addtwonum(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username) {
  // can be initialized here
  if (username === undefined) {
    //(!username)
    console.log("Please enter a username....");
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Satyam"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage()); // undefined

function calculateCartPrice(...num1) {
  // rest or spread operator
  return num1;
}
function calculateCartPrice(val1, val2, ...num1) {
  // 1st, 2nd, rest of the array
  return num1;
}

// console.log(calculateCartPrice(2,200,500,6000));

const user = {
  username: "Satyam",
  price: 99,
};

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user);
// handleObject({
//   username: "Shreya",
//   price: 999,
// });

const array1 = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(array1));
console.log(returnSecondValue([500,6000,800,8,736]));
