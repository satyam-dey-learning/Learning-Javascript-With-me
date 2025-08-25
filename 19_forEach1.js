// for Each
// ------

const programming = ["js", "rb", "py", "java", "cpp"]

// programming.forEach( function (item) {
//     console.log(item);
    
// } )   // function should be a call back function which has no name

// programming.forEach( (item) => {
//     console.log(item);
// } )     // same as arrow function

// function printme(item) {
//     console.log(item);    
// }

// programming.forEach(printme)        // for another function

// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// });


const coding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

coding.forEach( (item) => {
    console.log(item.languageName);
    
} )