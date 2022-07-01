/* A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate. */

//NOTE: Work on manipulating strings.

//TEST CASE 
const string = "The quick brown fox jumps over the lazy dog";
//TEST CASE

function pangrams(s) {  
    const map = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
        10: "k",
        11: "l",
        12: "m",
        13: "n",
        14: "o",
        15: "p",
        16: "q",
        17: "r",
        18: "s",
        19: "t",
        20: "u",
        21: "v",
        22: "w",
        23: "x",
        24: "y",
        25: "z",
        26: " ",
    }
    
    for (let i = 0; i <= 26; i++) {
        if (!s.includes(map[i]) && !s.includes(map[i].toUpperCase())) {
            return "not pangram"
        }
    }
    
    return "pangram"
    
}

console.log(pangrams(string));