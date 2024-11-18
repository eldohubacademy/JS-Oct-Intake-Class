/**
 * Write a function isEvenOrOdd that takes an integer as input and returns "Even" if the number is even, and "Odd" if the number is odd
 
 * Create a function getDayName that takes a number (1 to 7) representing the day of the week and logs the corresponding day name (e.g., 1 = "Sunday", 2 = "Monday", etc.). Use a switch statement.

 * Create a function findMax that takes an array of numbers and returns the maximum value in the array. Use a loop to find the maximum value.

 * Write a function checkRange that takes a number and checks if it is between 10 and 20 (inclusive). Log and Return "In range" if true, otherwise "Out of range".

 * Create a function sumPositiveNumbers that takes an array of numbers and returns the sum of all positive numbers. Use a loop and an if condition to check for positive numbers. Example Array [1, -2, 3, 4, -5]

 * Write a function personInfo that takes an object representing a person (with name, age, and occupation properties) and returns/logs a string describing the person. Example: "John is 30 years old and works as a teacher."
 */

const p1 = {
  name: "Vincent",
  age: 30,
  occupation: "Software Developer",
};
const p2 = {
  name: "Anne",
  age: 20,
  occupation: "Teacher",
};

function personInfo(info) {
  console.log("hello");
  if(info.age<28){
      return;
  }
  console.log(
    info.name +
      " is " +
      info.age +
      " years old and works as a " +
      info.occupation
  );
}

personInfo(p1)
personInfo(p2)
personInfo({ name: "albert", age: 52, occupation: "mjengo guy" });

