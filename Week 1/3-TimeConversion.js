/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

//THIS SOLUTION DOES NOT WORK FOR ALL TEST CASES BUT HACKERRANK HAS THEM LOCKED LOL

function timeConversion(s) {
    let strArr;
    
    if (s.charAt(8) === "A" && s.charAt(0) === "1" && s.charAt(1) === "2") {
        strArr = s.split(":");
        strArr.splice(0, 1, "00");
    } else if (s.charAt(8) === "P") {
        strArr = s.split(":");
        const timeStr = strArr.shift();
        
        let val = parseInt(timeStr);
        val += 12;
        strArr.unshift(val.toString());
    }
    
    const newTime = strArr.join(":");
        
    const hello = newTime.split("");
        
    hello.pop();
    hello.pop();
    const goodbye = hello.join("")
    return goodbye;
}


const str = "12:03:00AM";
timeConversion(str);