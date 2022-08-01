// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

//TEST CASE
const a = [4, 6, 5, 3, 3, 1];
//TEST CASE

function pickingNumbers(a) {
  let currentVal;
  let answer = 2; // answer cannot be < 2

  if (a.length == 2) return answer;

  a = a.sort((a, b) => a - b);

  // Make a subarray for each n that includes itself and any instance of n+1
  a.forEach((e) => {
    // if e is the same number as the last e, continue because the action has already been done
    if (currentVal === e) {
      null;
    } else {
      currentVal = e;
      // make a new subarray containing filtered values
      const sub = a.filter((e) => e == currentVal || e == currentVal + 1);
      // set a new answer if this is the longest subarray yet
      if (sub.length > answer) answer = sub.length;
    }
  });

  return answer;
}

pickingNumbers([4, 6, 5, 3, 3, 1]);
