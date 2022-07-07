/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */

// TEST CASE
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;
// TEST CASE

function sockMerchant(n, ar) {
    // edge-case for n=1
    if (n === 1) {
        return 0;
    }
    
    // array that keeps track of numbers already used
    const used = [];
    let pairs = 0;
    let num = 1;
    
    
    // iterate through array and count how many kind there are
    for (let i = 0; i < n - 1; i++) {
        // if number has been used already then ignore
        if (used.includes(ar[i])) {
            continue;
        }
        
        // counts how many kinds of ar[i] there are
        for (let j = i + 1; j < n; j++) {
            if (ar[i] === ar[j]) {
                num++;
            }
        }
        
        // divide num by 2 and round down. add to pairs.
        pairs += Math.floor(num / 2); 
        
        used.push(ar[i]); // push sock to used array
        
        num = 1; // reset num
    }
    
    return pairs;
    
}