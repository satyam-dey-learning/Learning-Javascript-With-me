// ******DATE*******

// Temporal.Now.instant()

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// In JAVA Script Month starts with '0'
// let myCreatedDate = new Date(2023,0,23,5,3); // time in hr,min
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);  // in milisecond
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // for in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

