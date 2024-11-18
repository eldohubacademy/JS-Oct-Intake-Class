//  Create a function sumPositiveNumbers that takes an array of numbers and returns the sum of all positive numbers. Use a loop and an if condition to check for positive numbers. Example Array [1, -2, 3, 4, -5]

function sumPositiveNumbers(numbers) {
    let sum = 0 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum = sum + numbers[i]
        }
    }
    return sum
}
console.log(sumPositiveNumbers([23, -12, 44 , -10, 2]));
