/* Given an array of integers, where all elements but one occur twice, find the unique element. */

// TEST CASE //
const a = [1, 2, 3, 4, 3, 2, 1];
// TEST CASE //

function lonelyinteger(a) {
    // Write your code here
    let counter = 0;
    
    if (a.length === 1) return a[0]
    
    for (let i = 0; i < a.length; i++) {
        
        counter = 0;
        
        for (let j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                counter ++
            }
        }
        
        if (counter <= 1) return a[i]
    }
}