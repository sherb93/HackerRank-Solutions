/* Given an array of integers and a positive integer k, determine the number of (i, j) pairs where index i <  index j and ar[i] + ar[j] is divisible by k.
divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor
*/

// TEST CASE
const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];
// TEST CASE

function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                counter += 1;
            }
        }
    }
    
    return counter;

}