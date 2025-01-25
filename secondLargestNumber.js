/* 
Brute Force Approch

Given array array of size N, print second largest distinct element from array.

 [12, 35, 1, 10, 34, 1] --> 34
[10, 5, 10] --> 5

 Step - 1. Remove the duplicate element from array. using set method. it will return object
 Step - 2. Convert obj into Array
 Step - 3. Sort the array by descending order.
 Step - 4. Take the second index from the array.

*/

function secondLargestNumber(array) {
    const uniqueArr = Array.from(new Set(array));

    const sortedArr = uniqueArr.sort((a, b) => b - a);

    if (sortedArr.length >= 2) {
        return sortedArr[1];
    } else {
        return sortedArr;
    }
     
}

// console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]));

// console.log(secondLargestNumber([10, 5, 10, 8]));

function secondLargestNumberOptimised(array) {
    let largest = Number.NEGATIVE_INFINITY; // -1
    let secondLargest = Number.NEGATIVE_INFINITY; // -1

    for (let i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if(array[i] != largest && array[i] > secondLargest) {
            secondLargest = array[i];
        }
        
    }
    return secondLargest;
}

console.log(secondLargestNumberOptimised([12, 35, 1, 10, 34, 1]));

console.log(secondLargestNumberOptimised([10, 5, 10, 8]));

console.log(secondLargestNumberOptimised([8]));
