/* Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well.
In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them. */

function closestNumbers(arr) {
  // Sort the array smalles to largest
  arr = arr.sort((a, b) => a - b);
  // Set the highest num value possible as starting placeholder
  let min = Number.MAX_VALUE;
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const pair = arr.slice(i, i + 2);
    const diff = Math.abs(pair[1] - pair[0]);

    // If this pair is lower than any previous ones, set new min and clear old array values
    if (diff < min) {
      min = diff;
      answer = [pair[0], pair[1]];
      // If diff is same as previous min then push that answer as well
    } else if (diff === min) {
      answer.push(pair[0]);
      answer.push(pair[1]);
    }
  }

  console.log(answer);
  return answer;
}

closestNumbers([-543, 432, 14, 49, 199, -89]); // answer: [14, 49]
