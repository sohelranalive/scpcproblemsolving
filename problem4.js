// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findOutSumOfANumberFromArray(myArray, findSum) {
    let arrayIndex = [];
    for (i = 0; i < myArray.length; i++) {
        for (j = 0; j < myArray.length; j++) {

            if (myArray[i] + myArray[j] == findSum) {
                arrayIndex.push(i)
                arrayIndex.push(j)

                return arrayIndex;
            }

        }
    }
}

const myArray = [1, 3, 6, 7, 11, 15]

const result = findOutSumOfANumberFromArray(myArray, 9)
console.log(result);