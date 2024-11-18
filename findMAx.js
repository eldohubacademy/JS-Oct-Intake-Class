//  Create a function findMax that takes an array of numbers and returns the maximum value in the array. Use a loop to find the maximum value.

function findMax(numbers) {
  // LOOP THROUGH THE NUBERS ARRAY FROMINDEX 0 TO LAST INDEX
  // AT EACHNUMBER, COMPARE IT WITH A REFERENCE POINT, EACH CASE REPLACING IT IF IT IS SMALLER OR ELSE IGNORING THE REFERENCE POINT.
  let refPoint = 0;
  for (let index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index];
    if (currentNumber > refPoint) {
      refPoint = currentNumber;
    }
  }
  return refPoint;
}

console.log(findMax([10, 23, 22.1, 19, 80.4, 56, 32]));

findMax([1, 2, 4, 2, 6, 3, 2, 1, 4, 9, 3, 21, 2, 23]);
