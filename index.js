const decimalNumbers = [2.3, 1.4, 7.5, 8.6, 9.1]; // Create an Array of Decimal Numbers

// Create a Function to Calculate the Mean
function calculateMean(numbers) {
    let sum = 0; // Create a variable to hold the sum and initialize it to 0
    // Use a for loop to iterate through the array, adding each element to the sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length; // Divide the sum by the number of elements in the array and return the result.
}