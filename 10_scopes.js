let a = 50;
// Global Scope
if (true) {
  let a = 10;
  const b = 20; // Block Scope
  //   console.log("inner: ",a);
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console global scope and coding platform global scope are different from each other

// console.log(a);
// console.log(b);

// function one() {
//   const username = "satyam";

//   function two() {
//     const website = "github";
//     console.log(username);

// parent scope cannot reach children scope's data but children scope can take the data of parent scope

//   }
//   //   console.log(website);   // not possible
//   two();
// }
// one();

if (true) {
  const username = "RedDevil";
  if (username == "RedDevil") {
    const website = "youtube";
    // console.log(username + website);
  }
//   console.log(website);          // not possible
}
// console.log(username);           // not possible

// +++++++++++++++++++++  interesting  ++++++++++++++++++++


function addone(num){
    return num+1                // can be called or accessed before initialization
}
addone(5)

const addtwo = function(num){
    return num + 2              // can't be called or accessed before initialization
}
addtwo(5)