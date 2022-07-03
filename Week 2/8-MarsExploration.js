/* Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation. */


//TEST CASE
const string = "SOSTOT"
//TEST CASE

function marsExploration(s) {
    // check groups of 3 in for loop
    // if group doesnt match SOS check which letters are off and increase counter
    let counter = 0;
    
    for (let i = 0; i < s.length - 2; i += 3) {
        if (s[i] !== "S") counter += 1;
        if (s[i + 1] !== "O") counter += 1;
        if (s[i + 2] !== "S") counter += 1;
    }
    
    return counter;

}