// This was a cool answer I found on the discussion boards. missingNumbers1 is not my work. It's 6 times faster than my answer.
const missingNumbers1 = (a, b) => {
  const min = Math.min(...b); // Store the minimum value in the original array;
  const dif = Array(100).fill(0); // Create an array with 100 indecies with 0 value;
  const res = []; // Create empty array;

  /*
    For each value in the comparator array,
    target the index that equals the difference between the current val and "min".
    We're subtracting 1 for each time this difference occurs.
  */
  for (let n of a) dif[n - min]--;
  /*
    Doing the same, but this time for the original array.
    If the value at the index of dif doesn't cancel out to 0, then there is clearly an unequal amount of that value between the two arrays.
  */
  for (let n of b) dif[n - min]++;
  // for each index in def, if the value is not 0,
  // add the number of indexes away from the minimum to the minimum to get the value and push it to res
  for (let i in dif) if (dif[i]) res.push(+i + min);

  return res;
};

console.time("missingNumbers1");

missingNumbers1(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);

console.timeEnd("missingNumbers1");

// This is my answer.
function missingNumbers2(arr, brr) {
  const usedArr = []; // arr for keeping track of used values
  const missingArr = []; // arr for answers

  for (let i = 0; i < brr.length; i++) {
    const currentIndex = brr[i];
    // If number has been checked already then skip
    if (usedArr.includes(currentIndex)) continue;
    // Filter original brr to see how many time num appears
    const original = brr.filter((x) => x === currentIndex);
    // Same for comparator array
    const comparator = arr.filter((x) => x === currentIndex);
    // If they don't appear same number of times then add to answer
    if (original.length != comparator.length) {
      missingArr.push(currentIndex);
    }
    // Push this value to usedArr so code isn't run for duplicates
    usedArr.push(currentIndex);
  }

  // Return sorted
  return missingArr.sort((a, b) => a - b);
}

console.time("missingNumbers2");

missingNumbers2(
  [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
  [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
);

console.timeEnd("missingNumbers2");
