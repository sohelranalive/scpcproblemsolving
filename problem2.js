// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19



function sumOfPositiveNumbers(myArray) {
    let sum = 0;

    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > 0) {
            sum += myArray[i]
        }
    }
    return sum;
}

const myArray = [7, 8, -5, 10, -3, 5,]

const result = sumOfPositiveNumbers(myArray)
console.log(result);