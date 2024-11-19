// Array object

let numbers = [1, 2, 3];
numbers.unshift(20);
numbers.shift();
numbers[1] = 90;
console.log(numbers);

console.log(numbers.includes(20));

console.log(numbers.join("-"));

const students = ["Sammy", "Kevin", "Samson", "Faith", "Ivan", "Sammy"];

console.log(students.sort().reverse());
console.log(students);

// some functions that take other functions as arguments

console.log(
  students.map(function (x) {
    return "student-" + x;
  })
); // map is HoF

students.forEach(function (item, index) {
  console.log(item, index);
});

// mutating vs non-mutating
// what is the return value
