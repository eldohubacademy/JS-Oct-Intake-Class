// When you define a string variable, you automatically inherit properties and methods(functions) form the globally Available String object.

let username = "kipchirchir"; // defining/creating a tring

const firstChar = username.charAt(0); // K

console.log(firstChar);

console.log(username.at(1));

console.log(username.startsWith("in"));
// startsWith

console.log(username.replace("KB", "J"));

console.log(username.split("i").length - 1); // count the number of times a char(pattern) appears in a string
