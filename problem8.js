// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function finsSecondSmallestNumber(arr) {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        }
        else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}


const numbers = [5, 2, 9, 1, 5, 6];

const result = finsSecondSmallestNumber(numbers);
console.log(result);
