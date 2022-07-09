/* Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order. */


function maximumPerimeterTriangle(sticks) {
    // Write your code here
    let answer = [-1];
    
    sticks = sticks.sort((a, b) => a - b);
    
    for (let i = 0; i < sticks.length - 1; i ++) {
        const a = sticks[i];
        const b = sticks[i + 1];
        const c = sticks[i + 2];
        
        if (
            a + b > c &&
            b + c > a &&
            c + a > b
        ) {
            answer = [a, b, c];
        }
        
    }
    
    return answer

}