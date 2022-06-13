/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

// TEST CASE
const arr = [1,3,5,7,9];
// TEST CASE

function miniMaxSum(arr) {
    const arr1 = arr.sort((a, b) => a - b).reduce((a, b) => a + b)
    
    const first = arr1 - arr[4];
    const second = arr1 - arr[0];
    
    console.log(first, second);
};