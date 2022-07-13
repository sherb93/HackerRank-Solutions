 // Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

//TEST CASE
const a = [4, 6, 5, 3, 3, 1];
//TEST CASE

// It failed one Test Case on Hackerrank but it's locked wtf

function pickingNumbers(a) {
    // Sort the array by increasing value
    a = a.sort((a, b) => a - b);
    
    let answer = [];
    
    // nested for loops
    for (let i = 0; i < a.length - 1; i++) {
        if (answer.length > a.length - i) return answer.length;
        
        for (let j = i + 1; j < a.length; j++) {
            // if it satisfies condition then move to the next index
            if (Math.abs(a[i] - a[j]) <= 1) {
                continue;
            } else {
                // clone prevents original array from mutating
                const cloneArray = a.slice();
                const newAnswer = cloneArray.slice(i, j);
                if (newAnswer.length > answer.length) answer = newAnswer;
                
                i = j - 1;
                break;
            }
        }
    }
    
    return answer.length;
}