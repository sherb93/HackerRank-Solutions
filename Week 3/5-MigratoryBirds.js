/* Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids. */

//TEST CASE
const arr = [1, 1, 2, 2, 3];
//TEST CASE

function migratoryBirds(arr) {
    // variables keeping track of type, highest count, and current count
    let type;
    let hi = 0;
    let num = 1;
    
    // sort the array for easier iteration
    const sort = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < sort.length - 1; i++) {
        for (let j = i+1; j < sort.length; j++) {
            if (sort[i] === sort[j]) {
                num++
            } else {
                // set new starting point for outer for loop
                i = j - 1;
                break;
            }
        };
        
        // conditionals to check for reassignments to global variables
        if (num > hi) {
            hi = num;
            type = sort[i];
        } else if (num === hi) {
            console.log(type, sort[i])
            // if sightings are equal take the lesser value type
            type = Math.min(type, sort[i]);
        };
        
        num = 1;
    }
    
    return type;
    
}