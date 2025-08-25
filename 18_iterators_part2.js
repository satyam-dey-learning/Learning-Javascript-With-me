// for of
// ------

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  // console.log(i);
}

// const greetings = "Hello World!";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

// Maps
// ----

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("POR", "Portugal");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key,':-',value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'BGMI',
//     'game3': 'COC'
// }

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);        // Object cannot be iterable like this
// }



// for in
// ------

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(`${key} :- ${programming[key]}`);
}

for (const key in map) {
    // console.log(key);       // Can't be iterated like this
    
}