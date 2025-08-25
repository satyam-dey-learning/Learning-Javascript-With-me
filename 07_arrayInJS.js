// Part 1
// ------

const arr = [0, 1, 2, 3, 4];
const arr2 = new Array(58, 59, 60, 33);

// console.log(arr[2]);
// console.log(arr2[2]);

// arr.push(6);
// arr.push(6);
// arr.pop();
// arr.unshift(9);

// console.log(arr.includes(9));

// console.log(arr.indexOf(3));

// console.log(arr);
// console.log(arr.slice(1,3));
// console.log("a",arr);
// console.log(arr.splice(1,3));
// console.log("b",arr);

// const newArr = arr.join()

// Part 2
// ------

const marvelheroes = ["ironman", "spiderman", "hulk", "antman"];
const dcheroes = ["superman", "batman", "flash", "wonder woman"];

// marvelheroes.push(dcheroes);
// console.log(marvelheroes);
// console.log(marvelheroes[3][1]);

const allheros = marvelheroes.concat(dcheroes);
// console.log(allheros);

const all_new_heros = [...marvelheroes, ...dcheroes]; // Using spread operator
// console.log(all_new_heros);

const arr3 = [
  1,
  2,
  3,
  [4, 5, 6, 7],
  8,
  9,
  [10, [11, 12, 13], 14],
  [15, [16, 17, [18, 19, 20, [21, 22, 23], 24], 25, 26], 27],
  28,
  29,
  30,
];
const arr4 = arr3.flat(Infinity);
// console.log(arr4);

console.log(Array.isArray("Satyam"));
console.log(Array.from("Satyam"));
console.log(Array.from({ name: "Satyam" })); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
