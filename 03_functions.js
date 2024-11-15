// a function is a reusbale block of code

// a function can havezero, one or many arguments

// arguments are pices of data supplied to a function, needed to complete it's task
// arguments can be of any data type

// function definition(normal function)
function getTax(rate, amount) {
  const result = (rate / 100) * amount;
  console.log(result);
}

// calling/invoking the funciton
getTax(16, 1000);
getTax(2.5, 36000);

function countUsers(users) {
  return
  console.log("There are " + users.length + " users");
}

countUsers(["albert", "jones", "joy", "jane"]);
countUsers(["albert", "jane"]);

// operator + when dealing with strings is called the concatenation operator-- combines strings
