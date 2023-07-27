// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function findOutMostFrequentElement(myArray) {


    let maxCount = 0;
    let mostFrequentElement;

    for (i = 0; i < myArray.length; i++) {
        let count = 0;
        for (j = 0; j < myArray.length; j++) {
            if (myArray[i] == myArray[j]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequentElement = myArray[i]
        }
    }

    return mostFrequentElement;
}

const myArray = [3, 5, 2, 5, 3, 3, 1, 4, 5]

const result = findOutMostFrequentElement(myArray)
console.log(result);