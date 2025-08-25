// singleton
// Object.create

// Part 1
// ------

// object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Satyam",
  "full name": "Satyam Dey",
  [mySym]: "mykey1",
  age: 22,
  location: "Asansol",
  email: "satyamdey@amazon.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "satyam@yahoo.com";
// Object.freeze(JsUser)
JsUser.email = "satyam@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Satyam");
};
JsUser.greetingTwo = function () {
  console.log(`Hello, ${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// Part 2
// ------

// const fbUser = new Object()  // singleton object
const fbUser = {}; // non singleton object

fbUser.id = "123abc";
fbUser.name = "Satyam";
fbUser.isLoggedIn = false;

// console.log(fbUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Satyam",
      lastname: "Dey",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "fhf2@gmail.com",
  },
  {
    id: 2,
    email: "gykf2@gmail.com",
  },
  {
    id: 3,
    email: "fhjtjt@gmail.com",
  },
];

users[1].email;
// console.log(fbUser);

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));

// console.log(fbUser.hasOwnProperty("isLoggedIn"));

// Part 3
// ------

// Destructure of Object

const course = {
  coursename: " web development",
  price: "9999",
  courseInstructor: "Sattu"
};

// course.courseInstructor

const {courseInstructor: instruct} = course
console.log(instruct);

// const navbar = ({company}) => {

// }
// navbar(company="sattu")

// api s

// {
//   "coursename": " web development",
//   "price": "9999",
//   "courseInstructor": "Sattu"
// }

[
  {},
  {},
  {}
]