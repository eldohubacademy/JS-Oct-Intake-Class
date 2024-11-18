// inheritance

const user = {
  username: "albert",
  email: "albert@gmail.com",
  id: 23433,
  sing: () => {
    console.log("singing alelujah!!!!!!!!");
  },
};
user.sing();
// inheritance occurs when a new object is created out of an existing object(parent), hence it acquires all properties of the parent object and can have properties if its own

const admin = Object.create(user); // creating an admin object from a user object(admin inherits all user properties)

console.log(admin.email);
admin.sing();
admin.role = "Privileged";

console.log(admin);

// Javascript is built with many objects which we inherit from by creating variables of different data types. E.g. Array, Number, Date, String, Object
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.includes(5));

// Array methods, number methos, object methods and string methods -- pre-written functions to help accomplish common tasks on  the respective data types

console.log("Albert".toLocaleLowerCase() == "albert".toLocaleLowerCase());

// TASK: Explore string and array methods -- functions built into js to help work with array and string common tasks
// 10 array // 10 string methods
("hello");
let x = 90.8029302324938493;
console.log(x.toFixed(2));

console.log("    kevin" == "kevin");
