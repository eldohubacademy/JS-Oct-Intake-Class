// control structures are used to to control the flow of execution in a program based on conditions, loops, or other patterns.

// conditional statements --  execute certain blocks of code based on specific conditions. if..else , switch , ternary operator

let age = 9;

if (age > 65) {
  console.log("Retired!!!!");
} else if (age < 18) {
  console.log("Studying!!");
} else {
  console.log("Working!!");
}

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("I love bananas.");
    break;
  case "apple":
    console.log("I love apples.");
    break;
  default:
    console.log("I love all fruits.");
}

age < 10 ? console.log("lower secondary") : console.log("upper primary");
let email = "albert@gmail.com";

const userRole = email.endsWith("eldohub.co.ke") ? "admin" : "client";

console.log(userRole);

// Loops/Iterators --- used to repeat a block of code as long as a specified condition is true or until a certain condition is met. for..loop , while loop

let count = 1;
while (count < 100) {
  if (count % 5 == 0) {
    count++;
    continue;
  }
  console.log("counting at number " + count);
  count = count + 1; // count++
}

for (number = 200; number < 400; number = number - 5) {
  console.log("loop sstarted");
  console.log("current value of number: " + number);
  console.log("loop end");
  if (number < 0) {
    break;
  }
}

// Jump statements ---- altering natural flow of loops or functions e.g. break, continue, return

// tasks -- leetcode , hackerrank... .coding chanllengessss
