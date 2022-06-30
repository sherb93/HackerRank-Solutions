/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly *STEPS* steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */

// TEST CASE
const steps = 8;
const path = ["U", "D", "D", "D", "U", "D", "U", "U",];
// TEST CASE


function countingValleys(steps, path) {
    // Write your code here
    // counter to determine current steps above or below sea level
    // counter for valley count
    // for each U or D + or - counter
    let currentLevel = 0;
    let valleys = 0;
    let isNegative = false;
    
    for (let i = 0; i < steps; i ++) {
        currentLevel < 0 ? isNegative = true : isNegative = false;
        
        path[i] === "U" ? currentLevel += 1 : currentLevel -= 1;
        
        if (isNegative && currentLevel === 0) {
            valleys += 1;
        }
    }
    
    return valleys;

}