/* There are two n-element arrays of integers, A and B.
Permute them into some A' and B' such that the relaation:
A'[i] + B'[i] >= k is true for all i's in the arrays.
Return "YES" if some permutation satisfying the relation exists.
Otherwise, return "NO". */

//TEST CASE
const k = 10;
const A = [2, 1, 3];
const B = [7, 8, 9];
//TEST CASE

function twoArrays(k, A, B) {    
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => a - b);
    let j = B.length - 1;
    
    for (let i = 0; i < A.length; i++) {
        
        if (sortedA[i] + sortedB[j] < k) {
            return "NO";
        } else {
            if (j > 0) {
                j--;
            } else {
                return "YES";
            }
        }
    }

}