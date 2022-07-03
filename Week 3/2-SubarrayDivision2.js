/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. */


//TEST CASE
const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;
//TEST CASE

function birthday(s, d, m) {
    let total = 0;
    
    for (let i = 0; i <= s.length - m; i++) {
        console.log("new ln:" + i);
        let set = 0;
        
        for (let j = i; j < i + m; j++) {
            set += s[j]
        };
        
        if (set === d) {
            total += 1;
        }
    }
    
    return total;
}