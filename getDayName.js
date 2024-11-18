// Create a function getDayName that takes a number (1 to 7) representing the day of the week and logs the corresponding day name (e.g., 1 = "Sunday", 2 = "Monday", etc.). Use a switch statement.

function getDayName(number) {
  switch (number) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;

    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      return "out of range";
      break;
  }
}
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(12));
