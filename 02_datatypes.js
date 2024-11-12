// datatypes determine what kind of values to stored in memory.

// in js we can split data types in two categories
// 1. Primitives/simple :- number, string, boolean, undefined , null
// 2. Non-primitives/complex/composite:- arrays, objects, functions

let rate = 17.8; // number
let password = "jhemkfs36742#$3!"; // string
const isAdmin = true; //boolean
let isLoggedIn = false; //boolean

// when you create a variable and not assign it a value, by default it is undefined
let username;

console.log(username); //undefined

// when you want to intentionally set a space to be empty, you  use null e.g. totalScore :- if the game has not started then we cant have a totalscore
let totalScore = null;

// non primitves
// array -- ordered list of values (same or different data types)
const colors = ["red", "green", "blue"];
const someVals = [true, 563.5, "okay", null, [254, 256]];

// ASSIGNMENT:- Why are arrays zero-indexed and how do we access values in an array?
console.log(typeof password);
console.log(colors[1]); // []- bracket notation used with indexes to access values of an array
console.log(someVals[2][1]);
console.log(password[0]);
console.log(someVals.length);
console.log(password.length);
// string and an array are iterable data types ---- iterate

// string indexd
// objects

// almost everyting in js is an object
// object is a collection of related data in key-value pairs -- real word representation of things
let car = {
  color: "red",
  year: 2019,
  make: "Toyota vitz",
  has_turbo: false,
  "previous owners": ["albert", "ivan", "James"],
  start: function (key) {
    console.log("car is sarting!!1");
    console.log("Vroooom!");
    console.log("Ready to go");
  },
};
car.start("passworkd");
console.log(typeof car);
console.log(typeof console);

// accessing values in an object we can use the dot notation or the brackect notation with a key
console.log(car.year); // 2019   -- dot notation
console.log(car["make"]); // toyata vitz -- "key"
console.log(car.make); // toyata vitz -- "key"
console.log(car["previous owners"][0]);
console.log(car.has_turbo);

// functions --- a reusable block of code

// in js, we can define functions in two ways
// 1. using function keyword
function perfomeSomeTask() {
  console.log("PErforming task");
  console.log("Running code");
}

// 2. arrow functions -- introduced in es6-2015
const doSomethingElse = () => {
  console.log("PErforming task 2");
  console.log("Running code 2");
};

// to use code written is a function block{}, we must call/invoke the function

doSomethingElse(); /// calling the func
doSomethingElse(); /// calling the func
doSomethingElse(); /// calling the func
doSomethingElse(); /// calling the func
perfomeSomeTask();
perfomeSomeTask();
perfomeSomeTask();

function sendEmail(recipient) {
  // logic --connnect to smtp server
  console.log("Sending an email to " + recipient);
}

sendEmail("Albert");
sendEmail("Ivan");
sendEmail("Faith");

// input/output
//operator

// Variable naming conventions & rules : task 1
