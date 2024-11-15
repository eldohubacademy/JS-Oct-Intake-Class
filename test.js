let car = {
  color: "red",
  year: 2019,
  some: {
    one: "yes",
    two: "no",
  },
  make: "Toyota vitz",
  has_turbo: false,
  "previous owners": ["albert", "ivan", "James"],
  start: function (key) {
    console.log("car is sarting!!1");
    console.log("Vroooom!");
    console.log("Ready to go");
  },
};

console.log(car.age?.month);
