/* There is a collection of input strings and a collection of query strings.
For each query string, determine how many times it occurs in the list of input strings.
Return an array of the results. */

// TEST CASE //
const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

function matchingStrings(strings, queries) {
    // how many times the query string is in the input strings (exact match)
    
    const intArr = [];
    let counter = 0
    
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                counter += 1;
            }
        }
        
        intArr.push(counter);
        
        counter = 0;
    }
    
    return intArr;
    

}