const decimalNumbers = [2.3, 1.4, 7.5, 8.6, 9.1]; // Create an array of decimal numbers

// Create a function to calculate the mean
function calculateMean(numbers) {
    let sum = 0; // Create a variable to hold the sum and initialize it to 0
    // Use a for loop to iterate through the array, adding each element to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length; // Divide the sum by the number of elements in the array and return the result
}

const numbersMean = calculateMean(decimalNumbers); // Calculate the mean of the decimal numbers
const roundedMean = Math.round(numbersMean * 100) / 100; // Round the mean to the nearest integer with two decimal places

const message = `The mean of the decimal numbers is ${roundedMean}.`; // Create a message with the rounded mean
console.log(message); // Log the message to the console